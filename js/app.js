document.addEventListener('DOMContentLoaded', () => {

  // console.log('JavaScript load test');

// get hold of the form using querySelector via form id:
  const form = document.querySelector('#new-item-form');

// add event listener that waits for the defined form to be submitted and then runs the handleFormSubmit function:
  form.addEventListener('submit', handleFormSubmit);

// get hold of the delete button using querySelector via button id:
  const deleteButton = document.querySelector('#delete-button');
// add event listener that waits for the defined button to be clicked and then runs the handleDeleteButtonClick function:
  button.addEventListener('click', handleDeleteButtonClick);

});
