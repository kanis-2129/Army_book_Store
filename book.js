// SEARCH BAR

var search = document.getElementById("search");
var bookList = document.querySelectorAll("#book-container > div");
var notAvailable = document.getElementById("no-result")
var banner = document.querySelector(".banner-book")




search.addEventListener("input", function (event) {



    var enteredValue = event.target.value.toUpperCase();
    let matchCount = 0;

    for (let count = 0; count < bookList.length; count++) {
        var bookName = bookList[count].querySelector("h1").textContent.toUpperCase();

        if (bookName.indexOf(enteredValue) < 0) {
            bookList[count].style.display = "none"


        } else {
            bookList[count].style.display = "block";
            matchCount++
        }
    }

   



    //search book not available

    if (matchCount === 0) {
        notAvailable.classList.remove("hidden");
        banner.style.display = "none"
    } else {
        notAvailable.classList.add("hidden");
        banner.style.display = "block"
    }

    
});


// image location

var image = document.getElementById("image")

image.addEventListener("click", () => {
    window.location.href = "./book.html"
})

