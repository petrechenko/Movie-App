//on search button take the values from the input and search it using OMDB API
$("button").click(() => {
    $("#results").text("");
    let movieName = $("#movieName").val();
    let movieYear = $("#movieYear").val();

    //clear the input
    $("#movieName").val('');
    $("#movieYear").val('');
    const url = "https://www.omdbapi.com/?t=" + movieName + "&y=" + movieYear + "&plot=full&apikey=[YOUR_KEY]";

    $("#results").ready(() => {
        //ajax
        $.get(url, (data, status) => {
            if (data.Error) {
                var error = $('<h3/>')
                    .text("No such movie!")
                    .appendTo('#results');
            } else {
                //find all necessary data
                $('<br/>').appendTo('#results')
                var title = $('<h3/>')
                    .text(data.Title)
                    .appendTo('#results');
                var genre = $('<h6/>')
                    .text("Genre: " + data.Genre)
                    .appendTo(title);
                var country = $('<p/>')
                    .text("Country: " + data.Country)
                    .appendTo(genre);
                var year = $('<p/>')
                    .text("Date released: " + data.Released)
                    .appendTo(country);
                var rating = $('<p/>')
                    .text("Ratings : IMDB - " + data.imdbRating + ", Rotten Tomatoes - " + data.Ratings[1].Value)
                    .appendTo(year);
                var awards = $('<p/>')
                    .text("Awards: " + data.Awards)
                    .appendTo(rating);
                var actors = $('<p/>')
                    .text("Actors: " + data.Actors)
                    .appendTo(awards);
                var director = $('<p/>')
                    .text("Director(s): " + data.Director + "\n")
                    .appendTo(actors);
                var plot = $('<p/>')
                    .html(data.Plot + '<br/>')
                    .appendTo(director);
                $('<br/>').appendTo(plot)
                var poster = $('<img src="' + data.Poster + '">')
                    .appendTo(plot);
            }
        })
    })
})