import tap from 'tap'
import { Stack } from '../../src/stacks/';

tap.test('Can push a element onto stack', (t) => {
  const stack = new Stack<number>(10); 
  stack.push(1);
  t.equal(stack.peek(), 1);
  t.done();
});

tap.test('Cannot push a element onto full stack', (t) => {
  const stack = new Stack<number>(3); 
  stack.push(1);
  stack.push(2);
  stack.push(3);
  const extraPushResult = stack.push(4);
  t.equal(extraPushResult, null);
  t.done();
});

tap.test('Can pop an element from stack', (t) => {
  const stack = new Stack<number>(10); 
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  t.equal(stack.pop(), 4);
  t.done();
});

tap.test('Cannot pop from an empty stack', (t) => {
  const stack = new Stack<number>(10); 
  t.equal(stack.pop(), null);
  t.done();
});

tap.test('Can peek at top element in stack', (t) => {
  const stack = new Stack<number>(10); 
  stack.push(1);
  stack.push(2);
  t.equal(stack.peek(), 2);
  t.done();
});

tap.test('Cannot peek at empty stack', (t) => {
  const stack = new Stack<number>(10); 
  t.equal(stack.peek(), null);
  t.done();
});

tap.test('isEmpty() returns true if list is empty', (t) => {
  const stack = new Stack<number>(10); 
  t.equal(stack.isEmpty(), true);
  t.done();
});

tap.test('isEmpty() returns false if list is not empty', (t) => {
  const stack = new Stack<number>(10);
  stack.push(1);
  t.equal(stack.isEmpty(), false);
  t.done();
});

tap.test('isFull() returns true if length of stack equals capacity', (t) => {
  const stack = new Stack<number>(3);
  stack.push(1);
  stack.push(2);
  stack.push(3);
  t.equal(stack.isFull(), true);
  t.done();
});

tap.test('isFull() returns false if length of stack does not equal capacity', (t) => {
  const stack = new Stack<number>(3);
  stack.push(1);
  stack.push(2);
  t.equal(stack.isFull(), false);
  t.done();
});

tap.test('isFull() returns false if stack is empty', (t) => {
  const stack = new Stack<number>(3);
  stack.push(1);
  stack.push(2);
  t.equal(stack.isFull(), false);
  t.done();
});
