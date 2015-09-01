$(function(){
    $("#form").submit(function(){
        $this=$(this);
        var flag=true;

        if($this.checkForm() == false){
            flag=false;
        }

        return flag;
    })
})
