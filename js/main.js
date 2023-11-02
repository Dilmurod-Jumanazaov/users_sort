const elForm = document.querySelector(".js-form");
const elInput = document.querySelector(".js-input");
const elList = document.querySelector(".list");
const elSelect = document.querySelector(".hero__select");
const elMinPriceinput = document.querySelector(".js-min-price");
const elMaxPriceInput  = document.querySelector(".js-max-price");

function renderUsers(array,node) {

  node.innerHTML = "";

  array.forEach(element => {
    const liElement = document.createElement("li");
    const name = document.createElement("p");
    const surname = document.createElement("p");
    const gender = document.createElement("p");
    const country = document.createElement("p");
    const money = document.createElement("p");

    name.textContent = `User_name: ${element.first_name}`;
    surname.textContent = `Last_name: ${element.last_name}`;
    gender.textContent = `Gender: ${element.gender}`;
    country.textContent = `Country: ${element.country}`;
    money.textContent = `Money: ${element.money}`;

    liElement.classList.add("item")

    liElement.append(name,surname,gender,country,money);

    node.appendChild(liElement);
  });
}
renderUsers(users,elList);


elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  
  const inputValue = elInput.value.trim();
  
  const filteredCountry = users.filter((item,index,arr) => item.country.toLowerCase() == inputValue.toLowerCase());

  renderUsers(filteredCountry,elList);
  elInput.value = "";
});

elMinPriceinput,elMaxPriceInput.addEventListener("change", (evt) => {

  const minPrice = elMinPriceinput.value;
  const maxPrice = elMaxPriceInput.value;

  const filteredPrice = users.filter((item) => item.money >= minPrice && item.money <= maxPrice);

  renderUsers(filteredPrice,elList);
});

const filteredMale = users.filter((item) => item.gender == "Male");
const filteredFemale = users.filter((item) => item.gender == "Female");

elSelect.addEventListener("change", (evt) => {

  // const genderValeu = elSelect.value.trim();
  if(elSelect.value == "Male") {
    renderUsers(filteredMale,elList);
  };
  if(elSelect.value == "Female") {
    renderUsers(filteredFemale,elList);
  }
  // console.log(genderValeu);
});
