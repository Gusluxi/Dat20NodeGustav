import { Router } from "express";
const router = Router();

import db from "../database/createConnection.js";

const players = [
    { id: 1, name:"Messi" },
    { id: 2, name:"Ronaldo" },
    { id: 3, name:"Poo" }
]

router.get("/api/players", async (req,res) => {
    const players = await db.all("SELECT * FROM players;")
    res.send({data: players})
})

router.post("/api/players", async (req, res) => {
    const { name } = req.body;
    const { changes } = await db.run(`INSERT INTO players (name) VALUES (?)`, [name]);
    res.send({ rowsAffected: changes })
})


export default router;