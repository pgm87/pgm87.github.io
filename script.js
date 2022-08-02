$(document).ready(function () {

    // List of Klngon Words
    const klingonDictionaryArray = [
        "par'Mach",
        "bang bom",
        "boqrat",
        "chemvaH",
        "DIr ’In",
        "ghab tun",
        "gham",
        "chelwI’",
        "ghISnar",
        "tI’qa’ vIghro’",
        "bat'leth",
        "be’taSeD",
        "Qu’vatlh",
        "batlh",
        "pujwI’",
    ];
    // Global Declaration of numOfWords variable.
    let numOfWords;

    // Submit event for generating klingon ipsum
    $('form').on('submit', (event) => {
        event.preventDefault();
        // Gets number from the submit form and makes it equal to numOfWords
        numOfWords = parseInt($('#numOfWords').val());
        // If statement making sure it can't be less than 0 or greater than 500
        if (numOfWords <= 0 || numOfWords >= 500) {
            alert('Please input a number greater than 0 and less then 500!')
        }
        // Loop which runs through the array selecting random words up to the numOfWords submitted
        else {
            for (i = 0; i < numOfWords; i++) {
                $('p').append(` ${klingonDictionaryArray[getRandomIndex()]}`);
                // Disables button
                $("#btnSubmit").attr("disabled", true)

            }
        }

    });

    // Resets form
    $('form').on('reset', () => {
        $('p').empty();
        $("#btnSubmit").attr("disabled", false)

    });
    // Gets random index from the length of the array.
    const getRandomIndex = () => {
        let randomNumber = Math.floor(Math.random() * klingonDictionaryArray.length);
        return randomNumber;

    };

});