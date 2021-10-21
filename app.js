const PRONOUN = ["the", "our"];
const ADJECTIVE = ["great", "big"];
const NOUN = ["uruk", "wacom"];
const EXTENSION = ['com', 'es', 'de', 'it', 'uk'];

window.onload = () => {

 domain(PRONOUN, ADJECTIVE, NOUN, EXTENSION);
}


function domain(a, b, c, d) {
    let domains = [];
    for (const pronoun in a) {
          
        for (const adjective in b) {
          
            for (const noun in c) {
                
                for (const extension in d) {
                    if (c[noun].slice(-2) == d[extension]) {
                        domains.push(a[pronoun].concat(b[adjective], c[noun].slice(0, -2), '.', d[extension]));
                    }
                    else if (c[noun].slice(-3) == d[extension]) {
                        domains.push(a[pronoun].concat(b[adjective], c[noun].slice(0, -3), '.', d[extension]));
                    }
                    else{
                        domains.push(a[pronoun].concat(b[adjective], c[noun], '.', d[extension]));
                    }
                }
            } 
        }
    }
    return domains;
}
console.log(domain(PRONOUN, ADJECTIVE, NOUN, EXTENSION));

