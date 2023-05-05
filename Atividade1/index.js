/*
http://localhost:3000
http://localhost:3000/alunos
*/

import express from "express"
const print = console.log
import Aluno from "Alunos.js"

const Aluno1 = new Alunos(
    1,
    "Carlos Garcia",
    "Carlosteste@gmail.com",
    27,

    ["Skate", "Ciclismo", "Skate"]
)
const Aluno2 = new Alunos(3, "Lais Cristina", "laisteste@gmail.com", 32, [
    "Tênis",
    "Costurar",
    "Caminhar",
])

const Aluno3 = new Alunos(2, "Lucas Jesus", "Lucasteste@gmail.com", 18, [
    "Dançar",
    "correr",
])

const app = express()
const port = 3000

app.get("/", (req, resp) => {
    resp.json(Aluno2)
})
app.get("/alunos", (req, resp) => {
    resp.json([Aluno1, Aluno2, Aluno3])
})
app.listen(port, () => {
    print(`API executando na porta ${port}`)
})
