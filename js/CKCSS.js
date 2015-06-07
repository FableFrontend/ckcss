$(function(){
    // if IE, adjust Justify Layout table-cell height
    if(!+[1,]){
        $(".justifies").resize(function(e){
                $(this).children("div").children(".jf-bg").height($(this).height());
         }).resize();
    }
});
