const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then (res => res.json())
    .then (data => displayQuotes(data))
}

const displayQuotes = bani => {
    console.log(bani);
    const questElement = document.getElementById('quote');
    questElement.innerText = bani.quote; //because quote is an object Ex- {quote: "I give up drinking every week"}
}