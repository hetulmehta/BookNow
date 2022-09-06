function generateMovieThumbnail(movie, eventAdd) {
    thumbnail = document.createElement("img")
    thumbnail.src = movie.thumbnail;
    textForAltAndTitle = "thumbnails-" + movie.name.toLowerCase();
    thumbnail.alt = textForAltAndTitle;
    thumbnail.title = textForAltAndTitle;

    if (eventAdd = true) {
        thumbnail.onclick = function() {
            trailerSource.src = movie.src;
            movieIndex = movie.id - 1;

            trailer.load();
            trailer.play();

            movieName.innerHTML = movie.name;
            cast.innerHTML  = movie.cast;
            director.innerHTML  = movie.director;
            duration.innerHTML  = movie.duration;
        };
    }

    return thumbnail;
}

