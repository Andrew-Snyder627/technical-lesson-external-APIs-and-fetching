// Define the function to display astronauts

// Function to display astronauts data
// Hint: Create a function called displayAstronauts(data)
// Hint: Select the <ul> element with the id "astronaut-list"
// Hint: Loop through the data.people array and create <li> elements for each astronaut's name
// Hint: Append the <li> elements to the <ul> element

function displayAstronauts(data) {
  const astronautList = document.getElementById("astronaut-list");

  data.people.forEach((person) => {
    const listItem = document.createElement("li");
    listItem.textContent = person.name;
    astronautList.appendChild(listItem);
  });
}

// Fetch data from the external API

fetch("http://api.open-notify.org/astros.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    displayAstronauts(data);
  })
  .catch(function (error) {
    console.error("Error fetching data:", error);
  });

// Hint: Use fetch() to make an HTTP request to "http://api.open-notify.org/astros.json"
// Hint: Use .then() to process the response and convert it to JSON
// Hint: Call the displayAstronauts() function with the fetched data
// Hint: Use .catch() to handle any errors that occur during the fetch process

if (typeof module !== "undefined") {
  module.exports = {
    displayAstronauts,
  };
}
