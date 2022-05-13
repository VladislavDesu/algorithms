const graphSingleSide = {
    a: ["b", "c"],
    b: ["f"],
    c: ["d", "e"],
    d: ["f"],
    e: ["f"],
    f: ["g"],
};

const w = {
    b: [2],
    c: [1],
    d: [6],
    e: [3],
    f: ["9", "8", 4],
    g: ["10", "9", 5]
};

const graph = {
    a: {b: 2, c: 1},
    b: {f: 7},
    c: {d: 5, e: 2},
    d: {f: 2},
    e: {f: 1},
    f: {g: 1},
    g: {}
};

const deijkstra = (graph, start) => {
    const costs = {};
    const processed = [];
    let neighbors;

    Object.keys(graph).forEach(node => {
        // node: a, b, c, d, e, f, g
        // start: a

        if (node !== start) {
            // value: 2, 1, undefined, undefined, undefined, undefined
            const value = graph[start][node];
            // costs: { b: 2, c: 1, d: 10000000, e: 10000000, f: 10000000, g: 10000000 }
            costs[node] = value || 10000000;
        }
    });

    // node: c
    let node = findNodeLowestCost(costs, processed);


    while (node) {
        // cost: 1
        const cost = costs[node];
        // neighbors: { d: 5, e: 2 }
        neighbors = graph[node];

        Object.keys(neighbors).forEach(neighbor => {
            // neighbor: d, e

            // newCost: 6, 3
            let newCost = cost + neighbors[neighbor];

            if (newCost < costs[neighbor]) {
                // costs[neighbor]: d, e = 6, 3
                costs[neighbor] = newCost
            }
        })

        processed.push(node);
        // costs: { b: 2, c: 1, d: 6, e: 3, f: 10000000, g: 10000000 }
        // processed: c
        node = findNodeLowestCost(costs, processed);
    }

    // { b: 2, c: 1, d: 6, e: 3, f: 4, g: 5 }
    return costs;
};

const findNodeLowestCost = (costs, processed) => {
    let lowestCost = 10000000;
    let lowestNode;

    // costs: { b: 2, c: 1, d: 10000000, e: 10000000, f: 10000000, g: 10000000 }
    Object.keys(costs).forEach(node => {
        // node: b, c, d, e, f, g

        // cost: 2, 1, 10000000, 10000000, 10000000, 10000000
        let cost = costs[node];

        if (cost < 10000000 && !processed.includes(node)) {
            lowestCost = cost;
            lowestNode = node;
        }
    });

    // lowestNode: c
    return lowestNode;
}

const result = deijkstra(graph, "a");
console.log(result);