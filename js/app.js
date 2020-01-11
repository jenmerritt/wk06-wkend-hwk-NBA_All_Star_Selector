// setup event listener that waits for the the content to load before running the function:
document.addEventListener('DOMContentLoaded', () => {

  // console.log('JavaScript load test');

// get hold of the form using querySelector via form id:
  const form = document.querySelector('#new-item-form');

// add event listener that waits for the defined form to be submitted and then runs the handleFormSubmit function:
  form.addEventListener('submit', handleFormSubmit);

// get hold of the delete button using querySelector via button id:
  const deleteButton = document.querySelector('#delete-button');
// add event listener that waits for the defined button to be clicked and then runs the handleDeleteButtonClick function:
  deleteButton.addEventListener('click', handleDeleteButtonClick);

});

const handleFormSubmit = function () {
// prevent form submitting (it's default behaviour) so page does not refresh:
  event.preventDefault();

// get hold of the ul so items can be appended to it:
  const list = document.querySelector('#player-list');

// save player name into a li, setup content, and append to ul:
  const newPlayerNameItem = document.createElement('li');
  newPlayerNameItem.textContent = `Player Name: ${event.target.name.value}`;
  list.appendChild(newPlayerNameItem);

// save team into a li, setup content, and append to ul:
  const newTeamItem = document.createElement('li');
  newTeamItem.textContent = `Team: ${event.target.team.value}`;
  list.appendChild(newTeamItem);

// save position into a li, setup content, and append to ul:
  const newPositionItem = document.createElement('li');
  newPositionItem.textContent = `Position: ${event.target.position.value}`;
  list.appendChild(newPositionItem);
// save reason into a li, setup content, and append to ul:
  const newReasonItem = document.createElement('li');
  newReasonItem.textContent = `Reason: ${event.target.reason.value}`;
  list.appendChild(newReasonItem);

};

const handleDeleteButtonClick = function () {
  // console.log("button works");
//get hold of the list by id, then innerHTML clears the child elements of it i.e. the li
  // document.querySelector('#player-list').innerHTML = " ";
  // document.getElementById("player-list").innerHTML = "";

};
