const express = require('express');
const app = express();

app.use(express.static('public')); // Servindo a pasta "public"

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});