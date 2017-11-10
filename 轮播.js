$(function)(){
    setInterval("$(\".next\").click()",3000);
    var page=1;
    $(".next").click(function(){
        var v_wrap=$(this).parents(".scroll");
        var v_show=v_wrap.find(".scroll_list");
        var v_cont=v_wrap.find(".box");
        var v_width=v_cont.width();
        var len=v_show.find("li").length;
        var page_count=Math.ceil(len);
        if(!v_show.is(":animated")){
            if(page==page_count){
                v_show.animate({left:'0px'},"slow");
                page=1;
            }else{
                v_show.animate({left:'-='+v_width},"slow");
                page++;
            }
        }
    });
    
    $(".prev").click(function(){
        var v_wrap=$(this).parents(".scroll");
        var v_show=v_wrap.find(".scroll_list");
        var v_cont=v_wrap.find(".box");
        var v_width=v_cont.width();
        var len=v_show.find("li").length;
        var page_count=Math.ceil(len);
        if(!v_show.is(":animated")){
            if(page==1){
                v_show.animate({left:'-='+v_width*(page_count-1)},"slow");
                page=page_count;
            }else{
                v_show.animate({left:'+='+v_width},"slow");
                page--;
            }
        }
    }); 
}