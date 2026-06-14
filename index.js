const supportedLanguages = ["en", "sin"];

const selectedLanguage = process.argv[2];

if (!selectedLanguage) {
  console.log("Select a language");
  process.exit();
}

if (!supportedLanguages.includes(selectedLanguage)) {
  console.log("Unsupported language");
  process.exit();
}

const path = `./${selectedLanguage}.js`;

const { greet } = await import(path);

console.log(greet);
