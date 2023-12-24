const fs = require('fs').promises

async function readConcurrently() {
    try {
        const [file1Contents, file2Contents] = await Promise.all([
            fs.readFile('cities.csv', 'utf-8'),
            fs.readFile('example.md', 'utf-8')
        ])

        console.log("Cities Data:", file1Contents)
        console.log("Markdown Example:", file2Contents)
    } catch(error) {
        console.log(error.message)
    }
   
}

readConcurrently()