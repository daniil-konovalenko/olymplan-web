var sendData;

$(document).ready(function() {
    sendData = function() {
        $.ajax({
            url: "/user/loging",
            method: "post",
            data: "keks",
            success: function(data) {
                console.log(data);
            }
        });
    };
});
