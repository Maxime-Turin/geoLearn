const app = {

  init() {
    app.listeners();
  },

  async showCountriesList() {
    const mainDiv = document.querySelector('.main-div');
    mainDiv.innerHTML = '';
    const response = await fetch('http://localhost:4000/collection/countries');
    const countries = await response.json();
    const countriesList = document.createElement('ul');
    mainDiv.appendChild(countriesList);
    countries.forEach((country) => {
      const oneCountry = document.createElement('li');
      oneCountry.textContent = country.name;
      oneCountry.classList.add('country-name');
      oneCountry.addEventListener('click', () => app.showCountry(country.name));
      countriesList.appendChild(oneCountry);
    });
    const addCountryButton = document.createElement('a');
    addCountryButton.classList.add('button__add--country');
    addCountryButton.setAttribute('role', 'button');
    addCountryButton.setAttribute('href', '#');
    addCountryButton.innerText = 'ajouter un pays';
    addCountryButton.addEventListener('click', app.addCountry);
    mainDiv.appendChild(addCountryButton);
  },

  async showCountry(countryName) {
    const mainDiv = document.querySelector('.main-div');
    mainDiv.innerHTML = '';
    const response = await fetch(`http://localhost:4000/collection/countries/${countryName}`);
    const country = await response.json();
    const countryCard = document.createElement('article');
    mainDiv.appendChild(countryCard);
    const countryDetails = {
      html:
      `<ul>
      <li>Nom : ${country[0].name}</li>
      <li>Capitale : ${country[0].capitalCity}</li>
      <li>Continent : ${country[0].continent}</li>
      <li>Population : ${country[0].population}</li>
      <li>Langue : ${country[0].officialLanguage}</li>
      </ul>
      `,
    };
    countryCard.innerHTML = countryDetails.html;
    const modifyButton = document.createElement('a');
    modifyButton.classList.add('button__modify--country');
    modifyButton.setAttribute('role', 'button');
    modifyButton.setAttribute('href', '#');
    modifyButton.innerText = 'Modifier';
    modifyButton.addEventListener('click', app.modifyCountry);
    countryCard.appendChild(modifyButton);
  },

  addCountry() {

  },

  modifyCountry() {
    console.log('coucou');
  },

  // Event list
  listeners() {
    // Display countries list
    document.querySelector('.button__countries-list').addEventListener('click', app.showCountriesList);
  },

};

document.addEventListener('DOMContentLoaded', app.init);
