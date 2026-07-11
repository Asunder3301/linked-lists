import { Node } from "./node.js";

class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    this.head = new Node(value, this.head);
  }

  append(value) {
    const newNode = new Node(value);

    //Handles empty list
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let temp = this.head;
    //Traverses list
    while (temp.nextNode) {
      temp = temp.nextNode;
    }

    temp.nextNode = newNode;
  }
}
