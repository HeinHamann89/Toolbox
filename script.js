// Get references to the form and list elements
const form = document.getElementById("form");
const list = document.getElementById("list");

// Add a submit event listener to the form
form.addEventListener("submit", event => {
  event.preventDefault();

  // Get the values of the name and url fields
  const name = document.getElementById("name").value;
  const url = document.getElementById("url").value;

  // Create a new list item element
  const listItem = document.createElement("div");
  listItem.classList.add("list-item");

  // Create a span element to display the name
  const nameSpan = document.createElement("span");
  nameSpan.textContent = name;
  listItem.appendChild(nameSpan);

  // Create a link element to display the url
  const urlLink = document.createElement("a");
  urlLink.href = url;
  urlLink.textContent = url;
  listItem.appendChild(urlLink);

  // Create a delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "Delete";
  listItem.appendChild(deleteButton);

  // Add a click event listener to the delete button
  deleteButton.addEventListener("click", () => {
    list.removeChild(listItem);
  });

  // Append the list item to the list
  list.appendChild(listItem);

  // Clear the form fields
  document.getElementById("name").value = "";
  document.getElementById("url").value = "";
});
