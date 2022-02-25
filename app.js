// Add book list in to Table
let books = [];

function addBook(book) {
    let row = ``;

    book.forEach(function(book, i) {

        row += ` <tr>
            <td>${i+1}</td>
            <td>${book[0]}</td>
            <td>${book[1]}</td>
            <td>${book[2]}</td>
            <td>
            <button class="p-0  text-primary pointer" onclick="edit(${i})"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="text-danger p-0" onclick="del(${i})"><i class="fa-solid fa-trash-can"></i></button>
            </td>
        </tr>
        `;

    });
    document.getElementById('tBody').innerHTML = row;
}

// Get data from input field
document.getElementById('btn').addEventListener('click', function() {

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let price = document.getElementById('price').value;
    let index = document.getElementById('index').value;
    let book = [title, author, price];

    if (title != "" && author != "" && price != "") {
      
        if (index == "" || index == undefined) {
            books.push(book);

        } else {
            books.splice(index, 1, book);
            document.getElementById('btn').innerText = "Add book";
            document.getElementById('index').value = "";
        }
        addBook(books);
    }
    inputClear()
});
// Clear input field
function inputClear() {
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('price').value = "";
}
// Update data
function edit(i) {
    let book = books[i];
    document.getElementById('title').value = book[0];
    document.getElementById('author').value = book[1];
    document.getElementById('price').value = book[2];
    document.getElementById('index').value = i;
    document.getElementById('btn').innerText = "Update";
}
// Delet Data
function del(i) {
    books.splice(i, 1);
    addBook(books);
}