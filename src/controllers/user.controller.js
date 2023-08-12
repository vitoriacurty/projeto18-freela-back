import { db } from "../database/database.connection.js"
import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"

export async function signUp(req, res) {
    const { name, cpf, phone, email, password } = req.body

    try {
        const user = await db.query(`SELECT * FROM users WHERE cpf=$1;`, [cpf])
        if (user.rowCount == !0) return res.sendStatus(409)

        const hash = bcrypt.hashSync(password, 10)
        await db.query(`INSERT INTO users (name, cpf, phone, email, password) VALUES ($1, $2, $3, $4, $5);`,
            [name, cpf, phone, email, hash]
        )
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }

}

export async function signIn(req, res) {
    const { email, password } = req.body

    try {
        const user = await db.query(`SELECT * FROM users WHERE email=$1;`, [email])
        if (user.rowCount === 0) return res.sendStatus(401)

        const correctPassword = bcrypt.compareSync(password, user.rows[0].password)
        if (!correctPassword) return res.sendStatus(401)

        const token = uuid()
        await db.query(`INSERT INTO sessions ("userId", token) VALUES ($1, $2);`,
            [user.rows[0].id, token]
        )

        res.status(200).send({ token })
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getUser(req, res) {
    res.send("getuser")
}