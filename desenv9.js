
function lista() {
    let head = null
    let idade = 0
    let length = 0

const Node = (nome, idade) => {
    return {
        nome,
        idade,
        next: null
    }
}
const add = (nome, idade) => {
    if (!head){
        head = Node(nome, idade)
        length++
        return head
    }
    let node = head
    while (node.next) {
        node = node.next
    }
    node.next = Node(nome, idade)
    length++
    return node.next
}

    return {
        length: () => length,
        add: (nome, idade) => add (nome, idade),
        print: () => console.log(head),
    }
}
const list = lista()
console.log(lista.length)
list.add ('Maria', '30')
list.add ('Renata', '20')
list.add ('João', '20')
list.print()