//Save movie name and notes only during this window is open
$("button").click(() => {
    const movieName = $("#name").val();
    const note = $("#notes").val();

    //every time create a new note on the movie
    const movieNameOutput = $("<h3/>").text(movieName);
    const noteOutput = $("<h6/>").text(note);
    $("p").append(movieNameOutput, noteOutput);

    //clear the input
    $("#name").val('');
    $("#notes").val('');
})