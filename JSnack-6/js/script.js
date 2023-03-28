const moltipicatore = parseInt(prompt('quante volte vuoi moltiplicare il numero'))




for(let i = 1; i<=moltipicatore; i++ ){
  const cubo = Math.pow(i, 3)
  console.log(cubo)
}