class CustomArray {
    constructor(size = 0) {
        this.size = size;
        this._array = [];
        this.fill(null);
    }

    fill(valueToFill = null) {
        for (let i = 0; i < this.size; i++) {
            this._array[i] = valueToFill;
        }
    };

    push(value) {
        let size = this.size;
        this._array[size] = value;
        this.size++;
        return value;
    };

    pop() {
        if (this.size > 0) {
            this.size--;
            const deletedValue = this._array[this.size - 1];
            this._array.length = this.size;
            return deletedValue;
        }
    };

    get display() {
        return this._array;
    }
}

const _arr = new CustomArray(10);