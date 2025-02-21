let choixObject = {
    'Pierre': {'Pierre': 'match nul', 'Ciseau': 'win', 'Papier': 'lose', 'Lezard': 'win', 'Spock': 'lose'},
    'Ciseau': {'Pierre': 'lose', 'Ciseau': 'match nul', 'Papier': 'win', 'Lezard' : 'win', 'Spock': 'lose'},
    'Papier': {'Pierre': 'win', 'Ciseau': 'lose', 'Papier': 'match nul', 'Lezard': 'lose', 'Spock': 'win'},
    'Lezard': { 'Lezard': 'match nul', 'Pierre' : 'lose', 'Papier': 'win', 'Ciseau':'lose', 'Spock': 'win'},
    'Spock' : {'Pierre': 'win', 'Ciseau' :'win', 'Lezard': 'lose', 'Papier' : 'lose', 'Spock': 'match nul'}
  }
function jouer(input){
let choix = ["Pierre", "Papier", "Ciseau","Lezard","Spock"];
let num = Math.floor(Math.random()*3);
let choixOrdi = choix[num]; 
let result 

switch (choixObject[input][choixOrdi]){
    case 'win': 
    result= "TU GAGNES, FELICITATIONS"
    break 
    case 'lose':
        result= "TU PERDS"
    break 
    default: 
    result= "MATCH NUL";
    break
}
alert("La machine à choisis : " + choixOrdi)
alert("Par conséquent: " + result);
document.getElementById('result').textContent = result 
}