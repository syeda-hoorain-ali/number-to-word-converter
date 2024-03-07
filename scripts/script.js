"use strict";
const form = document.querySelector('form');
const userInput = document.getElementById('userInput');
const output = document.getElementById('output');
const numToWord = async (number) => {
    const URL = 'https://numbers-to-words1.p.rapidapi.com/api/converter/';
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': 'f731f0142amshb3b2e2fb51e77c9p1e85c7jsne75bf7a34852',
                // 'X-RapidAPI-Host': 'numbers-to-words1.p.rapidapi.com'
            },
            body: JSON.stringify({
                number: number,
                language: 'en',
            })
        });
        const data = await response.json();
        return data.message;
    }
    catch (error) {
        console.error(error);
    }
};
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //^ Checking that user input is not empty
    if (!userInput.value) {
        output.innerHTML = output.innerHTML;
    }
    else {
        //^ Convert string to number and call the function 
        let num = parseFloat(userInput.value);
        numToWord(num)
            .then((word) => {
            output.innerHTML = word;
        }).catch((error) => {
            console.log("error", error);
            output.innerHTML = "TypeError: Failed to fetch";
        });
    }
});
