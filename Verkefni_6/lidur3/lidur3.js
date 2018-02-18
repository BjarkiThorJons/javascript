let Div1 = document.createElement("div"); 
Div1.setAttribute("id","quiz")
document.body.appendChild(Div1); 

let newDiv = document.createElement("div"); 
newDiv.setAttribute("id","question")
let newContent = document.createTextNode("Spurning 1"); 
newDiv.appendChild(newContent);  
document.getElementById("quiz").appendChild(newDiv); 

let newDiv1 = document.createElement("div"); 
newDiv1.setAttribute("id","answers") 
document.getElementById("quiz").appendChild(newDiv1); 

let newDiv2 = document.createElement("div"); 
newDiv2.setAttribute("class","answer","data-active","answer") 
let newContent2 = document.createTextNode("Svarmöguleiki 1"); 
newDiv2.appendChild(newContent2); 
document.getElementById("answers").appendChild(newDiv2); 

let newDiv3 = document.createElement("div"); 
newDiv3.setAttribute("class","answer","data-active","answer") 
let newContent3 = document.createTextNode("Svarmöguleiki 2"); 
newDiv3.appendChild(newContent3); 
document.getElementById("answers").appendChild(newDiv3); 