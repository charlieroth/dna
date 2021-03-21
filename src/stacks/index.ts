export class Stack<T> {
  public capacity: number;
  public arr: T[]; 
  
  constructor(capacity: number) {
    this.capacity = capacity;
    this.arr = [];
  }

  public push(x: T): void | null {
    if (this.isFull()) return null;
    this.arr.push(x);
  }
  
  public pop(): T | null {
    if (this.isEmpty()) return null;
    return this.arr.pop();
  }

  public peek(): T | null {
    if (this.isEmpty()) return null;
    return this.arr[0];
  }

  public isEmpty(): boolean {
    return this.arr.length === 0;
  }

  public isFull(): boolean {
    if (this.isEmpty()) return false;
    if (this.arr.length === this.capacity) return true;
  }
}
