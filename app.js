const second_title = "We are available all across the globe";
const third_title = "Manufactured with the best materials";

const second_text = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
store locator. Any questions? Don't hesitate to contact us today.`;

const third_text = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
to ensure that every product is made as perfect and as consistent as possible. With three decades of 
experience in this industry, we understand what customers want for their home and office.`;

const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
const topLeftSection = document.querySelector(".top-left-section");
const backgroundClasses = ["bg_1", "bg_2", "bg_3"];

const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger-nav");
const links = nav.querySelectorAll("a");

const switchBackground = (direction) => {
  let currentIndex = 0;
  let index = 0;

  backgroundClasses.forEach((element) => {
    if (topLeftSection.classList.toString().includes(element)) {
      currentIndex = backgroundClasses.indexOf(element);
    }
  });

  if (direction === "left") {
    if (currentIndex === 0) {
      index = backgroundClasses.length - 1;
    } else {
      index = currentIndex - 1;
    }
  } else {
    index = (currentIndex + 1) % 3;
  }

  topLeftSection.classList.remove(backgroundClasses[currentIndex]);
  topLeftSection.classList.add(backgroundClasses[index]);
};

//Event Listeners
btnLeft.addEventListener("click", () => {
  switchBackground("left");
});

btnRight.addEventListener("click", () => {
  switchBackground("right");
});

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});
