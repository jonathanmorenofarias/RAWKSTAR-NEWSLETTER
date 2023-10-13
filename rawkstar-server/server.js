const express = require('express');
const app = express();
const database = require('./database');
const Poll = require('./models/Poll');
const PORT = process.env.PORT || 8000;

app.use(express.json());


app.get('/', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "true")
    res.send('API is running')
})

app.use((req, res, next) => {
    const time = new Date().getFullYear()
    console.log(req.method, req.url, time)
    next();
})
app.post ('/api/createpoll', async (req, res) => {
    const poll = new Poll ({
        month: req.body.month,
        vote: req.body.vote,
        other: req.body.other
    });

    try {
        const newPoll = await poll.save();
        res.status(201).json(newPoll);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});   



app.put('/api/update/octoberpoll', async (req, res) => {
    req.body.options.forEach(async (x) => {
        query = { month: 'october', "vote.option": x };
        const update = { $inc: { "vote.$.amount": 1 } };
        const result = await Poll.updateOne(query, update);
    })  
    if (req.body.other) {
        query = { month: 'october' };
        const update = { $push: { other: req.body.other } };
        const result = await Poll.updateOne(query, update);
    }
    res.status(200).json({ message: 'success' });
});

app.get('/api/month/:Month', async(req, res) => {
    query = { month: req.params.Month };
    const result = await Poll.findOne(query)

    if (result == null ) return res.status(404).json({ message: 'Poll not found' });

    const all = {
        vote: result.vote,
        other: result.other
    }
    
    res.json(all);
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});