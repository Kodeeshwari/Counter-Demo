$(document).ready(function () {
    var x=0;  
    
    $(".minus").click(function () {
        var counterValue = $("#symbol-result").text();
    var icounterValue=parseInt(counterValue);
        if(icounterValue==0){
            $(".result").css({
            "border-width":2
        });
            alert("Counter Can't Go For Negative Value");
            return;
        }
        var count=icounterValue-1;
        $("#symbol-result").text(count);
        $(".result").css({
            "border-width":x-=10
        });
    });

    $(".plus").click(function () {
        var counterValue = $("#symbol-result").text();
        var icounterValue=parseInt(counterValue);
        if(icounterValue==10){
            alert("Counter Can't Go Further More");
            return icounterValue;
        }
        var count=icounterValue+1;
        $("#symbol-result").text(count);
        $(".result").css({
            "border-width":x+=10
            
        });   
    });
});
