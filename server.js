const express = require('express');
const exphbs = require('express-handlebars');;
const app = express();
const port = 3000;

app.use(express.static("public"));
// Configure `express-handlebars`
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Define your route and render the template
app.get('/', (req, res) => {
  const data = { name: 'John' };

  // Render the Handlebars template and send it as the response
  res.render('index', data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});