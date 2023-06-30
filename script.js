const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const imageContainer = document.querySelector(".image-container");
const imgs = document.querySelectorAll("img");

console.log(next);

let currentImg = 1;

let timeout;

next.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

prev.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

const updateImg = () => {
  if (currentImg > imgs.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgs.length;
  }
  imageContainer.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 5000);
};

updateImg();
