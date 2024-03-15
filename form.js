//reference to list
//const inputForm = document.querySelector('inputForm');
const availableFreelancersList = document.querySelector('.availableFreelancers');

// reference to input
const name = document.getElementById('name');
const occupation = document.getElementById('occupation').value;
const price = document.getElementById('price').value;
/*const input = document.getElementById('name')
const jobInput = document.getElementById('job')
const priceInput = document.getElementById('price')
*/

//reference to button
const button = document.querySelector('button');
/*const jobBtn = document.querySelector('jobBtn')
const priceBtn = document.querySelector('button')
*/
/*
//when button is pressed, add item to the list
Btn.addEventListener('click', (e) => {
    const userInput = input.value;

    // create a new li element 
    const li = document.createElement('li');

    // add the user input t the li
    const text = document.createTextNode(userInput);
    li.append(text);

    //append the li to the name list
     namesList.append(li);
})
*/

button.addEventListener('click', (e) => {
    const userInput = input.value;
    
 // Create a new list item
  const li = document.createElement('li');
  li.textContent = `Name: ${name}, Occupation: ${occupation}, Price: ${price}`;
  // add the user input to the li
  const text = document.createTextNode(userInput);
  li.append(text);

  // Append the list item to the list
  document.getElementById('availableFreelancers').append(li);
});


//Create a list of names with price and occupation
const freelancers = [
    {"name": "John Smith", "price": 50, "occupation": "Teacher"},
    {"name": "Emma Johnson", "price": 45, "occupation": "Software Engineer"},
    {"name": "Michael Davis", "price": 60, "occupation": "Doctor"},
    {"name": "Sarah Brown", "price": 55, "occupation": "Lawyer"},
    {"name": "David Wilson", "price": 40, "occupation": "Chef"},
    {"name": "Jennifer Lee", "price": 70, "occupation": "Architect"},
    {"name": "Christopher Clark", "price": 65, "occupation": "Accountant"},
    {"name": "Amanda Martinez", "price": 80, "occupation": "Graphic Designer"},
    {"name": "Daniel Taylor", "price": 90, "occupation": "Engineer"},
    {"name": "Jessica Thomas", "price": 55, "occupation": "Nurse"},
    {"name": "Matthew Rodriguez", "price": 75, "occupation": "Marketing Manager"},
    {"name": "Emily Hernandez", "price": 65, "occupation": "Writer"},
    {"name": "James Moore", "price": 55, "occupation": "Sales Representative"},
    {"name": "Olivia Lopez", "price": 40, "occupation": "Artist"},
    {"name": "William Young", "price": 85, "occupation": "Consultant"},
    {"name": "Sophia King", "price": 70, "occupation": "HR Manager"},
    {"name": "Alexander Scott", "price": 95, "occupation": "Financial Analyst"},
    {"name": "Mia Green", "price": 60, "occupation": "Psychologist"},
    {"name": "Ethan Hall", "price": 45, "occupation": "Journalist"},
    {"name": "Charlotte Perez", "price": 80, "occupation": "Event Planner"},
    {"name": "Noah Turner", "price": 65, "occupation": "Web Developer"},
    {"name": "Amelia Adams", "price": 70, "occupation": "Dentist"},
    {"name": "Benjamin Garcia", "price": 50, "occupation": "Electrician"},
    {"name": "Harper Cook", "price": 75, "occupation": "Real Estate Agent"},
    {"name": "Evelyn Stewart", "price": 55, "occupation": "Social Worker"},
    {"name": "Logan Morris", "price": 65, "occupation": "Pharmacist"},
    {"name": "Grace Bailey", "price": 40, "occupation": "Fitness Trainer"},
    {"name": "Lucas Rivera", "price": 85, "occupation": "Investment Banker"},
    {"name": "Lily Ward", "price": 60, "occupation": "Mechanical Engineer"},
    {"name": "Jackson Flores", "price": 70, "occupation": "Professor"}
]

const addFreelancerInterval = setInterval(addFreelancer, 2000);

render();

function render() {
    // Render the freelancers
    const inputForm = document.querySelector("#inputForm");
    const formElements = form.map((form) => {
      const element = document.createElement("li");
      return element;
    });
    form.replaceChildren(...formElements);
} 

function addFreelancer(name, occupation, startingprice){
    freelancers.push({
        name, occupation, startingprice
    })
}

/*
//function to calculate starting price
function calculateAverageStartingPrice(){
    if (freelancers.length === 0){
        return 0;
    }
    const totalStartingPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
    return totalStartingPrice / freelancers.length;
}

//create a message that displays the average starting price
console.log(`${calculateAverageStartingPrice()}`);
//create a way to add freelancers every few seconds

//creat a way to update the average starting price
*/
