export const loadDataOfCases = async(country)=>{
    try {
        const cases = await getDataOfCases(country);
         return cases;
    } catch (error) {
        console.error('Error loading data', error);
        throw error;
    }
   
}
export const loadDataOfVaccinated = async(country)=>{
    try {
        const vaccines = await getDataOfVaccinated(country);
         return vaccines;
    } catch (error) {
        console.error('Error loading data', error);
        throw error;
    }
   
}

const getDataOfCases= async country =>{
    const response = await fetch (`https://europe-central2-webuni-js-covid-exam.cloudfunctions.net/cases?country=${country}`)
 if(response.status !== 200){
    throw 'Error occured in data loading!';
}
const jsonResponse = await response.json();
return jsonResponse['confirmed'];
}

const  getDataOfVaccinated = async country =>{
    const response = await fetch(`https://europe-central2-webuni-js-covid-exam.cloudfunctions.net/vaccines?country=${country}`);
    if(response.status !== 200){
        throw 'Error occured in data loading!';
    }
    const jsonResponse = await response.json();
    return jsonResponse['people_vaccinated'];
}
