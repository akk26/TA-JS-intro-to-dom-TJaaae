let alllists = document.querySelector(".listItems");

books.forEach((element) => {
  let eachlist = document.createElement("li");
  eachlist.classList.add("eachlist");

  let pics = document.createElement("img");
  pics.classList.add("style");
  pics.src = element.image;

  let title = document.createElement("h2");
  title.innerText = element.title;

  let Author = document.createElement("h3");
  Author.innerText = `Author:${element.author}`;

  let button  = document.createElement("a");
  button.classList.add("btn");
  button.innerText = "Buy Now";
  button.href = element.website;

  alllists.append(eachlist);
  eachlist.append(pics, title, Author, button);
});
