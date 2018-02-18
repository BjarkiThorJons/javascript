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
		console.log(strengur)
		document.getElementById("quiz").innerHTML+=strengur	
};

let spurningin = document.getElementBy("quiz").children
console.log(spurningin[0])
//Virkar ekki að setja div í array sem voru gerð með javascript ????
let i;
let texti = ""
for (i = 0; i < spurningin.length; i++) {
    console.log("a")
    texti+=spurningin[i].tagName
    }
document.getElementById("test")
function checkSvar(rettSvar){
	
}

adderino(listi[tala].spurning,listi[tala].svarmoguleikar,listi[tala].rettsvar);
