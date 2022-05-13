// матрица смежности
const matrixMultiSide = [
    [0, 1, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 1],
];

const graphMultiSide = {
    a: ["b", "c"],
    b: ["a", "f"],
    c: ["a", "d", "e"],
    d: ["c", "f"],
    e: ["c", "f"],
    f: ["b", "d", "e", "g"],
    g: ["f"]
};

// матрица смежности
const matrixSingleSide = [
    [0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0],
];

const graphSingleSide = {
    a: ["b", "c"],
    b: ["f"],
    c: ["d", "e"],
    d: ["f"],
    e: ["f"],
    f: ["g"],
    g: []
};

let count = 0
// поиск в ширину
const breadthFirst = (graph, start, end) => {
    let queue = [];
    queue.push(start);

    while (queue.length > 0) {
        count += 1;
        const current = queue.shift();

        if (graph[current].includes(end)) {
            return true
        } else {
            queue = [...queue, ...graph[current]]
        }
    }

    return false;
};

console.log(breadthFirst(graphSingleSide, "a", "g"));
console.log(count);