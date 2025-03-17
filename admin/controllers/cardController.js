import Card from "../models/CardModel.js";

// GET all cards
export const getCards = async (req, res) => {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const cards = await Card.find()
                .skip((page - 1) * limit)
                .limit(limit);

        res.json(cards);
};

// POST a new card
export const createCard = async (req, res) => {
        console.log("REQ BODY:", req.body); // See incoming data

        try {
                const { title, image, price, miles, transition, model } = req.body;

                const newCard = new Card({ title, image, price, miles, transition, model });


                console.log("NEW CARD:", newCard);

                await newCard.save();

                res.status(201).json({ message: "Card created", data: newCard });
        } catch (error) {
                console.error(error);
                res.status(500).json({ message: "Failed to create card" });
        }

};