import { Schema, model } from 'mongoose';

const drinkSchema = new Schema({
    name: { type: String, required: true },
});

export const Drink = model('Drink', drinkSchema, 'drinks');
