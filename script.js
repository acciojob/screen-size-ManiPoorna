//your JS code here. If required.
const w = document.getElementById("width")
const h = document.getElementById("height")

window.addEventListener("resize",(e)=>{
	e.preventDefault();
	w.innerText = window.innerWidth
	h.innerText = window.innerHeight
})