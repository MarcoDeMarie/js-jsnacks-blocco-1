const numeriDispari = []

message = ''

for( let i = 0; i <6; i++){
  const numero = parseInt(prompt('inserisci un numero'))
  if(numero %2 !==0 ){
    numeriDispari.push(numero)
  }
}

console.log(numeriDispari)

