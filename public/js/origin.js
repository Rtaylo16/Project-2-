$(document).ready(function () {
    var playlistForm = $("button#submitBtn");
    // var listName = $();
    // var listDesc = $();


    playlistForm.on("click", function (event) {
        event.preventDefault();
        console.log("Click");
        listMake();

    });
    function listMake() {
        window.location.href = "/table";
                    console.log("click2");
    };

});