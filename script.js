//your JS code here. If required.
const h1 = document.querySelector("h1");

window.addEventListener("resize",(e)=>{
	e.preventDefault();
	h1.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`
})