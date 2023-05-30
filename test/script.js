const button = document.getElementById("clicker");
const doubler = document.getElementById("double");

let clicks = 1;
let levels = 0;

button.addEventListener("click", function () {
  console.log("button clicked");
  const counter = document.getElementById("counter");
  counter.innerHTML = parseInt(counter.innerHTML) + clicks;
});

doubler.addEventListener("click", function () {
  const counter = document.getElementById("counter");

  if (levels == 0) {
    if (parseInt(counter.innerHTML) < 20) {
      alert("You need at least 20 clicks to double your clicks!");
    } else {
      clicks = clicks * 2;
      counter.innerHTML = parseInt(counter.innerHTML) - 20;
      levels = levels + 1;
      doubler.innerHTML = "Double Clicks (100)";
    }
  } 
  else if (levels == 1) {
    if (parseInt(counter.innerHTML) < 100) {
      alert("You need at least 100 clicks to double your clicks!");
    } else {
      clicks = clicks * 2;
      counter.innerHTML = parseInt(counter.innerHTML) - 100;
      levels = levels + 1;
      doubler.innerHTML = "Double Clicks (200)";
    }
  } 
  else if (levels == 2) {
    if (parseInt(counter.innerHTML) < 200) {
      alert("You need at least 200 clicks to double your clicks again!");
    } else {
      clicks = clicks * 2;
      counter.innerHTML = parseInt(counter.innerHTML) - 200;
      levels = levels + 1;
      doubler.innerHTML = "Double Clicks (500)";
    }
  }
});

// get reference to the new button
const autoClicker = document.getElementById("autoClicker");

let autoClickerPurchased = false; // track if auto clicker is purchased

autoClicker.addEventListener("click", function () {
  const counter = document.getElementById("counter");

  // check if the user has enough points to purchase the auto clicker
  if (parseInt(counter.innerHTML) >= 500 && !autoClickerPurchased) {
    counter.innerHTML = parseInt(counter.innerHTML) - 500;
    autoClickerPurchased = true;
    autoClicker.innerHTML = "Auto Clicker Purchased";
    autoClicker.disabled = true; // disable button after purchase

    // add auto clicker functionality - increment counter every 5 seconds
    setInterval(function () {
      counter.innerHTML = parseInt(counter.innerHTML) + clicks;
    }, 5000); // 5000 milliseconds = 5 seconds
  }
  else if(autoClickerPurchased) {
    alert("You've already purchased Auto Clicker!");
  } 
  else {
    alert("You need at least 500 clicks to buy Auto Clicker!");
  }
});

