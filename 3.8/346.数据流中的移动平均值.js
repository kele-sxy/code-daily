var MovingAverage = /** @class */ (function () {
    function MovingAverage(size) {
        this.queue = [];
        this.sum = 0;
        this.size = size;
    }
    MovingAverage.prototype.next = function (val) {
        var shiftVal = 0;
        if (this.queue.length === this.size) {
            shiftVal = this.queue.shift();
        }
        this.queue.push(val);
        var len = this.queue.length;
        this.sum = this.sum + val - shiftVal;
        return this.sum / len;
    };
    return MovingAverage;
}());


// leetcode能调试，本地能不能调试
var obj = new MovingAverage(3);
var arr = [];
arr.push(obj.next(1));
arr.push(obj.next(10));
arr.push(obj.next(3));
arr.push(obj.next(5));
console.log('arr', arr);