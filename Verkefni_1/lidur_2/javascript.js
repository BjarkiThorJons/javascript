var listi=["epli","banani","appelsína","mandarína","melóna"];
var vorur="";
for (i = 0; i < listi.length; i++) {
	    vorur=vorur + listi[i] +"<br>";
	    };
document.getElementById("karfa").innerHTML = vorur;		