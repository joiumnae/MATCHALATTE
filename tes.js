const fs = require("fs")
const data = fs.readFileSync("./Xlesy.js", 'utf-8');

        // Menggunakan regex untuk mencocokkan "case"
        const caseMatches = data.match(/case\s+['"`]?\w+['"`]?\s*:/g);

        // Mengembalikan jumlah total "case"
        console.log(caseMatches)
      console.log(caseMatches ? caseMatches.length : 0)