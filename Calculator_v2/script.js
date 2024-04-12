// eval() does bulit in calculaions but is very dsangerous
// bad actor can run arbitrary code when you use eval;

let input = document.getElementById("display");


function mathfunction(inputoper){
  input.value +=inputoper;

}
function calculate(){

  try{
  input.value = eval(input.value)
  }
  catch{
    input.value="Error"
  }
  
}
function Clear(){
  input.value="";

}