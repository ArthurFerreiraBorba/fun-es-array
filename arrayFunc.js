let numeros = [1,2,3,4,5,6,7,8,9]


//Soma de Elementos

let soma = numeros.reduce((s, n) => s + n)

console.log(soma)


//Filtragem de Elementos

let pares = numeros.filter(n => n % 2 == 0)

console.log(pares)


//Mapeamento de Elementos

let quadrados = numeros.map(n => n*n)

console.log(quadrados)
