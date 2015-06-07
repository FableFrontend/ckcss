$(function(){
    // if IE, adjust Justify Layout table-cell height
    if (!!window.ActiveXObject || "ActiveXObject" in window){
        $(window).resize(function(e){
            $('.justifies>div>.jf-bg').each(function(i,d){
                $(d).height($(this).parents(".justifies:first").height());
            })
         }).resize();
    }
});
