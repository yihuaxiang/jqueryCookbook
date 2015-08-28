var index=0;
var arr=[0,1];

	function fun(n){
		index++;
		if(n == 0){
			return 0;
		}else if(n == 1){
			return 1;
		}else{

			var one=arr[n-1];
			var two=arr[n-2];
			if(one == undefined){
				one=fun(n-1);
				arr[n-1]=one;
			}
			if(two == undefined){
				two=fun(n-2);
				arr[n-2]=two;
			}
			return one+two;
		}
	}



	for(var i=0;i<11;i++){
		//(function(index){
			console.log(i+"--->"+fun(i));
		//})(i);
	}



console.log(index);
