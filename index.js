fetch('https://restcountries.com/v3.1/all')
.then(response => response.json()) // Parse the JSON data
.then(data => {
    
const container = document.querySelector('.container');
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
})
.catch(error => console.error('Error fetching JSON:', error));