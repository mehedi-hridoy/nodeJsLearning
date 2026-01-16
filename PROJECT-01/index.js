const express = require('express');
const users = require('./MOCK_DATA.json');
const app = express();

const PORT = process.env.PORT || 8000;
// dummy data from Mockaroo .. https://mockaroo.com/ it's an amazing site

// Middleware - plugin that helps to handle req and res
app.use(express.urlencoded({ extended: false }));
app.use(req,res,next => {
   console.log("Hello from Middleware");
   next();

})
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

app.get('/api/users/:id', (req,res) => {
     const id = parseInt(req.params.id);
     const user = users.find(u => u.id === id);
     if(user) {
        return res.json(user);
     } else {
        return res.status(404).json({message: 'User not found'});
     }
});

app.get('/users/:id', (req,res) => {
     const id = parseInt(req.params.id);
     const user = users.find(u => u.id === id);
     if(user) {
        return res.json(user);
     } else {
        return res.status(404).json({message: 'User not found'});
     }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});