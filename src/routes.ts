import express from 'express';
const routes = express.Router();

routes.get('/', (req,res) => {
    res.write('<h1>AGDA</h1>')
});


module.exports = routes;