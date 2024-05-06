export function addCard(cardData) {
  // Create elements
  var cardContainer = document.querySelector('.space-y');
  var newCard = document.createElement('div');
  newCard.className = 'card';
  newCard.dataset.id = cardData.id;
  var cardContent = `
    <div class="row g-0">
      <div class="col-auto">
        <div class="card-body">
        </div>
      </div>
      <div class="col">
        <div class="card-body ps-0">
          <div class="row">
            <div class="col">
              <h3 class="mb-0">${cardData.title}</h3>
            </div>
            <div class="col-auto fs-3 text-green">${cardData.salary}</div>
          </div>
          <div class="row">
            <div class="col-md">
              <div class="mt-3 list-inline list-inline-dots mb-0 text-muted d-sm-block d-none">
                <div class="list-inline-item"><!-- Download SVG icon from http://tabler-icons.io/i/license -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-inline" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" /><path d="M9 7l4 0" /><path d="M9 11l4 0" /></svg>
				          ${cardData.employmentType}</div>
                <div class="list-inline-item"><!-- Download SVG icon from http://tabler-icons.io/i/map-pin -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-inline" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
                  ${cardData.location}</div>
              </div>
            </div>
            <div class="col-md-auto">
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Set card content
  newCard.innerHTML = cardContent;
  
  // Append new card to container
  cardContainer.appendChild(newCard);
  newCard.addEventListener('mouseenter', function() {
    newCard.classList.add('hovered');
  });
  
  newCard.addEventListener('mouseleave', function() {
    newCard.classList.remove('hovered');
  });
  newCard.addEventListener('click', function() {
    // Log the hidden ID to the console
    const id = newCard.dataset.id;
    console.log("Hidden ID:", newCard.dataset.id);
    const url = `jobProfile.html?id=${id}`;
    
    // Redirect the user to the jobProfile page
    window.location.href = url;
    
    //Open new tab
    //window.open(url, '_blank');
  });
}



//addCard(newCardData);
// const job = {
// 	"id" : 
// 	"title": ,
// 	"location": ,
// 	"seniorityLevel": ,
// 	"salary": ,
// 	"description": ,
// 	"workTime": ,
// 	"employmentType": ,
// 	"companyId": ,
// }