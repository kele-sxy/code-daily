// class FirstUnique {
//   private nums: number[];
//   private uniqueArr: number[];
//   private countMap: any;

//   constructor(nums: number[]) {
//     this.nums = nums;
//     const curMap = {}
//     nums.forEach((num: number) => {
//       if (!curMap[num]) {
//         curMap[num] = 1
//       } else {
//         curMap[num]++
//       }
//     })
//     this.countMap = curMap;
//     this.uniqueArr = nums.filter((item: number) => {
//       return curMap[item] === 1
//     });
//   }

//   showFirstUnique(): number {

//     this.uniqueArr = this.nums.filter((item: number) => {
//       return this.countMap[item] === 1
//     });

//     const len = this.uniqueArr.length;

//     return len === 0 ? -1 : this.uniqueArr[0];
//   }

//   add(value: number): void {
//     this.nums.push(value);
//     if (!this.countMap[value]) {
//       this.countMap[value] = 1
//     } else {
//       this.countMap[value]++
//     }
//   }
// }

// /**
//  * Your FirstUnique object will be instantiated and called as such:
//  * var obj = new FirstUnique(nums)
//  * var param_1 = obj.showFirstUnique()
//  * obj.add(value)
//  */

// 上面那个版本超时了
// 维护的是重复的集合，和非重复的集合，在add的时候只做，非重复集合往重复集合里面放置东西
class FirstUnique {
  private uniqueSet: Set<number>; // 存储唯一数字
  private duplicateSet: Set<number>; // 存储重复数字
  private queue: number[]; // 保持插入顺序的队列

  constructor(nums: number[]) {
    this.uniqueSet = new Set();
    this.duplicateSet = new Set();
    this.queue = [];

    // 初始化处理所有数字
    nums.forEach(num => this.add(num));
  }

  showFirstUnique(): number {
    // 遍历队列找到第一个仍在uniqueSet中的数字
    for (const num of this.queue) {
      if (this.uniqueSet.has(num)) {
        return num;
      }
    }
    return -1;
  }

  add(value: number): void {
    if (this.duplicateSet.has(value)) {
      // 已经是重复数字，不需要处理
      return;
    }

    if (this.uniqueSet.has(value)) {
      // 如果已经在唯一集合中，移到重复集合
      this.uniqueSet.delete(value);
      this.duplicateSet.add(value);
    } else {
      // 新数字，添加到唯一集合和队列
      this.uniqueSet.add(value);
      this.queue.push(value);
    }
  }
}

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */