const pronoun = ["the", "our"];
const adjective = ["great", "big"];
const noun = ["uruk", "wacom"];
const extension = ['com', 'es', 'de', 'it', 'uk'];

window.onload = () => {

 domain(pronoun, adjective, noun, extension);
}


function domain(a, b, c, d) {
    let domains = [];
    for (const element1 in a) {
          
        for (const element2 in b) {
          
            for (const element3 in c) {
                
                for (const element4 in d) {
                    if (c[element3].slice(-2) == d[element4]) {
                        domains.push(a[element1].concat(b[element2], c[element3].slice(0, -2), '.', d[element4]));
                    }
                    else if (c[element3].slice(-3) == d[element4]) {
                        domains.push(a[element1].concat(b[element2], c[element3].slice(0, -3), '.', d[element4]));
                    }
                    else{
                        domains.push(a[element1].concat(b[element2], c[element3], '.', d[element4]));
                    }
                }
            } 
        }
    }
    return domains;
}
console.log(domain(pronoun, adjective, noun, extension));