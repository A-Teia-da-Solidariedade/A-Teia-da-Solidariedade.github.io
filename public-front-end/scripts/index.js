const buttonsearch=document.querySelector("#page-home .content main a")
const modal=document.querySelector("#modal")
const close=document.querySelector("#modal .content .header a")
buttonsearch.addEventListener("click", ()=> {
modal.classList.remove("hide")

})

close.addEventListener("click", ()=> {
modal.classList.add("hide")

})