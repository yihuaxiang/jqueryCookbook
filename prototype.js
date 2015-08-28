Object.create=function(o){
	var F=function(){};
	F.prototype=o;
	return new F();
}

var one={
	"name":"fdd",
	"age":"22"
};

var two=Object.create(one);


console.log(two);

console.log(two.name);
console.log(two.age);

two.name="weibo";
console.log(two);
console.log(two.name);
console.log(two.age);