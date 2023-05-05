/*
http://localhost:3000/
*/

import express from "express"
const print = console.log

const Aluno1 = new Alunos(
    1,
    "Carlos Garcia",
    "Carlosteste@gmail.com",
    27,

    ["Skate", "Ciclismo", "Skate"]
)

const app = express()
const port = 3000

app.get("/", (req, resp) => {
    resp.json(Aluno2)
})
app.listen(port, () => {
    print(`API executando na porta ${port}`)
})
