// Seleção de elementos

const bookForm = document.querySelector("#book-form")
const bookInput = document.querySelector("#book-input")
const bookList = document.querySelector("#book-list")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelEdtBtn = document.querySelector("#cancel-edit-btn")
const searchInput = document.querySelector("#search-input")

let oldInputValue


// Funções
const saveBook = (text) =>{

    const book = document.createElement("div")
    book.classList.add("book")

    const bookTitle = document.createElement("h3")
    bookTitle.innerText = text
    book.appendChild(bookTitle)
    console.log(book)

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-book")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    book.appendChild(editBtn)
    
    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-book")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    book.appendChild(doneBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("remove-book")
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    book.appendChild(deleteBtn);

    bookList.appendChild(book);

    bookInput.value = "";
    bookInput.focus();

};

const toggleForms = () => {
        editForm.classList.toggle("hide");
        bookForm.classList.toggle("hide");
        bookList.classList.toggle("hide");
    }

const updatebook = (text) => {
    const books = document.querySelectorAll(".book")

    books.forEach((book) => {
        let bookTitle = book.querySelector("h3")

        if(bookTitle.innerText === oldInputValue){
            bookTitle.innerText = text
        }
    })
}

// Eventos
bookForm.addEventListener("submit", (e) => {
    e.preventDefault()

    console.log("Enviou form")

    const inputValue = bookInput.value

    if(inputValue){
        // save book
        saveBook(inputValue)
    }
});

document.addEventListener("click", (e) => {

    const targetEl = e.target
    const parentEl = targetEl.closest("div");
    let bookTitle;


    //verifica se o parentel existe
    if (parentEl && parentEl.querySelector("h3")){
        bookTitle = parentEl.querySelector("h3").innerText;
    }

    if(targetEl.classList.contains("finish-book")){
        parentEl.classList.toggle("done")
    }

    if(targetEl.classList.contains("remove-book")){
        parentEl.remove();
    }

    if(targetEl.classList.contains("edit-book")){
        toggleForms();
        editInput.value = bookTitle
        oldInputValue = bookTitle
        
    }
});

cancelEdtBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleForms();
});

editForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const editInputValue = editInput.value

    if(editInputValue){
        updatebook(editInputValue)
    }

    toggleForms()
});

searchInput.addEventListener("input", (e) => {
    let value = e.target.value
    console.log(value)
});


let tarefas = [];

const listbook = (tarefa) => {
    tarefas.push(tarefa);
    tarefas.forEach(tarefa => {
        saveBook(tarefa);
    })
}

