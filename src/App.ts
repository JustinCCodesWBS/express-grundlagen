import express from 'express';
import { connectDB } from './db.ts';
import { listDrinks, getDrink, addDrink, deleteDrink } from './drinkHandlers.ts';

const app = express();
const port = Number(process.env.PORT ?? 3000);

app.use(express.json());

app.get('/drinks', listDrinks);
app.get('/drinks/:id', getDrink);
app.post('/drinks', addDrink);
app.delete('/drinks/:id', deleteDrink);

app.use((_req, res) => {
    res.status(404).send('Route nicht gefunden.');
});

await connectDB();

app.listen(port, 'localhost', () => {
    console.log('http://localhost:' + port);
});
