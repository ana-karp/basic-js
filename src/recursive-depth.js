module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if(arr.every(a => !Array.isArray(a))) {
            return 1;
        } else return 1 + this.calculateDepth(arr.flat());
    }
};