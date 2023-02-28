const nameInput=document.querySelector("#name-input");
const nameOutput=document.querySelector("#name-output");
nameInput.addEventListener("input", (event)=>{
  if (nameInput !=="")
    {
    nameOutput.textContent =event.currentTarget.value;
}
  else {
    nameOutput.textContent = "Anonymous";
  }
});