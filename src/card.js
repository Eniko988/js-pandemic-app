let cardIdCounter = 0;

    export const addCard = (city,cases,vaccinated) => {

    const container = document.getElementById('cards-container');
    
    container.insertAdjacentHTML('afterbegin', `
        <zizi-card id="card-${cardIdCounter}">
        <center>${city}<center>
            <div class="card-content">
            <div><i class="bi bi-person-fill"></i>${cases.toLocaleString()}</div>
            <div><i class="bi bi-capsule"></i>${vaccinated.toLocaleString()}</div>
            </div>
            <div class="delete-btn">
              <i class="bi bi-trash" id="delete-button-${cardIdCounter}" data-cardIdCounter="${cardIdCounter}"></i>
            </div>
        </zizi-card>
        `);

       document.getElementById(`delete-button-${cardIdCounter}`)
      .addEventListener('click',e => {
      const counterId = e.target.getAttribute('data-cardIdCounter');
      document.getElementById(`card-${counterId}`).remove();
    })
      cardIdCounter++;
    }
