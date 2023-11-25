require('dotenv').config();
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

async function translator(str, language) {
    const api_uri = 'https://api.openai.com/v1/chat/completions';
    const API_KEY = process.env.api_key;
    let inputValue = str;
    let Translanguage = language;

    try {
        const req = await fetch(api_uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: "system", content: "You are a language translator. Translate the given text to the requested language." },
                    { role: "user", content: `${inputValue} | ${Translanguage}` },
                ],
                temperature: 1.0,
                top_p: 0.7,
                n: 1,
                stream: false,
                presence_penalty: 0,
                frequency_penalty: 0,
            })
        });

        if (!req.ok) {
            throw new Error(`HTTP error! Status: ${req.status}`);
        }

        const responseText = await req.text();

        const res = JSON.parse(responseText);
    
        const translatedContent = res.choices[0]?.message?.content;
        console.log("Translated Content:", translatedContent);
        
        return translatedContent;
    } catch (error) {
        console.log("Some error occurred while fetching data", error.message);
        if (error.response) {
            console.log("Response status:", error.response.status);
            console.log("Response data:", error.response.data);
        }

        throw error;
    }
}

translator("my name is shami",'French')
module.exports = translator;

//if the readme does not get properly displayed on the npm pkg site then
//delete the file copy the text before and open notepad paste there and then 
//save the file with same data , and then put that file in the code ,
//then push it to github