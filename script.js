fetch("https:striveschool-api.herokuapp.com/books")
  .then((response) => response.json())
  .then((books) => {
    console.log(books);

    const row = document.getElementsByClassName("row");

    books.forEach((book) => {
      const col = document.createElement("div");
      col.className = "col";

      col.innerHTML = `<div class="card">
                                         <img src=${book.img} class="card-img-top" alt="...">
                                         <div class="card-body">
                                             <h5 class="card-title">${book.title}</h5>
                                             <p class="card-text">${book.price}</p>
                                             <a href="#" class="btn btn-primary">Add to Cart</a>
                                             <a href="#" class="btn btn-primary" onclick="skipMe(event)">Remove</a>
                                         </div>
                                     </div>`;

      row[0].appendChild(col);
    });
  })
  .catch((error) => console.log(error));

const skipMe = (event) => {
  event.target.closest(".col").remove();
};
