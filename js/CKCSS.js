$(function(){
    // if IE, adjust Justify Layout table-cell height
    //if(!+[1,]){
    if (!!window.ActiveXObject || "ActiveXObject" in window){
        $(".justifies").resize(function(e){
                $(this).children("div").children(".jf-bg").height($(this).height());
         }).resize();
    }
});
