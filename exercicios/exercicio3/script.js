//Crie a const para a frase aqui
//a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);
const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'

console.log("a) Frase inicial:"+"\n"+frase)
const novaFrase = frase.replace("verde","rosa").replace("azul","laranja")

//b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
console.log("b) Frase modificada:"+"\n"+ novaFrase)

//c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.
console.log("c) Verifique se a nova string inclui **verde**, e se inclui **laranja**:",novaFrase.includes("verde"),"/",novaFrase.includes("laranja"))

//**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”
console.log("EXTRA: Colocar o trecho \"mas não deixe o gato sair\" em maiúsculo:", novaFrase.replace("mas não deixe o gato sair","MAS NÃO DEIXE O GATO SAIR."))
