function fib() {
  const nums = [0, 1];
  for (let i = 2; i < 50; i++) {
    nums.push(nums[i - 2] + nums[i - 1]);
  }
  return nums;
}

console.log(fib());

function numsToStrings() {
  return _.map(fib(), function (num) { return num.toString(); });
}

console.log(numsToStrings());

function numEvenNums() {
  const evens = _.filter(fib(), function (num) { return num % 2 === 0; });
  return evens.length;
}

console.log(numEvenNums());