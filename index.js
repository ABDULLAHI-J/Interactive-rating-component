// get all the elements we need to manipulate
let ratings = document.querySelectorAll(".rate");
let submitRating = document.querySelector("#submit");
let selectedRating = document.querySelector(".selected-rating");
let thanksCard = document.querySelector(".card-thanks");
let mainCard = document.querySelector(".card");

// After the submit button is clicked
submitRating.addEventListener("click", () => {
  mainCard.style.display = "none";
  thanksCard.style.display = "flex";
});

// for every button get the value and send it
// to the card thanks divs or user selected rating view
for (let star = 0; star < ratings.length; star++) {
  let value = ratings[star].innerHTML;

  ratings[star].onclick = function () {
    selectedRating.innerHTML = `You have selected ${value} out of ${ratings.length}`;
  };

  console.log(value);
  //   console.table(star);
}
