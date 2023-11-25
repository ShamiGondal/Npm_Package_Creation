# Introduction

A simple npm package for AI-based translation.

## Installation

You can install this package using npm:

```bash
npm install @shamigondal/ai-translator
```
## Usage

```node js
const { translator } = require('@shamigondal/ai-translator');

// Example usage
const textToTranslate = 'Hello, how are you?';
const targetLanguage = 'es'; // Replace with the target language code (e.g., 'es' for Spanish)

translator(textToTranslate, targetLanguage)
  .then((translatedText) => {
    console.log(`Original: ${textToTranslate}`);
    console.log(`Translated: ${translatedText}`);
  })
  .catch((error) => {
    console.error('Translation error:', error.message);
  });

```

## API
- Make sure to replace 'es' with the desired language code. You can find language codes in the ISO 639-1 standard.
translate(text, targetLanguage)
- Translate the input text to the specified target language.

- text (string): The text to be translated.
targetLanguage (string): The language code of the target language.
Returns a Promise that resolves to the translated text.

# License
- This project is licensed under the MIT License - see the LICENSE file for details.

# Author
- [@ShamiGondal](https://github.com/ShamiGondal)
