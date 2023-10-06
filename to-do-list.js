const userInput = document.getElementById("input");
const taskList = document.getElementById("task-list");

const audio = new Audio("success.mp3");
const arr = ["Go to class", "Study at library", "Work on project"];//array with preset tasks
//string_value parameter is place holder for each arr value
function addAndRemoveTasks(string_value) {
  // If the user input is empty and string_value is not explicitly provided, show an alert.
  if (userInput.value === "" && string_value === undefined) {
    alert("Hey there, you need to enter a task!");
  } else {
    let li = document.createElement('li');//creates a new list item element

    li.innerText = string_value || userInput.value;//content of each newly created list item element will be equal to array/user input
    taskList.appendChild(li);//adds new list item element to the list

    /*--------------------------------------------------------------------------------------------------------------------*/
    let dlt = document.createElement("button");//create a button element named dlt

    dlt.classList.add("dlt_button");//adds the dlt_button class to dlt button
    dlt.innerHTML = "<i class='fa-regular fa-trash-can'></i>";//makes dlt button content a trash can icon

    li.appendChild(dlt);//appends dlt button to each newly created list item



    userInput.value = "";//initializes input box to be empty after each added task

    dlt.addEventListener("click", () => {
      taskList.removeChild(li);// Remove the associated list item when a delete button is clicked.
    });
  }

}
// Call the function with each element from the array, to add in all tasks from the array
arr.forEach((value) => {
  addAndRemoveTasks(value);
})

//in the document, if target on click matches an li element, it toggles in and out of checked-task class after each click
document.addEventListener("click", (event) => {
  if (event.target.matches("li")) {
    event.target.classList.toggle("checked-task")

  }
});
//in the document, if target on click matches an li element with the checked-task class, it will play an audio cue right after
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("checked-task")) {
    audio.play();

  }
});




