;(function(window,document,undefined){
    $.fn.checkForm=function(){
        console.log("start");
        var $elements=$(".required",this);

        var returnFlag=true;

        $elements.each(function(){
            var $element=$(this);
            var name=$element.attr("name");
            var id=$element.attr("id");
            var type=$element.attr("type").toLowerCase();
            var flag=true;

            console.log(type);

            switch(type){
                case "text":
                case "password":
                case "textarea":
                    if($element.val().trim() == ""){
                        flag=false;

                    }
                    break;
                case "select":
                    if($element.val().trim() == ""){
                        flag=false;
                    }
                    break;
                case "checkbox":
                case "radio":
                    if($("[name='"+name+"']:checked").length == 0){
                        flag=false;
                    }
                    break;
                default :
                    break;
            }


            if(flag == true){
                $element.removeClass("error");
            }else{
                $element.addClass("error");
                returnFlag=false;
            }


        })

        return returnFlag;

    }
})(window,document)
