const express = require('express');
const users = require('./MOCK_DATA.json');
const app = express();

const PORT = process.env.PORT || 8000;
// dummy data from Mockaroo .. https://mockaroo.com/ it's an amazing site
// Routes
app.get('/api/users', (req,res) => {
    return res.json(users);
})

app.get("/users",(req,res) => {
    const html = `
    <ul>
     ${users.map((user) => `<li>${user.first_name}</li>`)}
    </ul>

    `;
    res.send(html);
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});