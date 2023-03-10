const express = require('express');
const moment = require('moment');
const cors = require('cors')

const authRouter = require('./routes/api/auth');
const contactsRouter = require('./routes/api/contacts');

const app = express();

app.use(cors());
app.use(express.json())
app.use('/api/auth', authRouter);
app.use('/api/contacts', contactsRouter); 

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Server error' } = err;
    res.status(status).json({ message });
})

module.exports = app;