export class Node {
  constructor(letter) {
    this.value = letter;
    this.children = {};
    this.ending = false;
    this.finalWord = null;
  }
}