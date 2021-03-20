class Node {
  public key: string
  public next: Node

  constructor(key: string, next: Node) {
    this.key = key;
    this.next = next;
  }
}

export class DoublyLinkedList {
  public head: Node;
  public tail: Node;
  public numNodes: number;

  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  public search(k: string) {

  }
  
  public insert(k: string) {

  }
  
  public deleteFromHead(x: Node) {

  }
  
  public deleteFromTail(x: Node) {

  }
}
