String.prototype.love=function(){
	var conf={
		"<":"&lt;",
		">":"&gt;"
	}

	return this.valueOf().replace(/[<>]/g,function(c){

		return conf[c];
	})
}

console.log("fdd<>".love());