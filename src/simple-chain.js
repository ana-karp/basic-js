const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    if (position == '' || typeof (position) !== 'number' || this.chain[position] === undefined) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let finishedChain = '' 
    this.chain.forEach((el, i) => {
      finishedChain += (i < this.chain.length - 1) ? `( ${el} )~~` : `( ${el} )`;
    });
    this.chain = [];
    return finishedChain;
  }
};

module.exports = chainMaker;
