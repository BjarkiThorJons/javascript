var listi=[]
function myFunction() {
	var tala=1;
	for (i = 0; i < 5; i++) {
		var takki="takki";
		var takki=takki+tala;
		var x = document.getElementById(takki).value;
		var y =	document.getElementById(takki).name;
		var y = y + " " + tala
	    if (document.getElementById(takki).checked){
	    	listi.push(y);
	    };
	    document.getElementById("karfa").innerHTML = listi;
	    var tala=tala+1;
	 }
};
