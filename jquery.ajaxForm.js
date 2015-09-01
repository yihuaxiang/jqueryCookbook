;(function(window,document,undefined){
    $.fn.ajaxForm=function(){
        var $form=$(this);
        var $action=$form.attr("action");
        var $method=$form.attr("method");
        var $data="";


        $form.submit(function(e){
            e.preventDefault();

            $data=$form.serialize();

            alert($data);

            $.ajax({
                type:$method,
                url:$action,
                dataType:"json",
                data:$data,
                success:function(){
                    alert("done");
                }
            })
        })
    }
})(window,document)
