$(document).ready(function(){
    $(".elem__header").click(function() {
        console.log("kek");
        $(this).parent().children(".elem__body").toggleClass("_is_hidden");
        console.log($(this).parent().children(".elem__body"));
    });
});
