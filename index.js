// const userCardTemplate = document.querySelector("[data-user-template]");
// const userCardContainer = document.querySelector("[data-user-card-container]");
// const cardList = document.getElementsByClassName("class-list")
// const allList = document.createDocumentFragment()
// const card = document.getElementsByClassName("card")

// // const searchBox = document.getElementById("search");

// let users = [];

// searchBox.addEventListener("input", (e) => {
//   const searchString = e.target.value;
//   // console.log(users);
//   const filteredUsers = users.filter((user) => {
//     return (
//       user.name.includes(searchString) ||
//       user.email.includes(searchString)
//     );
//   });
//   console.log(filteredUsers);
// });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     users = data
//       const allUsers = users.map((user) =>{
//          let card = document.createElement("div");
//          card.innerHTML = `${user.name}`;
//          allList.appendChild(card)

//       })

//       // cardList.appendChild(allList)

//   });

// function show(data) {
//   const ul = document.getElementById("posts");
//   const list = document.createDocumentFragment();

//   data.map(function (post) {
//     let li = document.createElement("li");
//     let title = document.createElement("h1");
//     let body = document.createElement("p");
//     title.innerHTML = `${post.title}`;
//     body.innerHTML = `${post.body}`;

//     li.appendChild(title);
//     li.appendChild(body);
//     list.appendChild(li);
//   });

//   ul.appendChild(list);
// }

// users = data.map((user) => {
//   const card = userCardTemplate.content.cloneNode(true).children[0];
//   const header = card.querySelector("[data-header]");
//   const content = card.querySelector("[data-paragraph]");

//   header.textContent = user.name;
//   content.textContent = user.email;
//   userCardContainer.appendChild(card);

//   return { name: user.name, email: user.email, element: card };
// });

// function displayUsers(users) {
//   users.map((user) => {
//       const card = userCardTemplate.content.cloneNode(true).children[0];
//       const header = card.querySelector("[data-header]");
//       const content = card.querySelector("[data-paragraph]");

//       header.textContent = user.name;
//       content.textContent = user.email;
//       userCardContainer.appendChild(card);

//       return { name: user.name, email: user.email, element: card };
//     });
// }

const searchBox = document.getElementById("search");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const cardListContainer = document.getElementById("card-list");
    const mappedList = document.createDocumentFragment();

    data.map((user) => {
      let li = document.createElement("div");
      li.classList.add("card");
      let img = document.createElement("img");
      img.src =
        "https://robohash.org/" + user.id + "?set=set=set2&size=180x180";
      li.appendChild(img);

      let header = document.createElement("h3");
      header.textContent = user.name;
      li.appendChild(header);

      let email = document.createElement("p");
      email.textContent = user.email;
      li.appendChild(email);

      mappedList.appendChild(li);
    });
    cardListContainer.appendChild(mappedList);

    searchBox.addEventListener("input", (e) => {
      const mappedList = document.createDocumentFragment();
      data
        .filter((user) => {
          return (
            user.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            user.email.toLowerCase().includes(e.target.value.toLowerCase())
          );
        })
        .map((user) => {
          // console.log(user);
          let li = document.createElement("div");
          li.classList.add("card");

          let img = document.createElement("img");
          img.src =
            "https://robohash.org/" + user.id + "?set=set=set2&size=180x180";
          li.appendChild(img);
          let header = document.createElement("h3");
          header.textContent = user.name;
          li.appendChild(header);

          let email = document.createElement("p");
          email.textContent = user.email;
          li.appendChild(email);

          mappedList.appendChild(li);
        });
      cardListContainer.innerHTML = "";
      cardListContainer.appendChild(mappedList);
    });
  });
