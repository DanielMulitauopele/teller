import { Node } from './Node';
import { coinNames } from './CoinNames'

class Trie {
  constructor() {
    this.rootNode = new Node();
    this.currNode = null;
    this.prevNode = null;
    this.totalWords = 0;
    this.wordList = [];
  }

  insert(word) {
    this.totalWords++;
    let splitString = word.toLowerCase().split('');
    let currNode = this.rootNode;

    splitString.forEach((string, i) => {
      if (currNode.children[string]) {
        currNode = currNode.children[string];
      } else {
        currNode.children[string] = new Node(string);
        currNode = currNode.children[string];
      }

      if (i === splitString.length - 1) {
        currNode.ending = true;
        currNode.finalWord = word;
      }
    });
  }

  count() {
    return this.totalWords;
  }

  suggest(prefix) {
    let splitPrefix = prefix.toLowerCase().split('');
    let currNode = this.traverseTrie(splitPrefix);
    this.findLast(currNode.children);
    // console.log(this.wordList)
    return this.wordList;
  }

  populate(dictionary) {
    dictionary.forEach((word) => {
      this.insert(word.toLowerCase());
      console.log(this.totalWords)
    });
  }

  findLast(childrenObj) {
    let array = Object.keys(childrenObj);
    array.forEach((letter) => {
      let newNode = childrenObj[letter];
      if (newNode.ending === true) {
        this.wordList.push(newNode.finalWord);
      }
      this.findLast(newNode.children);
    });
  }

  traverseTrie(array) {
    let currNode = this.rootNode;
    array.forEach((letter) => {
      if (currNode.children[letter]) {
        currNode = currNode.children[letter];
      }
    });
    return currNode;
  }
}

export default Trie

