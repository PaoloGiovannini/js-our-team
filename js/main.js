const listaDom = document.getElementById('lista');
let membri = [
    {
        "nome" : 'Wayne Barnett',
        "ruolo" : 'Founder & CEO',
        "foto" : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        "nome" : 'Angela Carrol',
        "ruolo" : 'Chief Editor',
        "foto" : 'angela-caroll-chief-editor.jpg'
    },
    {
        "nome" : 'Walter Gordon',
        "ruolo" : 'Office Manager',
        "foto" : 'walter-gordon-office-manager.jpg'
    },
    {
        "nome" : 'Angela Lopez',
        "ruolo" : 'Social Media Manager',
        "foto" : 'angela-lopez-social-media-manager.jpg'
    },
    {
        "nome" : 'Scott Estrada',
        "ruolo" : 'Developer',
        "foto" : 'scott-estrada-developer.jpg'
    },
    {
        "nome" : 'Barbara Ramos',
        "ruolo" : 'Graphic Designer',
        "foto" : 'barbara-ramos-graphic-designer.jpg'
    },
]


for (let i = 0; i < membri.length; i++) {
    let elenco = "";
    const personaCorrente = membri[i];
    
    for (let key in personaCorrente){
        elenco += personaCorrente[key] + " "; 
    }
    
	console.log(elenco);
    let li = document.createElement('li');
    li.append(elenco);
    listaDom.append(li);
    
    
}