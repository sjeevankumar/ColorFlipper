const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// get random number
const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};

// changing the background color of the body and textcontent of color class
btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
