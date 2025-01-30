const btn = document.querySelector('.btn');
btn.addEventListener("click", () => {
    // const countryName = user.name.common;
    const atag = document.createElement('a');
    atag.href = `${window.location.origin}/index.html`
    atag.click();
});



const params = new URLSearchParams(window.location.search);
const countryName = params.get("name");
console.log(countryName); 
const container = document.querySelector('.container');



const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}`
fetch(url)
.then(response => response.json()) // Parse the JSON data
.then(data => {

    console.log(url);
    const country = data[2]; 
    console.log(country.name.common);
    console.log(country.population);
    console.log(country.capital[0]);
    console.log(country.flags.png); 
    
    
    // const country = data[0]; 
    // const container = document.querySelector('.container');
    const containerofimg = document.createElement('div'); 
    containerofimg.className = 'containerofimg';
 
    const flagUrl =country.flags.png;
    containerofimg.innerHTML = `
      <img  src= "${flagUrl}" alt="country" >
    `;
    container.appendChild(containerofimg); 



    const details = document.createElement('div'); 
    details.className = 'details';

    // const lastKey = Object.keys(country.name.nativeName)[2];
    const firstKey = Object.keys(country.name.nativeName)[0]; //firstKey = Object.keys(country.name.nativeName)[2];

    details.innerHTML = `
      <h1>${country.name.common}</h1>
        <div class="details-list">
            <h2>Native Name : <b class="bold"> ${ country.name.nativeName[firstKey]?.common} </b></h2>
            <h2>Population :  <b class="bold"> ${country.population}</b></h2>
            <h2>Region :      <b class="bold"> ${country.region}</b></h2>
            <h2>Sub region :  <b class="bold"> ${country.subregion}</b></h2>
            <h2>Capital :     <b class="bold"> ${country.capital[0]}</b></h2>
            <h2>Top level Domain : <b class="bold"> ${country.tld}</b></h2>
            <h2>Curriences :  <b class="bold">  ${Object.values(country.currencies)[0]?.name}</b></h2>
            <h2>Languages :   <b class="bold">${ Object.values(country.languages).join(", ")} </b></h2>  
        </div>
        <div class="border">
        </div>
    `;
    container.appendChild(details); 
    
 




    const lastborder = document.createElement('div'); 
    lastborder.className = 'border';
    console.log(country.borders);


   
const fetchBorderCountries = async () => {
  const borders = country.borders;
  const maxButtons = Math.min(3, borders.length); // At most 3 buttons
  const borderheader = document.createElement('h1');
  borderheader.className = 'borderheader';
  borderheader.textContent = 'Border Countries :';
  lastborder.appendChild(borderheader);


  for (let i = 0; i < maxButtons; i++) {
      const code = borders[i];
      const apiUrl = `https://restcountries.com/v3.1/alpha/${code}`;
      
      console.log("Fetching API:", apiUrl); // Print API call

      try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          const commonName = data[0].name.common;


          console.log("Fetched data:", commonName); // Print fetched data
          // Create button

          const button = document.createElement("button");
          button.className = 'border-btn';
          button.textContent = commonName;
          lastborder.appendChild(button);

          button.addEventListener("click", () => {
            const atag = document.createElement('a');
            atag.href = `${window.location.origin}/country.html?name=${commonName}`
            atag.click();
        });
      } catch (error) {
          console.error(`Error fetching ${code}:`, error);
      }
  }
  // document.body.appendChild(lastborder);
  details.appendChild(lastborder); 
};

// Call the function
fetchBorderCountries();























})
.catch(error => console.error('Error fetching JSON:', error));







// border.innerHTML = `









