//your JS code here. If required.
const h1 = document.querySelector("h1");

window.addEventListener("resize",(e)=>{
	e.preventDefault();
	const expectedWidth = window.innerWidth
	const expectedHeight = window.innerHeight
	h1.innerText = `Width: ${expectedWidth} and Height: ${expectedHeight}`
})