
import { addCard } from "./card.js";
import { loadDataOfCases,loadDataOfVaccinated } from "./covidData.js";
import { getChart } from "./displayChart.js";

export const initForm= () =>{
    const form = document.getElementById('form');
    const submitButton = document.getElementById('submit');

    const errorMessage = document.getElementById('error-message');
    const cardsContainer = document.getElementById('cards-container');

    form.addEventListener('submit', async e=>{
        const country = document.getElementById('country-input').value;
    
        e.preventDefault();
        submitButton.disabled = true;

        cardsContainer.insertAdjacentHTML('afterbegin',`<div id="loading-indicator" class="loader"></div>`);
        try {
           const cases = await loadDataOfCases(country);
           const vaccinated = await loadDataOfVaccinated(country);

           addCard(country,cases,vaccinated);
           getChart();
        } catch (er) {
            errorMessage.style.display="block";
            setTimeout (()=> errorMessage.style.display = 'none',2000);
            
        }
        submitButton.disabled= false;
        cardsContainer.removeChild(document.getElementById('loading-indicator'))
    })
    }
    


