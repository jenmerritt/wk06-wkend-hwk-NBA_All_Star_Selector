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

const handleFormSubmit = function (event) {
// prevent form submitting (it's default behaviour) so page does not refresh:
  event.preventDefault();

// create list for submitted form event:
  const playerListItem = createPlayerListItem(event.target);
  const playerList = document.querySelector('#player-list');
  playerList.appendChild(playerListItem);

// clear form:
  event.target.reset();

}

const createPlayerListItem = function (form) {

// create new list item:
  const playerListItem = document.createElement('li');
  // playerListItem.classList.add('player-list-item');

// create a name item and then append to the player list:
  const playerName = document.createElement('h1');
  playerName.id = 'player-name-item';
  playerName.textContent = `${form.name.value}`;
  playerListItem.appendChild(playerName);

// create a team item and then append to the player list:
  const team = document.createElement('h2');
  team.id = 'team-item';
  team.textContent = `${form.team.value}`;
  playerListItem.appendChild(team);

// create a position item and then append to the player list:
  const position = document.createElement('p');
  position.id = 'position-item';
  position.textContent = `Position: ${form.position.value}`;
  playerListItem.appendChild(position);

// create a reason header and then append to the player list:
    const reasonTitle = document.createElement('p');
    reasonTitle.id = 'reason-title-item';
    reasonTitle.textContent = `Selected because...`;
    playerListItem.appendChild(reasonTitle);

// create a reason item and then append to the player list:
  const reason = document.createElement('p');
  reason.id = 'reason-item';
  reason.textContent = `${form.reason.value}`;
  playerListItem.appendChild(reason);

// return the player list for use in the handleFormSubmit function:
  return playerListItem;

};

const handleDeleteButtonClick = function () {
  // console.log("button works");

//get hold of the list by id, then innerHTML clears the child elements of it i.e. the li
  document.querySelector("#player-list").innerHTML = "";
};
