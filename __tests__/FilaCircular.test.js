import FilaCircular from '../src/FilaCircular'


let filaCircular

beforeEach(()=>{
    filaCircular = new FilaCircular(5)
})

test("Inicializar", ()=>{
    expect(filaCircular.size()).toBe(0)
})

test("Adicionando", ()=>{
    filaCircular.enqueue(5)
    expect(filaCircular.size()).toBe(1)
    expect(filaCircular.front()).toBe(5)
})

test("Overflow", ()=>{
    filaCircular.enqueue(1)
    filaCircular.enqueue(2)
    filaCircular.enqueue(3)
    filaCircular.enqueue(4)
    filaCircular.enqueue(5)

    expect(()=>{
        filaCircular.enqueue(6)
    }).toThrowError("Queue is full")
})

test("Underflow", ()=>{
    expect(()=>{
        filaCircular.dequeue()
    }).toThrowError("Queue is empty")
})

test("Comportamento", ()=>{
    filaCircular.enqueue(1)
    filaCircular.enqueue(2)
    filaCircular.enqueue(3)
    filaCircular.enqueue(4)
    filaCircular.enqueue(5)
    expect(filaCircular.dequeue()).toBe(1)
})

test("Clear", ()=> {
    filaCircular.enqueue(1)
    filaCircular.enqueue(2)
    filaCircular.enqueue(3)
    filaCircular.enqueue(4)
    filaCircular.enqueue(5)
    filaCircular.clear()
    expect(()=>{
        filaCircular.dequeue()
    }).toThrowError("Queue is empty")
})

test("Size", ()=> {
    filaCircular.enqueue(1)
    filaCircular.enqueue(2)
    filaCircular.enqueue(3)
    filaCircular.enqueue(4)
    filaCircular.enqueue(5)
    filaCircular.clear()
    expect(filaCircular.size()).toBe(0)
})
/*
test("VaiDaCerto", ()=>{
    filaCircular.enqueue("A")
    filaCircular.enqueue("T")
    filaCircular.enqueue("A")
    filaCircular.enqueue("P")
    filaCircular.enqueue("O")
    
    expect(()=>{
        filaCircular.enqueue("B")
    }).toThrowError("Queue is full")

    expect(filaCircular.size()).toBe(5)
    expect(filaCircular.dequeue()).toBe("A")
    expect(filaCircular.dequeue()).toBe("T")

    expect(filaCircular.size()).toBe(3)

    filaCircular.enqueue("L")
    expect(filaCircular.size()).toBe(4)
    filaCircular.enqueue("Z")
    expect(filaCircular.size()).toBe(5)
    expect(()=>{
        filaCircular.enqueue("ASDASD")
    }).toThrowError("Queue is full")

    filaCircular.toString()
})*/