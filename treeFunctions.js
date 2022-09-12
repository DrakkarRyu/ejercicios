function tree(rootValue) {
    return [rootValue, [], []];
}

function insertLeft(root, value) {
    if (root[1].length === 0) {
        const leftTree = tree(value);
        root[1] = leftTree;
    } else {
        const currentData = root[1];
        const leftTree = tree(value);
        leftTree[1] = currentData;
        root[1] = leftTree;
    }
    return root;
}

function insertRight(root, value) {
    if (root[1].length === 0) {
        const rightTree = tree(value);
        root[1] = rightTree;
    } else {
        const currentData = root[1];
        const rightTree = tree(value);
        rightTree[1] = currentData;
        root[1] = rightTree;
    }
    return root;
}
