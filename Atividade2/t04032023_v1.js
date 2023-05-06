import PromptSync from "prompt-sync"

const task = PromptSync() //função para prompt sync

const qtdN = Number(task("Digite a quantidade números para as operações!  "))
const op = task(`Qual operação matemática será utilizada? 
[+]Adição 
[-] Subtração
[*] Multiplicação
[/] Divisão  `)
//ou console.log (`Operações [+]Adição
//[-] Subtração
//[*] Multiplicação
//[/] Divisão )
let ans = Number(0)
switch (op) {
    case "+":
        for (let i = 0; i < qtdN; i++) {
            let vlr = Number(task("Digite o número " + (i + 1) + ": "))
            ans = ans + vlr
        }
        console.log(`O valor da soma é: ${ans}`)
        break
    case "-":
        for (let i = 0; i < qtdN; i++) {
            let vlr = Number(task("Digite o número " + (i + 1) + ": "))
            if (i == 0) ans = vlr
            else ans = ans - vlr
        }
        console.log(`O valor da subtração é: ${ans}`)
        break
    case "*":
        for (let i = 0; i < qtdN; i++) {
            let vlr = Number(task("Digite o número " + (i + 1) + ": "))
            if (i == 0) ans = vlr
            else ans = ans * vlr
        }
        console.log(`O valor da multiplicação é: ${ans}`)
        break
    case "/":
        let vlr
        for (let i = 0; i < qtdN; i++) {
            vlr = Number(task("Digite o número " + (i + 1) + ": "))
            if (i == 0) ans = vlr
            else if (vlr == 0) {
                console.log("Valor não pode ser zero para divisão!")
                i = qtdN
            } else ans = ans / vlr
        }
        if (vlr != 0) {
            console.log(`O valor da Divisão é: ${ans.toFixed(2)}`)
        }
        break

    default:
        console.log(
            "Operação não válida!! Retorne e digite uma operação válida!"
        )
        break
}
