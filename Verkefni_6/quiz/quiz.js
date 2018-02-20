function quiz(spurning,svarmoguleikar,rettsvar){
	this.spurning=spurning
	this.svarmoguleikar=svarmoguleikar
	this.rettsvar=rettsvar
};

let quiz1=new quiz("Hver stal kökunni úr krúsinni í gær",["Bjarki","Ágúst","Atli","Hnoðri"],"Ágúst");
let quiz2=new quiz("Er Atli góður í cs?",["True","False"],"True");
listi=[quiz1,quiz2]
tala=Math.round(Math.random())
function adderino(spurning,svarmoguleikar,rettsvar){
		svarStrengur="<div>"
		spurningaStrengur="<div>"+spurning+"</div>"
		for (x in svarmoguleikar){
			svarStrengur+="<div>"+svarmoguleikar[x]+"</div>";
		}
		spurningaStrengur+="</div>"
		strengur=spurningaStrengur+svarStrengur
		document.getElementById("quiz").innerHTML+=strengur	
};
function checkAnswer(){
	let targetElement = event.target || event.srcElement;
    for(x = 0; x < listi.length; x++){
    	if (targetElement.textContent == listi[x].rettsvar){
    		adderino(listi[1].spurning,listi[1].svarmoguleikar,listi[1].rettsvar);
    		let drasl=document.getElementById("quiz").children
    		drasl[1].remove()
    		drasl[0].remove()

    	}
    	else{
    	targetElement.style.color="red";
    }
    }
    
};
for(x = 0; x < listi.length; x++){
	adderino(listi[x].spurning,listi[x].svarmoguleikar,listi[x].rettsvar);
	let spurningin = document.getElementById("quiz").children
	let svarmoguleikarnir = spurningin[1].children
	let i;
	let texti = ""
	for (i = 0; i < svarmoguleikarnir.length; i++) {
	    svarmoguleikarnir[i].addEventListener("click", checkAnswer, false);
	    }
	console.log("nein")
	}



