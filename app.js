const cl = console.log.bind(console);

const reviews = [
  {
    id: 1,
    name: "tosin adebayo",
    job: "fashion designer",
    text: "tosin Lorem ipsum dolor, sit amet consectetur adipisicing elit.Aspernatur, nostrum. Quam iure eveniet quia qui cupiditate unde aperiam repellat totam!",
    img: "./images/about-img.jpg",
  },
  {
    id: 2,
    name: "biodun adebayo",
    job: "ui/ux designer",
    text: "biodun Lorem ipsum dolor, sit amet consectetur adipisicing elit.Aspernatur, nostrum. Quam iure eveniet quia qui cupiditate unde aperiam repellat totam!",
    img: "./images/hero-img.jpeg",
  },
  {
    id: 3,
    name: "nelson sampson",
    job: "statistician",
    text: "nelson Lorem ipsum dolor, sit amet consectetur adipisicing elit.Aspernatur, nostrum. Quam iure eveniet quia qui cupiditate unde aperiam repellat totam!",
    img: "./images/project-1.jpg",
  },
  {
    id: 4,
    name: "daniel otene",
    job: "statistician",
    text: "daniel Lorem ipsum dolor, sit amet consectetur adipisicing elit.Aspernatur, nostrum. Quam iure eveniet quia qui cupiditate unde aperiam repellat totam!",
    img: "./images/project-2.jpg",
  },
  {
    id: 5,
    name: "joy kitan",
    job: "mathematician",
    text: "joy Lorem ipsum dolor, sit amet consectetur adipisicing elit.Aspernatur, nostrum. Quam iure eveniet quia qui cupiditate unde aperiam repellat totam!",
    img: "./images/project-3.jpeg",
  },
  {
    id: 6,
    name: "bolaji michael",
    job: "web developer",
    text: "bolaji Lorem ipsum dolor, sit amet consectetur adipisicing elit.Aspernatur, nostrum. Quam iure eveniet quia qui cupiditate unde aperiam repellat totam!",
    img: "./images/bolaji.jpg",
  },
];

const authorImg = document.querySelector(".author-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const review = document.getElementById("review");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;
/*
=============== 
Event Listeners
===============
*/
window.addEventListener("DOMContentLoaded", action);
nextBtn.addEventListener("click", action1);
prevBtn.addEventListener("click", action2);
randomBtn.addEventListener("click", randomAction);

/*
=============== 
functions 
===============
*/
function action() {
  const item = reviews[currentItem];
  authorImg.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  review.textContent = item.text;
}

// nextBtn
function action1() {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  action();
}
// prevBtn
function action2() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  action();
}
// randomBtn
function randomAction() {
  currentItem = Math.floor(Math.random() * reviews.length);
  action();
}
