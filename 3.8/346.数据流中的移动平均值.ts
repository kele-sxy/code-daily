// 346.数据流中的移动平均值.ts

class MovingAverage {
  // 队列先进先出
  private queue: any[];
  private sum: number;
  private size: number;
  constructor(size: number) {
    this.queue = []
    this.sum = 0
    this.size = size
  }

  next(val: number): number {
    let shiftVal = 0
    if (this.queue.length === this.size) {
      shiftVal = this.queue.shift()
    }
    this.queue.push(val)
    const len = this.queue.length;

    this.sum = this.sum + val - shiftVal;

    return this.sum / len;
  }
}

// leetcode能调试，本地能不能调试

const movingAvgObj = new MovingAverage(3);
const arr: number[] = []
arr.push(movingAvgObj.next(1))
arr.push(movingAvgObj.next(10))
arr.push(movingAvgObj.next(3))
arr.push(movingAvgObj.next(5))

console.log('arr', arr)

