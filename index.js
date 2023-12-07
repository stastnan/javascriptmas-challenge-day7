const wishlist = ["Macbook Air M2"];

const wishlistContainer = document.getElementById("wishlist-container");

const newGifts = ["Scrimba Pro subscription", "Flight ticket to Chicago"];
wishlist.push(...newGifts);

wishlist.forEach((gift) => {
  const div = document.createElement("div");
  div.className = "wishlist-item";
  div.textContent = gift;
  wishlistContainer.appendChild(div);
});

document.addEventListener("DOMContentLoaded", function () {
  const snowflakesContainer = document.getElementById("snowflakes");

  const numSnowflakes = 20;

  for (let i = 0; i < numSnowflakes; i++) {
    createSnowflake();
  }

  function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 2 + 1}s`;
    snowflake.style.animationDelay = `${Math.random()}s`;
    snowflakesContainer.appendChild(snowflake);
  }
});
