$(document).ready(function(){
    $(".elem__header").click(function() {
        console.log("kek");
        $(this).parent().children(".elem__body").toggleClass("_is_hidden");
        console.log($(this).parent().children(".elem__body"));
    });

    $(".button__submit").click(function() {
        //console.log($(this));
        var pid = $(this).attr('id');
        //alert(pid);
        var data = {};

        console.log(fields);

        for (var field in fields) {
            console.log(field);
            console.log($(".-value-" + pid + "-" + field).text());
        }
    });
});
