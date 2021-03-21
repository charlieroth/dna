import tap from 'tap'
import { Queue } from '../../src/queues/';

tap.test('Can enqueue a element onto stack', (t) => {
  const q = new Queue<number>(5); 
  q.enqueue(1);
  t.equal(q.dequeue(), 1);
  t.done();
});
