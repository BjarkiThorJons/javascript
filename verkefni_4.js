function geimflaugar(name,life){
	this.name = "SpaceRacer"
	this.life = 10
	this.showName=function(){
		console.log(this.name)
	}
};
let geimflaug1=new geimflaugar;
let geimflaug2=new geimflaugar;
let geimflaug3=new geimflaugar;

geimflaugarnar=[geimflaug1,geimflaug2,geimflaug3];

geimflaug1.name="SpaceAce";

for(let geimflaug in geimflaugarnar){
	geimflaugarnar[geimflaug].speed=5
};

geimflaugar.prototype.fly=function(){
	this.speed+=1
};

let geimflaug4 = new geimflaugar;