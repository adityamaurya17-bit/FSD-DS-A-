const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (images, CSS, HTML) from public folder
app.use(express.static(path.join(__dirname, "public")));

// Root route: serve bus.html inside public
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "bus.html"));
});

// Handle form submission
app.post("/book", (req, res) => {
    const { username, age, aadhar, city, date, busType, seats } = req.body;

    let pricePerSeat = busType === "AC" ? 2000 : 1000;
    let totalCost = pricePerSeat * parseInt(seats);

    res.send(`
        <div style="border:2px solid black; padding:20px; width:400px; background:#f0f0f0;">
            <h2>Hello ${username} 👋</h2>
            <p><b>Age:</b> ${age}</p>
            <p><b>Aadhar:</b> ${aadhar}</p>
            <p><b>City:</b> ${city}</p>
            <p><b>Date:</b> ${date}</p>
            <p><b>Bus Type:</b> ${busType}</p>
            <p><b>Seats:</b> ${seats}</p>
            <h3>Total Cost: ₹${totalCost}</h3>
        </div>
    `);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
