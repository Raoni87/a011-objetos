const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

const pokemon2 = {...pokemon1};

pokemon2.nome = "Squirtle";
pokemon2.tipo = "Água";

pokemon1.ataques = [];

pokemon1.ataques.push({nome: "Investida", dano: 40, tipo: "normal", precisao: 100});

pokemon2.ataques = {...pokemon1.ataques};

pokemon1.ataques.push({nome: "Folha Navalha", dano: 45, tipo: "Grama", precisao: 100}); 

console.log(pokemon1);
console.log(pokemon2);

