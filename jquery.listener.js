;(function($){
	var methods="bind unbind on trigger triggerHandler".split(" ");

	function Listener(){

	}

	$.each(methods,function(i,name){
		Listener.prototype[name]=$.fn[name];
	})

	Listener.prototype.each=function(fn){
		fn.call(this);
		return this;
	}

	$.listener=function(data){
		return $.extend(new Listener(),data);
	}

})(jQuery);

//优点：对于自定义事件，我无需对每个dom帮顶事件（如果，对每个dom绑定事件的话，性能会受到影响）