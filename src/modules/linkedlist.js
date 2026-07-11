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

  size() {
    if (!this.head) {
      return 0;
    }

    let temp = this.head;
    let counter = 0;

    //Counts every node in the list
    while (temp) {
      counter++;
      temp = temp.nextNode;
    }

    return counter;
  }

  head() {
    if (!this.head) {
      return;
    }

    return this.head.value;
  }

  tail() {
    if (!this.head) {
      return;
    }

    let temp = this.head;
    //Traverses list
    while (temp.nextNode) {
      temp = temp.nextNode;
    }

    return temp.value;
  }

  pop() {
    if (!this.head) {
      return;
    }

    const removed = this.head.value;
    this.head = this.head.newNode;

    return removed;
  }

  contains(value) {
    let temp = this.head;
    //Traverses list
    while (temp && temp.value !== value) {
      temp = temp.nextNode;
    }

    if (temp) {
      return true;
    }
    return false;
  }

  findIndex(value) {
    let temp = this.head;
    let index = 0;
    //Traverses list
    while (temp && temp.value !== value) {
      index++;
      temp = temp.nextNode;
    }

    if (temp) {
      return index;
    }
    return -1;
  }
}
