var inputText = document.querySelector('#input-text');
var outputText = document.querySelector('#output-text');
var buttonTranslate = document.querySelector('#btn-translate');

var inputText1 = document.querySelector('#input-text-1');
var outputText1 = document.querySelector('#output-text-1');
var buttonTranslate1 = document.querySelector('#btn-translate-1');

const apiUrl = 'https://api.mymemory.translated.net/get';

// Generic translate function
function translateText(text, sourceLang, targetLang, outputElement) {
    const url = `${apiUrl}?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}&key=075d1867f087491718fc`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data); // Debug: see full response
        if (data.responseData) {
            outputElement.innerText = data.responseData.translatedText || 'No translation found';
        } else {
            outputElement.innerText = 'Translation failed';
        }
    })
    .catch(err => {
        alert('Error occurred during translation!');
        console.error('Error:', err);
    });
}

function clickHandler() {
    translateText(inputText.value.trim(), 'en', 'ta', outputText);
}

function clickHandler1() {
    translateText(inputText1.value.trim(), 'ta', 'en', outputText1);
}

buttonTranslate.addEventListener("click", clickHandler);
buttonTranslate1.addEventListener("click", clickHandler1);
