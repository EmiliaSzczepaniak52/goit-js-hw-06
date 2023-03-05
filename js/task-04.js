let counterValue = document.querySelector("#value").childElementCount;
console.log(typeof counterValue, counterValue);
const decrement=document.querySelector(`button[data-action="decrement"]`);
console.log(decrement);
const subtractClick =()=>{ return(counterValue=counterValue-1), 
                            console.log(counterValue);
                         };
decrement.addEventListener("click", subtractClick);
console.log(counterValue);

const increment=document.querySelector(`button[data-action="increment"]`);
console.log(increment);
const addClick =()=>{ return(counterValue=counterValue+1), 
                            console.log(counterValue);
                         };
increment.addEventListener("click", addClick);
console.log(counterValue);