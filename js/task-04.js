let counterValue = 0;
const displayCounter = document.querySelector("#value");
const decrement=document.querySelector(`button[data-action="decrement"]`);

const subtractClick =()=>{ return(counterValue=counterValue-1), 
                           displayCounter.textContent = counterValue;
                         };
decrement.addEventListener("click", subtractClick);


const increment=document.querySelector(`button[data-action="increment"]`);

const addClick =()=>{ return(counterValue=counterValue+1), 
                      displayCounter.textContent = counterValue;
                     };
increment.addEventListener("click", addClick);

