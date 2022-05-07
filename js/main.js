// FORM
let elForm = document.querySelector("#form");
let elInpName = document.querySelector("#name");
let elInpLastName = document.querySelector("#last-name");
let elSelectRel = document.querySelector("#relationship");
let elInpPhone = document.querySelector("#phone");


// CREATED ELEMENTS
let newP = document.createElement("p");
newP.textContent = "Please fill all blank!";
newP.classList.add("position-absolute", "text-warning", "d-none");
elForm.appendChild(newP);


// RESULT
let elResultList = document.querySelector(".result__list");


// ARRAYS
let relationships = ["Friend", "Relative", "Stranger", "Other"]
let contacts = [];


// FUNCTIONS
function relationship(){
  for (let i = 0; i < relationships.length; i++) {
    let newOption = document.createElement("option");
    newOption.value = relationships[i];
    newOption.textContent = relationships[i];
    elSelectRel.appendChild(newOption);
  }
}
relationship()


elForm.addEventListener("submit", function (e){
  e.preventDefault();
  if(elInpName.value == "" || elInpLastName.value == "" || elInpPhone.value == ""){
    newP.classList.remove("d-none");
    return;
  }else{
    newP.classList.add("d-none")
    elResultList.innerHTML = "";
    contacts.push(
      {
        name: elInpName.value.trim(),
        lastName: elInpLastName.value.trim(),
        relation: elSelectRel.value,
        phone: elInpPhone.value.trim(),
      }
    )
    for (let i = 0; i < contacts.length; i++) {
      let newLi = document.createElement("li");
      newLi.classList.add("result__list-item")
      newLi.innerHTML = `
      <p class="result__item-text">Name: <span>${contacts[i].name}</span></p>
      <p class="result__item-text">Last name: <span>${contacts[i].lastName}</span></p>
      <p class="result__item-text">Relationship: <span>${contacts[i].relation}</span></p>
      <p class="result__item-text">Phone number: <span>${contacts[i].phone}</span></p>
      ` 
      elResultList.appendChild(newLi);
    }
  }
  elInpName.value = "";
  elInpLastName.value = "";
  elSelectRel.value = "Friend"
  elInpPhone.value = "";
})