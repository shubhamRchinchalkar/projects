const catsContainer = document.getElementById("catsContainer");

fetch("https://api.thecatapi.com/v1/images/search?limit=20")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Response not received");
    }
    return response.json();
  })
  .then((data) => {
    data.forEach((cat) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const id = document.createElement("h1");
      id.textContent = `ID: ${cat.id}`;

      const image = document.createElement("img");
      image.src = cat.url;
      image.alt = `Cat ${cat.id}`;

      card.appendChild(image);
      card.appendChild(id);

      catsContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("There was a problem fetching the cat data:", error);
  });