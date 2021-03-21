import tap from 'tap'
import { DoublyLinkedList } from '../../src/linked-lists/doubly';
import { Node } from '../../src/linked-lists/node';

function randInRange(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min) + min); 
}

function mockDLL(appendOnly: boolean = true, prependOnly: boolean = false, mix: boolean = false): [DoublyLinkedList<string>, number] {
  const list = new DoublyLinkedList<string>(); 
  const n = randInRange(10, 50) 
  for (let i = 1; i <= n; i++) {
    if (mix) {
      if (i % 2 === 0) {
        list.prepend(`node-${i}`);
      } else if (i % 3 === 0) {
        list.append(`node-${i}`);
      } else {
        list.append(`node-${i}`);
      }
    } else if (appendOnly) {
      list.append(`node-${i}`);
    } else if (prependOnly) {
      list.prepend(`node-${i}`);
    }
  }
  return [list, n];
}

tap.test('Prepend node to empty list', (t) => {
  const list = new DoublyLinkedList<string>();
  list.prepend('node1');
  t.equal(list.size(), 1);
  t.done();
});

tap.test('Append node to empty list', (t) => {
  const list = new DoublyLinkedList<string>();
  list.append('node1');
  t.equal(list.size(), 1);
  t.done();
});

tap.test('Prepend node to non-empty list', (t) => {
  const list = new DoublyLinkedList<string>();
  list.prepend('node1');
  list.prepend('node2');
  list.prepend('node3');
  list.prepend('node4');
  t.equal(list.size(), 4);
  t.done();
});

tap.test('Append node to non-empty list', (t) => {
  const list = new DoublyLinkedList<string>();
  list.append('node1');
  list.append('node2');
  list.append('node3');
  list.append('node4');
  t.equal(list.size(), 4);
  t.done();
});

tap.test('Add n nodes', (t) => {
  const [list, n] = mockDLL();
  t.equal(list.size(), n);
  t.done();
});

tap.test('Prints list', (t) => {
  const [list, _] = mockDLL();
  list.printList();
  t.done();
});

tap.test('Returns null if printing empty list', (t) => {
  const list = new DoublyLinkedList<string>();
  list.printList();
  t.done();
});

tap.test('Returns node if found in list', (t) => {
  const [list, n] = mockDLL();
  const randNode = randInRange(1, n);
  const node = list.search(`node-${randNode}`);
  t.ok(node);
  t.done();
});

tap.test('Returns null if node cannot be found in list', (t) => {
  const [list, n] = mockDLL();
  const node = list.search(`node-${n + 1}`);
  t.equal(node, null);
  t.done();
});

tap.test('Returns null if attempting to delete from empty list', (t) => {
  const list = new DoublyLinkedList<string>();
  const deletedNode = list.delete(new Node<string>('test'));
  t.equal(deletedNode, null);
  t.done();
});

tap.test('Can delete head node', (t) => {
  const [list, _] = mockDLL();
  const key = `node-${1}`;
  const head = list.search(key);
  const deletedNode = list.delete(head);
  t.ok(list.search(deletedNode.key) === null);
  t.done();
});

tap.test('Can delete tail node', (t) => {
  const [list, n] = mockDLL();
  const key = `node-${n}`;
  const tail = list.search(key);
  const deletedNode = list.delete(tail);
  t.ok(list.search(deletedNode.key) === null);
  t.done();
});

tap.test('Can delete "middle" node', (t) => {
  const [list, n] = mockDLL();
  const randNode = randInRange(3, n);
  const key = `node-${randNode}`;
  const middle = list.search(key);
  const deletedNode = list.delete(middle);
  t.ok(list.search(deletedNode.key) === null);
  t.done();
});
