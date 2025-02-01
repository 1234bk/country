let countriesData = [];
function handleData(data) {

console.log(data);
countriesData = data;
const container = document.querySelector('.container');
container.innerHTML = '';
  data.forEach(user => {
    
  
    var pop =0;
    if (user.capital) { 
       pop  = Object.values(user.capital)[0];
    }
    
    

    const card = document.createElement('div'); 
    card.className = 'card';
    card.addEventListener("click", () => {
      const countryName = user.name.common;
      window.location.href = `/country.html?name=${countryName}`;

  });
    card.innerHTML = `
      <img src="${user.flags.png}" alt="">
            <h2 id="country-name"><b>${user.name.common}</b></h2>
            <h3 id="h31" class="class">population: <span> ${user.population}</span></h3>
            <h3 id="h32" class="class">region:  <span> ${user.region}</span></h3>
            <h3 id="h33" class="class">capital: <span>${pop}</span></h3>
    `;
    container.appendChild(card); // Add the card to the container
  });
}

// all countries
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json()) // Parse the JSON data
.then(handleData)
.catch(error => console.error('Error fetching JSON:', error));



// regions
document.getElementById("regionSelect").addEventListener("change", function () {
  const region = this.value; 
  if (!region) return; // Prevent calling API if no region is selected
  const container = document.querySelector('.container');
  container.innerHTML = '';
  fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then(response => response.json())
      .then(handleData)
      .catch(error => console.error("Error fetching data:", error));
});


// search countries
const searchInput = document.getElementById("searchInput");
// const container = document.querySelector('.container');


searchInput.addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  // container.innerHTML = '';
  // if (!searchTerm) return;
  const filteredData = countriesData.filter(country => country.name.common.toLowerCase().includes(searchTerm));
  // slice-only  max 5 countries 
  handleData(filteredData);
});











