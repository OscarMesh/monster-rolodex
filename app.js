const cardListContainer = document.getElementById("card-list");
const mappedList = document.createDocumentFragment();
const searchBox = document.getElementById("search");
let users = [];

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    data.map((user) => {
      const card = document.createElement("div");
      card.classList.add("card");
      const header = document.createElement("h3");
      const paragraph = document.createElement("p");
      const img = document.createElement("img");
      header.textContent = user.name;
      paragraph.textContent = user.email;
      img.src =
        "https://robohash.org/" + user.id + "?set=set3=set3&size=180x180";

      card.appendChild(img);
      card.appendChild(header);
      card.appendChild(paragraph);
      mappedList.appendChild(card);
    });
    cardListContainer.appendChild(mappedList);


    //filtered monsters
    
    searchBox.addEventListener("input", (e) => {
      const searchString = e.target.value.toLowerCase();
       const filtereData = data.filter((user) => {
        return (
          user.name.toLowerCase().includes(searchString) ||
          user.email.toLowerCase().includes(searchString)
        );
      });
      filtereData.map((user) =>{
        const card = document.createElement("div");
        card.classList.add("card");
        const header = document.createElement("h3");
        const paragraph = document.createElement("p");
        const img = document.createElement("img");
        header.textContent = user.name;
        paragraph.textContent = user.email;
        img.src =
          "https://robohash.org/" + user.id + "?set=set3=set3&size=180x180";

        card.appendChild(img);
        card.appendChild(header);
        card.appendChild(paragraph);
        mappedList.appendChild(card);
      })
        cardListContainer.innerHTML = users;
          cardListContainer.appendChild(mappedList);
    });
  });
