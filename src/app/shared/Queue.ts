export class Queue<T> {
    _store: T[] = [];
    public get length() {
        return this._store.length;
    }
    
    push(val: T) {
        this._store.push(val);
    }
    pop(): T | undefined {
        return this._store.shift();
    }
    toString(): string {
        return this._store.toString();
    }
}