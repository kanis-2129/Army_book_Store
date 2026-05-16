// book info msg
const books = document.querySelectorAll(".book-item");
const info = document.getElementById("info");
const booksTwo = document.querySelectorAll(".bookItem")
const infoTwo = document.getElementById("infoTwo")

books.forEach(book => {
    book.addEventListener("click", () => {
        info.style.display = "block";
    });
});

booksTwo.forEach(book => {
    book.addEventListener("click", () => {
        infoTwo.style.display = "block";
    });
});

// My Account Menu

const account = () => {
    var menu = document.getElementById("menu")
    if (menu.style.display === "block") {
        menu.style.display = "none"
    }
    else {
        menu.style.display = "block"
    }

}

// shop now button

const button = document.querySelectorAll(".button")

button.forEach(button => {
    button.addEventListener("click", () => {
        alert(" If you Buy a Book Please Login your Account")

    })
})


// login page


    const submitBtn = document.getElementById("submit");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("pswd");

    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const enteredEmail = emailInput.value.trim();
        const enteredPassword = passwordInput.value.trim();

        const savedEmail = localStorage.getItem("signupEmail");
        const savedPassword = localStorage.getItem("signupPassword");

        if (enteredEmail === savedEmail && enteredPassword === savedPassword) {
            alert(" Signin successful!");
            window.location.href = "./index.html"; // redirect after login
        } else {
            alert(" User not found or wrong password!");
        }
    });



// Image Location

var image = document.getElementById("image")

image.addEventListener("click", () => {
    window.location.href = "./book.html"
})





