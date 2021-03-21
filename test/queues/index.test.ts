import tap from 'tap'
import { Queue } from '../../src/queues/';

tap.test('Can enqueue element', (t) => {
  const q = new Queue<number>(5); 
  q.enqueue(1);
  t.equal(q.dequeue(), 1);
  t.done();
});

tap.test('Cannot enqueue element into full queue', (t) => {
  const q = new Queue<number>(3); 
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  const extraEnqueueResult = q.enqueue(4);
  t.equal(extraEnqueueResult, null);
  t.done();
});

tap.test('Can dequeue element', (t) => {
  const q = new Queue<number>(5); 
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  t.equal(q.dequeue(), 1);
  t.done();
});

tap.test('Cannot dequeue element from empty queue', (t) => {
  const q = new Queue<number>(3); 
  t.equal(q.dequeue(), null);
  t.done();
});

