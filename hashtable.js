

class Hashtable {
    constructor(size = 50) {
       this.items = new Array(size)
    }

    _hash(value) {
        let hash = 0
        for(let i of value) {
            hash += i.charCodeAt(0)
        }
        return hash % this.items.length
    }

    set(key, value) {
        let index = this._hash(key)
        if(!this.items[index]) {
            this.items[index] = []
        }
        this.items[index].push([key, value])
        return this.items
    }

    get(key) {
        let index = this._hash(key)
        if(!this.items[index]) console.log("key not found")
            else {
              for(let [k, v] of this.items[index]) {
                    if(k == key) return v
                    else return undefined
              }
        }
    }

    remove(key) {
        let index = this._hash(key);
        if(!this.items[index]) {
            return "key not found";
        } else {
            for(let i = 0; i < this.items[index].length; i++) {
                if(this.items[index][i][0] === key) {
                    this.items[index].splice(i, 1);
                    return true; // Successfully removed
                }
            }
            return "key not found";
        }
    }

    has(key) {
        return this.get(key) !== undefined;
    }

    keys() {
        let keysArray = [];
        for(let bucket of this.items) {
            if(bucket) {
                for(let [key, value] of bucket) {
                    keysArray.push(key);
                }
            }
        }
        return keysArray;
    }

    values() {
        let valuesArray = [];
        for(let bucket of this.items) {
            if(bucket) {
                for(let [key, value] of bucket) {
                    valuesArray.push(value);
                }
            }
        }
        return valuesArray;
    }

}


const hashu = new Hashtable()

console.log(hashu)
console.log(hashu.set('2', 50))
console.log(hashu.get('2'))
console.log(hashu.keys())
console.log(hashu.values())
console.log(hashu.has('3'))


