const booksContainer = document.getElementById("booksContainer");


fetch("https://www.abibliadigital.com.br/api/books")
  .then((response) => {
    if (!response.ok) {
      console.error("Network was not good");
    }
    return response.json();
  })
  .then((data) => {
    data.forEach((book) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const name = document.createElement("h1");
      name.textContent = `Name: ${book.name}`;

      const cardContent = document.createElement("div");

      const group = document.createElement("div");
      group.textContent = `Group: ${book.group}`;

      const chapters = document.createElement("div");
      chapters.textContent = `Chapters: ${book.chapters}`;

      const testament = document.createElement("div");
      testament.textContent = `Testament: ${book.testament}`;

      const author = document.createElement("div");
      author.textContent = `Author: ${book.author}`;

      cardContent.appendChild(group);
      cardContent.appendChild(chapters);
      cardContent.appendChild(testament);
      cardContent.appendChild(author);

      card.appendChild(name);
      card.appendChild(cardContent);

      booksContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("There was a problem while fetching data:", error);
  });


