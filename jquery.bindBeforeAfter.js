;(function($){
	
	$.event.special.myEvent={
		setup:function(data,namespaces){
			console.log("myEvent setup");
			console.log(data);
			console.log(namespaces);
		},

		teardown:function(namespaces){
			console.log("myEvent teardown");
		}
	}

	var event=$.event;
	var $select=event.special.select={
		setup:function(data){
			event.add(this,"click",$select.handler);
		},
		teardown:function(){
			event.remove(this,"click",$select.handler);
		},

		handler:function(){
			var $elem=$(this);
			if($elem.hasClass("disabled")){

			}else{
				if($elem.hasClass("selected")){
					$elem.removeClass("selected");
					
				}else{
					$elem.addClass("selected");
					
					$elem.triggerHandler("select");
				}
			}
		}
	}

})(jQuery);

//帮顶myEvent事件前后所执行的函数
//该方法并非任何时候都适用