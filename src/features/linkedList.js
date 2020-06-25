class LinkedListNode {
  constructor(element) {
    this.next = null;
    this.element = element;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(element) {
    const n = new LinkedListNode(element);

    if (this.size === 0) {
      this.head = n;
      this.tail = n;
    } else {
      this.tail.next = n;
      this.tail = n;
    }

    this.size += 1;
  }

  remove(element) {
    if (this.size === 0) {
      return;
    } else {
      if (this.head.element === element) {
        this.head = this.head.next;
        this.size -= 1;
        if (this.size === 0) {
          this.head = this.tail = null;
        } else if (this.size === 1) {
          this.head = this.tail;
        }
        return;
      } else {
        let prev = this.head;
        let current = this.head;
        while (current.element !== element && current.next) {
          prev = current;
          current = current.next;
        }

        if (current.element === element) {
          prev.next = current.next;
          this.size -= 1;
        }
      }
    }

    return;
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
