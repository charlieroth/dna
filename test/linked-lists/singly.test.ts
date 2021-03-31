import tap from 'tap'
import { SinglyLinkedList } from '../../src/linked-lists/singly';
import { Node } from '../../src/linked-lists/node';

function randInRange(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min) + min); 
}

function mockSLL(
  appendOnly: boolean = false,
  prependOnly: boolean = false,
  mix: boolean = true
): [SinglyLinkedList<string>, number] {
  const list = new SinglyLinkedList<string>(); 
  const N = randInRange(10, 50) 
  for (let i = 1; i <= N; i++) {
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
  return [list, N];
}

tap.test('Can prepend 1 node', (t) => {
  const list = new SinglyLinkedList<string>(); 
  list.prepend('charlie');
  t.equal(list.size(), 1);
  t.done();
});

tap.test('Can append/prepend N nodes', (t) => {
  const [list, N] = mockSLL();
  t.equal(list.size(), N);
  t.done();
});

tap.test('Can print list', (t) => {
  const [list, _] = mockSLL();
  list.printList();
  t.done();
});

tap.test("Can't print empty list", (t) => {
  const list = new SinglyLinkedList<string>();
  list.printList();
  t.done();
});

tap.test('Can find a node in list?', (t) => {
  const [list, N] = mockSLL();
  const randNode = randInRange(1, N);
  const node = list.search(`node-${randNode}`);
  t.ok(node);
  t.done();
});

tap.test("Can't find a node in list?", (t) => {
  const [list, N] = mockSLL();
  const node = list.search(`node-${N + 1}`);
  t.equal(node, null);
  t.done();
});

tap.test("Can't delete from empty list", (t) => {
  const list = new SinglyLinkedList<string>();
  const deletedNode = list.delete(new Node<string>('test'));
  t.equal(deletedNode, null);
  t.done();
});

tap.test('Can delete head node?', (t) => {
  const [list, _] = mockSLL(true, false, false);
  const key = `node-${1}`;
  const head = list.search(key);
  const deletedNode = list.delete(head);
  t.ok(list.search(deletedNode.key) === null);
  t.done();
});

tap.test('Can delete tail node?', (t) => {
  const [list, N] = mockSLL(true, false, false);
  const key = `node-${N}`;
  const tail = list.search(key);
  const deletedNode = list.delete(tail);
  t.ok(list.search(deletedNode.key) === null);
  t.done();
});

tap.test("Can delete 'middle' node?", (t) => {
  const [list, N] = mockSLL();
  const randNode = randInRange(1, N);
  const key = `node-${randNode}`;
  const middle = list.search(key);
  const deletedNode = list.delete(middle);
  t.ok(list.search(deletedNode.key) === null);
  t.done();
});
