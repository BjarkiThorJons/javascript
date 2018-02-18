let main = document.getElementsByTagName('main')[0];
let children=main.children
texti=""
for (i = 0; i< children.length; i++){
	if(children[i].textContent === "Jón")
		children[i].setAttribute("class","active")
	else if(children[i].textContent === "Karen"){
		children[i].remove()
	}
}
