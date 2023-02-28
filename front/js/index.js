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
      const li = document.createElement('li');
      const oneCountry = document.createElement('a');
      oneCountry.textContent = country.name;
      oneCountry.classList.add('country-name');
      oneCountry.addEventListener('click', () => app.showCountry(country.name));
      li.appendChild(oneCountry);
      countriesList.appendChild(li);
    });
    const addCountryButton = document.createElement('a');
    addCountryButton.classList.add('button__add--country');
    addCountryButton.setAttribute('role', 'button');
    addCountryButton.setAttribute('href', '#');
    addCountryButton.innerText = 'ajouter un pays';
    addCountryButton.addEventListener('click', app.showAddCountryForm);
    mainDiv.appendChild(addCountryButton);
  },

  async showCountry(countryName) {
    const mainDiv = document.querySelector('.main-div');
    mainDiv.innerHTML = '';
    const response = await fetch(`http://localhost:4000/collection/countries/${countryName}`);
    const country = await response.json();
    console.log(country);
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

  showAddCountryForm() {
    const mainDiv = document.querySelector('.main-div');
    mainDiv.innerHTML = '';
    const countryForm = {
      html:
      `<form class='add-country'>
        <label for="name">
        <input type="text" id="name" name="name" placeholder="Nom" value="Test" >
        </label>

        <label for="capitalCity">
        <input type="text" id="capitalCity" name="capitalCity" placeholder="Capitale" value="test" >
        </label>

        <label for="continent">
        <input type="text" id="continent" name="continent" placeholder="Continent" value="test" >
        </label>

        <label for="population">
        <input type="text" id="population" name="population" placeholder="Population" value="test" >
        </label>

        <label for="officialLanguage">
        <input type="text" id="officialLanguage" name="officialLanguage" placeholder="Langue" value="test" >
        </label>

        <button type="submit">Valider</button>
      </form>
      `,
    };
    mainDiv.innerHTML = countryForm.html;
    const form = document.querySelector('.add-country');
    form.addEventListener('submit', (event) => app.addCountry(event, form));
  },

  async addCountry(event, form) {
    event.preventDefault();
    const formData = new FormData(form);
    const formDataToObject = Object.fromEntries(formData.entries());
    const formDataJson = JSON.stringify(formDataToObject);
    const response = await fetch('http://localhost:4000/collection/countries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formDataJson,
    });
    console.log(response.json());
  },

  modifyCountry() {
  },

  // Event list
  listeners() {
    // Display countries list
    document.querySelector('.button__countries-list').addEventListener('click', app.showCountriesList);
  },

};

document.addEventListener('DOMContentLoaded', app.init);

//! CAPITALIZE LES ENTREES 

;:;: 
