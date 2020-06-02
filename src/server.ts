import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    console.log('listagem de usuários');

    res.json([
        'Diego',
        'Cleiton',
        'Robson',
        'Vitor',
        'Daniel',
    ]);
});

app.listen(3333);
