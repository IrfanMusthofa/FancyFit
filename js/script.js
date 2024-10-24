// ham-menu toggle
const navbarToggle = document.querySelector(".navbar-toggle");
const hamMenu = document.querySelector("#ham-menu");

document.querySelector("#ham-menu").onclick = () => {
  navbarToggle.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!hamMenu.contains(e.target) && !navbarToggle.contains(e.target)) {
    navbarToggle.classList.remove("active");
  }
});

document
  .getElementById("calorie-form")
  .addEventListener("submit", function (e) {
    document.getElementById("results").style.display = "none";
    document.getElementById("loading").style.display = "block";

    setTimeout(calculateCalories, 2000);

    e.preventDefault();
  });

function calculateCalories() {
  const age = document.getElementById("age");
  const gender = document.querySelector(
    'input[name="customRadioInline1"]:checked'
  );
  const weight = document.getElementById("weight");
  const height = document.getElementById("height");
  const activity = document.getElementById("list").value;
  const totalCalories = document.getElementById("total-calories");

  if (
    age.value === "" ||
    weight.value === "" ||
    height.value === "" ||
    80 < age.value ||
    age.value < 15 ||
    weight.value <= 0 ||
    height.value <= 0
  ) {
    errorMessage("Please make sure the values you entered are correct");
  } else if (gender.id === "male" && activity === "1") {
    totalCalories.value =
      1.2 *
      (66.5 +
        13.75 * parseFloat(weight.value) +
        5.003 * parseFloat(height.value) -
        6.755 * parseFloat(age.value));
  } else if (gender.id === "male" && activity === "2") {
    totalCalories.value =
      1.375 *
      (66.5 +
        13.75 * parseFloat(weight.value) +
        5.003 * parseFloat(height.value) -
        6.755 * parseFloat(age.value));
  } else if (gender.id === "male" && activity === "3") {
    totalCalories.value =
      1.55 *
      (66.5 +
        13.75 * parseFloat(weight.value) +
        5.003 * parseFloat(height.value) -
        6.755 * parseFloat(age.value));
  } else if (gender.id === "male" && activity === "4") {
    totalCalories.value =
      1.725 *
      (66.5 +
        13.75 * parseFloat(weight.value) +
        5.003 * parseFloat(height.value) -
        6.755 * parseFloat(age.value));
  } else if (gender.id === "male" && activity === "5") {
    totalCalories.value =
      1.9 *
      (66.5 +
        13.75 * parseFloat(weight.value) +
        5.003 * parseFloat(height.value) -
        6.755 * parseFloat(age.value));
  } else if (gender.id === "female" && activity === "1") {
    totalCalories.value =
      1.2 *
      (655 +
        9.563 * parseFloat(weight.value) +
        1.85 * parseFloat(height.value) -
        4.676 * parseFloat(age.value));
  } else if (gender.id === "female" && activity === "2") {
    totalCalories.value =
      1.375 *
      (655 +
        9.563 * parseFloat(weight.value) +
        1.85 * parseFloat(height.value) -
        4.676 * parseFloat(age.value));
  } else if (gender.id === "female" && activity === "3") {
    totalCalories.value =
      1.55 *
      (655 +
        9.563 * parseFloat(weight.value) +
        1.85 * parseFloat(height.value) -
        4.676 * parseFloat(age.value));
  } else if (gender.id === "female" && activity === "4") {
    totalCalories.value =
      1.725 *
      (655 +
        9.563 * parseFloat(weight.value) +
        1.85 * parseFloat(height.value) -
        4.676 * parseFloat(age.value));
  } else {
    totalCalories.value =
      1.9 *
      (655 +
        9.563 * parseFloat(weight.value) +
        1.85 * parseFloat(height.value) -
        4.676 * parseFloat(age.value));
  }

  document.getElementById("results").style.display = "block";
  document.getElementById("loading").style.display = "none";
}

function errorMessage(error) {
  document.getElementById("results").style.display = "none";
  document.getElementById("loading").style.display = "none";
  alert(error);
}
document.getElementById("bmi-form").addEventListener("submit", function (e) {
  document.getElementById("bmi-results").style.display = "none";
  document.getElementById("bmi-loading").style.display = "block";

  setTimeout(calculateBMI, 2000);

  e.preventDefault();
});

function calculateBMI() {
  const weight = document.getElementById("bmi-weight").value;
  const height = document.getElementById("bmi-height").value;
  const bmiValue = document.getElementById("bmi-value");

  if (weight === "" || height === "" || weight <= 0 || height <= 0) {
    errorMessage("Please make sure the values you entered are correct");
  } else {
    const bmi = (weight / (height / 100) ** 2).toFixed(2);
    bmiValue.value = bmi;

    document.getElementById("bmi-results").style.display = "block";
    document.getElementById("bmi-loading").style.display = "none";
  }
}
