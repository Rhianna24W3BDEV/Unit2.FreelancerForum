const freelancersList = [
    {
        id: 1,
        firstName: "Rhianna", 
        occupation: "Web-Developer", 
        price: 60
    },

    {
        id: 2,
        firstName: "Clay", 
        occupation: "Truck-Driver", 
        price: 80
    },

    {
        id: 3,
        firstName: "Gabrielle", 
        occupation: "Therapist", 
        price: 70
    },
]

const availableFreelancers = [
    {id: 4,firstName: "John Smith", occupation: "Teacher" ,price:50},
    {id: 5,firstName: "Emma Johnson", occupation: "Software Engineer" ,price:45},
    {id: 6,firstName: "Michael Davis", occupation: "Doctor" ,price:60},
    {id: 7,firstName: "Sarah Brown", occupation: "Lawyer" ,price:55},
    {id: 8,firstName: "David Wilson", occupation: "Chef" ,price:40},
    {id: 9,firstName: "Jennifer Lee", occupation: "Architect" ,price:70},
   
]

//create a function that creates card
function createCard(freelancer){
    const card = document.createElement('div');
    card.className = 'card';

    const cardHeader = createCardHeader(freelancer.firstName);
    //create card body
    const cardBody = createCardBody(freelancer.occupation);

    //create card footer
    const cardFooter = createCardFooter(freelancer.price);
    //const cardFooter = createCardFooter();
    //append all elements to card
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);
   //card.appendChild(cardFooter);

    const grid = document.querySelector('.content_grid');
    grid.appendChild(card);
}

function createCardHeader(firstName){
    const cardHeader = document.createElement('div');
    const freelancerName = document.createElement('h2');
    const freelancerText = document.createTextNode(firstName);

    cardHeader.className = 'card-header';

    freelancerName.append(freelancerText);

    cardHeader.appendChild(freelancerName);

    return cardHeader;
}

function createCardBody(occupation, price){
    const cardBody = document.createElement('div');
    const freelancerOccupation = document.createElement('h2');
    const occupationText = document.createTextNode(occupation);
   
    cardBody.className = 'card-body';

    freelancerOccupation.append(occupationText);
    
    cardBody.appendChild(freelancerOccupation);
    
    return cardBody;
}

function createCardFooter(price){
    const cardFooter = document.createElement('div');
    const startingPrice = document.createElement('h2');
    const priceText = document.createTextNode(`${price}`);

    startingPrice.append(priceText);

    cardFooter.appendChild(startingPrice);

    return cardFooter;
}

//create a loop forEach
freelancersList.forEach((freelancer)=>{createCard(freelancer)});

const addFreelancerInterval = setInterval(addFreelancer, 2000);

function addFreelancer(){
   const randonFreelancer = Math.floor(Math.random() * availableFreelancers.length);
   const item = availableFreelancers[randonFreelancer];
   createCard(item, freelancersList);
}

function calculateAverage(){
    if (freelancersList.length === 0) {
        return "No freelancers added yet.";
      }
      const totalStartingPrice = freelancersList.reduce(
        (sum, freelancer) => sum + freelancer.price,
        0
      );
      const averageStartingPrice = totalStartingPrice / freelancersList.length;
      
      createCard(averageStartingPrice, freelancersList)
  }


