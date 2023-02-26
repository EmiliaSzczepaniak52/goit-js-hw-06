let counterValue = document.querySelector("#value").childElementCount;
console.log(typeof counterValue, counterValue);
const decrement=document.querySelector(`button[data-action="decrement"]`);
console.log(decrement);
const subtractClick =()=>{ return(counterValue=counterValue-1), 
                            console.log(counterValue);
                         };
decrement.addEventListener("click", subtractClick);
console.log(counterValue);
