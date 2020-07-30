"use strict";

const initalButtonClick = () => {
  document.querySelector("#sortButton").addEventListener("click", buildForm);
};

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);

  selectedDiv.innerHTML = textToPrint;
};

const buildForm = () => {
  let domString = `<div class="form-row align-items-center">
            <div class="col-auto">
              <label class="sr-only" for="inlineFormInput">Name</label>
              <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Student Name">
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-2">Sort!</button>
            </div>
          </div>`;

  printToDom("#form", domString);
};

const init = () => {
  initalButtonClick();
};

init();
