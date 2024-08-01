class Node {
    constructor(key, value, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(key, value) {
        const newNode = new Node(key, value);
        newNode.next = this.head;
        this.head = newNode;
    }

    find(key) {
        let current = this.head;
        while (current) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }
        return undefined;
    }

    remove(key) {
        if (!this.head) {
            return false;
        }
        if (this.head.key === key) {
            this.head = this.head.next;
            return true;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.key === key) {
                current.next = current.next.next;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    keys() {
        let keysArray = [];
        let current = this.head;
        while (current) {
            keysArray.push(current.key);
            current = current.next;
        }
        return keysArray;
    }

    values() {
        let valuesArray = [];
        let current = this.head;
        while (current) {
            valuesArray.push(current.value);
            current = current.next;
        }
        return valuesArray;
    }
}

class Hashtable {
    constructor(size = 50) {
        this.items = new Array(size).fill(null).map(() => new LinkedList());
    }

    _hash(value) {
        let hash = 0;
        for (let i of value) {
            hash += i.charCodeAt(0);
        }
        return hash % this.items.length;
    }

    set(key, value) {
        let index = this._hash(key);
        this.items[index].insert(key, value);
        return this.items;
    }

    get(key) {
        let index = this._hash(key);
        return this.items[index].find(key);
    }

    remove(key) {
        let index = this._hash(key);
        return this.items[index].remove(key) ? "key removed" : "key not found";
    }

    has(key) {
        return this.get(key) !== undefined;
    }

    keys() {
        let keysArray = [];
        for (let bucket of this.items) {
            keysArray = keysArray.concat(bucket.keys());
        }
        return keysArray;
    }

    values() {
        let valuesArray = [];
        for (let bucket of this.items) {
            valuesArray = valuesArray.concat(bucket.values());
        }
        return valuesArray;
    }
}

// Example usage
const hashu = new Hashtable();

console.log(hashu.set('2', 50));
console.log(hashu.get('2'));
console.log(hashu.keys());
console.log(hashu.values());
console.log(hashu.has('3'));
console.log(hashu.set('3', 30));
console.log(hashu.keys());
console.log(hashu.values());
console.log(hashu.remove('2'));
console.log(hashu.get('2'));
