$(document).ready(function () {
    var x=0;
    var txt=112;    
    $(".minus").click(function () {
        
        var counterValue = $("#symbol-result").text();
        var icounterValue=parseInt(counterValue);
        if(icounterValue==0){
            $(".result").css({
            "border-width":2,
            "display":"table-cell"
        });
            alert("Counter Can't Go For Negative Value");
            return;
        }
        var count=icounterValue-1;
        $("#symbol-result").text(count);
        $(".result").css({
            "border-width":x-=20,
            "display":"table-cell"
        });
    });

    $(".plus").click(function () {
        var counterValue = $("#symbol-result").text();
        var icounterValue=parseInt(counterValue);
        var count=icounterValue+1;
        $("#symbol-result").text(count);
        $(".result").css({
            "border-width":x+=20,
            "display":"table-cell"
        });   
    });
});
