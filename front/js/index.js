const app = {

  init() {
    app.listeners();
  },

  async showCountriesList() {
    const mainDiv = document.querySelector('.main-div');
    mainDiv.innerHTML = '';
    const response = await fetch('http://localhost:4000/collection/countries');
    const countries = await response.json();
    console.log(countries);
    const countriesList = document.createElement('p');
    countriesList.textContent = 'coucou';
    mainDiv.appendChild(countriesList);
  },

  // Event list
  listeners() {
    // Display countries list
    document.querySelector('.button__countries-list').addEventListener('click', app.showCountriesList);
  },

};

document.addEventListener('DOMContentLoaded', app.init);
