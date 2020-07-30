"use strict";

const initalButtonClick = () => {
  document.querySelector("#sortButton").addEventListener("click", buildForm);
  };

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);

  selectedDiv.innerHTML = textToPrint;
};

const buildForm = () => {
  let domString = `<form>
  <div class="form-row align-items-center">
            <div class="col-auto">
              <label class="sr-only" 
              for="inlineFormInput">Name</label>
              <input 
              type="text" 
              class="form-control mb-2" 
              id="inlineFormInput" 
              placeholder="Student Name">
            </div>
            <div class="col-auto">
              <button type="submit" 
              class="btn btn-primary mb-2" 
              id= 'nameButton'> Sort!</button>
            </div>
          </div>
          <form>`;

  printToDom('#form', domString);
  nameButtonClick();
};

const nameButtonClick = () => {
    document.querySelector('#nameButton').addEventListener('click', getName);
}


let studentNames = []

const getName = () => {
    const name = document.getElementById('inlineFormInput').value; 
    console.log(studentNames)
    studentNames.push(name);
    console.log(studentNames);
    return studentNames;
   


}


const buildCard = () => {


}



const init = () => {
  initalButtonClick();
  
};

init();
