
const app = {};
let subjectSearch;
app.$bookdisplay = $('.bookDisplay');
app.$container = $('.container');
app.$form = $('form');
app.$searchSubject = $('#searchSubject');
app.$bookIcon = $('.bookIcon');
const urlSearch = `https://tranquil-brook-97370.herokuapp.com/http://openlibrary.org/subjects/`;






// app init function
app.init = () => {
    app.getSubject();

}

// Url append function
app.urlAppendFunction = (id, title, cover) => {
    if (cover === null) {
        app.$bookdisplay.append(`<div class="container">
    <a href="https://openlibrary.org${id}"><p>${title}</p>  <div class="imageContainer"><img src="./assets/No_image_available.svg"></div> </a></div>`);
    }
    else {
        app.$bookdisplay.append(`<div class="container">
        <a href="https://openlibrary.org${id}"><p>${title}</p> <div class="imageContainer"> <img src="https://covers.openlibrary.org/b/id/${cover}-M.jpg" alt="Picture of book cover"></div></a></div>`);
    }
}

//  Get Subject from form, and toggle animation
app.getSubject = () => {
    app.$form.on('submit', (e) => {
        e.preventDefault();
        let subjectSearch = app.$searchSubject.val();
        app.$bookIcon.toggleClass('bookRotate')
        app.$bookIcon.removeClass('bookHide');
        app.searchSubject(subjectSearch);
        app.emptyDisplay();
    })
}

// Check to see if results are good
app.checkResults = (result) => {
    setTimeout(function () {
        if (result.works.length == 0) {
            alert('Nothing was Found, check your spelling or try something less specific')
        }
        else {
            app.$bookIcon.toggleClass('bookHide')
            app.displayBooks(result);
        }
    }, 3000)
}


// search the subjects
app.searchSubject = (subject) => {
    const searchResults = $.ajax({
        url: `${urlSearch}${subject}.json?details=true`,
        method: "GET",
        dataType: "json",
    }).then(result => {

        app.checkResults(result);

    })
}
// display the subjects
app.displayBooks = (result) => {
    app.$bookIcon.removeClass('bookRotate');
    result.works.forEach(book => {
        app.urlAppendFunction(book.key, book.title, book.cover_id);
    });
}
// clear display
app.emptyDisplay = () => {
    app.$bookdisplay.empty();
};


// start the app
$(document).ready(function () {
    app.init();
});