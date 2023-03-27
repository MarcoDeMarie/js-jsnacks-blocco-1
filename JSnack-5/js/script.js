const numeriDispari = []

const Numero1 = prompt('inserisci un numero! 1/6')
const Numero2 = prompt('inserisci un numero! 2/6')
const Numero3 = prompt('inserisci un numero! 3/6')
const Numero4 = prompt('inserisci un numero! 4/6')
const Numero5 = prompt('inserisci un numero! 5/6')
const Numero6 = prompt('inserisci un numero! 6/6')

let message= ''

if(parseInt(Numero1) != Numero1 % 2 ){

  console.log(typeof(Numero1))

  numeriDispari.push (Numero1)
}
else{
  message='numero pari'
}

console.log(numeriDispari)



