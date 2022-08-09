const express = require("express");
const listRouter = require('./routes/lists');
const ticketsRouter = require('./routes/tickets');
const waitingsRouter = require('./routes/waitings');

const app = express();

app.use("/waitings", waitingsRouter);
app.use("/tickets", ticketsRouter);
app.use("/lists", listRouter);
app.use(express.json());

app.get('/', (req, res) => {
    //사용자 ID 발급
    const mkID = Math.floor(Math.random() * 100000);
    
    res.redirect(`/lists/${mkID}`)
})

app.use((req, res, next) => {
    res.status(404);
    res.send({
        result: 'fail',
        error: `Page not found ${req.path}`
    });
});

app.use((err, req, res, next) => {
    res.status(500);

    res.json({
        result: 'fail',
        error: err.message,
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);
//브랜치용