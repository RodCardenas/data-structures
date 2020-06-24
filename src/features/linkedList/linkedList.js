import Node from "./node";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(element) {
    const n = new Node(element);

    if (this.size === 0) {
      this.head = n;
      this.tail = n;
    } else {
      this.tail.next = n;
      this.tail = n;
    }

    this.size += 1;
  }

  traverse() {
    let nodes = [];

    let current = this.head;
    while (current !== null) {
      nodes.push(current.element);
      current = current.next;
    }
    return nodes;
  }
}
