const express = require("express")
const app = express()
const path = require("path")
const fs = require("fs")
const cors = require("cors")
const Gpio = require("onoff").Gpio

let buttonState = false

function loadJSON(filename) {
    const rawdata = fs.readFileSync(path.join(__dirname, filename))
    const data = JSON.parse(rawdata)
    return data
}

function saveJSON(json, filename) {
    const stringified = JSON.stringify(json, null, 4)
    fs.writeFile(path.join(__dirname, filename), stringified, (err) => {
        if (err) throw err
        console.log("Data written to file")
    })
}

// Reading input from terminal start
const port = parseInt(process.argv[2])
console.log(`${port} registered as server port`)
// Reading input from terminal end

app.get("/", (req, res) => {
    res.send("Hello world")
    buttonState = !buttonState
    console.log(buttonState)
})

app.get("/buttonState", (req, res) => {
    res.send(`${buttonState}`)
})

app.listen(port, () => console.log(`Listening on ${port}`))