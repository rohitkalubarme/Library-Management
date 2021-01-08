console.log('This is ES6 version ');
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        console.log("Adding to UI");
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                  <td>${book.name}</td>
                  <td>${book.author}</td>
                  <td>${book.type}</td>
                </tr>`;
        tableBody.innerHTML += uiString;
    }
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }
    validate(book) {
        if (book.name.length < 2 || book.name.author < 2) {
            return false;
        } else {
            return true;
        }
    }
     show(type,message) {
        let messages = document.getElementById('message');
        messages.innerHTML = `<div class="alert alert-${type}" role="alert">
                             <strong>message : &nbsp; ${message}</strong>
                            </div>`
        setTimeout(() => {
            messages.innerHTML="";
        }, 2000);
    }
}

//Add submit event listener to libraryform
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();
    console.log('You have submitted form ');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('Author').value;
    let type;

    // // fiction , programming , cooking

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added');
    } else {
        display.show('danger', 'sorry you cannot add this book');
    }
    e.preventDefault();
}