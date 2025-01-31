searchInput.addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  // container.innerHTML = '';
  // if (!searchTerm) return;
  const filteredData = countriesData.filter(country => country.name.common.toLowerCase().includes(searchTerm));
  // slice-only  max 5 countries 
  handleData(filteredData);
});