import { Node } from './node';

export class SinglyLinkedList<T> {
  public head: Node<T> | null;
  public tail: Node<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  public prepend(k: T): Node<T> {
    const node = new Node(k);
    if (!this.head) {
      // If list is empty, head is new node;
      this.head = node;
      this.tail = node;
    } else if (this.size() === 1) {
      node.next = this.tail;
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    return node;
  }
  
  public append(k: T): Node<T> {
    const node = new Node(k);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.next = null;
      this.tail = node;
      this.tail.next = null;
    }
    return node;
  }

  public search(k: T): Node<T> | null {
    for (const n of this.nodes()) {
      if (n.key === k) return n;
    }
    return null;
  }
  
  public delete(x: Node<T>): Node<T> | null {
    // If empty list
    if (!this.head) return null;

    // If x is head
    if (this.head.key === x.key) {
      this.head = this.head.next; 
      return x;
    }

    // If x is tail
    const prev = this.findPrevious(x);
    if (this.tail.key === x.key) {
      prev.next = null;
      this.tail = prev;
      return x;
    }

    // If x is in middle
    prev.next = x.next;
    return x;
  }
  
  public size(): number {
    let s = 0;
    for (const _ of this.nodes()) { s++ }
    return s;
  }

  public printList(): void {
    if (!this.head) return;

    let printStr = "";
    for (const n of this.nodes()) {
      printStr += `"${n.key}"->`;
    }
    console.log(printStr);
  }

  private *nodes(): Generator<Node<T>, void, unknown> {
    let curr = this.head;
    while (curr !== null) {
      yield curr;
      curr = curr.next;
    }
  }
  
  private findPrevious(x: Node<T>): Node<T> | null {
    for (const n of this.nodes()) {
      if (n.next.key === x.key) {
        return n;
      }
    }
  }
}
