const Demo = require('./models/Demo');

app.get('/mongo', async (req, res) => {
    const doc = await Demo.create({ title: 'Hello Mongo', description: 'Dockerized Mongoose test' });
    res.json(doc);
});
