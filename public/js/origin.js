$(document).ready(function () {
    var playlistForm = $("button#submitBtn");
    // var listName = $();
    // var listDesc = $();


    playlistForm.on("click", function (event) {
        event.preventDefault();

        listMake();

    });
    function listMake() {
        window.location.href("/table")
            .catch(function (err) {
                console.log(err);
            });
    };

});