export class Queue<T> {
  public capacity: number;
  public arr: T[];

  constructor(capacity: number) {
    this.capacity = capacity;
    this.arr = [];
  }

  public enqueue(x: T): void | null {
    if (this.isFull()) return null;
    this.arr.unshift(x);
  }

  public dequeue(): T | null {
    if (this.isEmpty()) return null;
    return this.arr.pop(); 
  }

  public isEmpty(): boolean {
    return this.arr.length === 0;
  }

  public isFull(): boolean {
    if (this.isEmpty()) return false;
    if (this.arr.length === this.capacity) return true;
    return false;
  }
}
