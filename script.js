fetch("https:striveschool-api.herokuapp.com/books")
  .then((response) => response.json())
  .then((booksObj) => {
    console.log(booksObj);
    const row = document.querySelector("row");

    booksObj.response.forEach((book) => {
      const title = book.title;

      const col = document.createElement("div");
      col.className = "col";

      col.innerHTML = `<div class="card">
                                         <img src=${book.img} class="card-img-top" alt="...">
                                         <div class="card-body">
                                             <h5 class="card-title">${book.title}</h5>
                                             <p class="card-text">${book.price}</p>
                                             <a href="#" class="btn btn-primary">Add to Cart</a>
                                             <a href="#" class="btn btn-primary">Remove</a>
                                         </div>
                                     </div>`;

      row.appendChild(col);
    });
  })
  .catch((error) => console.log(error));
