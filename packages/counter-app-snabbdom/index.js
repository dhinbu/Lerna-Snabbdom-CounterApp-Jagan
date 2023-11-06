import { init } from '../../node_modules/snabbdom/dist';
import h from '../../node_modules/snabbdom/dist';

const patch = init([]);

let count = 0;

function didMount(count) {
  return h('div', [
    h('h1', `Counter: ${count}`),
    h('button', { on: { click: Inc } }, 'Add'),
  ]);
}

function Inc() {
  count++;
  update();
}

function update() {
  const didUpdate = didMount(count);
  patch(oldVNode, didUpdate);
  oldVNode = didUpdate;
}

let oldVNode = didMount(count);

const root = document.getElementById('root');
patch(root, didMount());
