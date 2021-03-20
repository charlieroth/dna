export class Node<T> {
  public key: T;
  public next: Node<T> | null;
  public prev: Node<T> | null;

  constructor(key: T) {
    this.key = key;
    this.next = null;
    this.prev = null;
  }
}
