const loadCountries = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then (res => res.json())
    .then (data => displayCountries(data))
}
loadCountries();
 displayCountries = countries =>{
    // for (const country of countries){
    //     console.log(country.name);
    // }
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country =>{  // ( forEach same as for loop ) কোন কিছু রির্টান না করতে হলে আমরা forEach use করতে পারি। 
        const div = document.createElement('div')
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Details</button> 
        ` //loadCountryByName er parameter er mddhe single quotation dite hbe bcz  quotation chara dile oi parameter er nam a kono variable declr korta hbe jar value shay pass krbe 
        div.classList.add('country')
        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        countriesDiv.appendChild(div);
        
    });
}
const loadCountryByName = name => {
    const url =`https://restcountries.eu/rest/v2/name/${name}
    `;
    fetch(url)
    .then(res => res.json())
    .then(data => countryDetails(data[0])); // 0 index a country details ache
}

const countryDetails = details => {
    const countryDiv = document.getElementById('country-details')
    countryDiv.innerHTML = `
    <h1>${details.name}</h1>
    <p>Population: ${details.population}  </p>
    <img width="200px" src="${details.flag}">
    `;
    


}