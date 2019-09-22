// E26: Five problems every software engineer should be able to solve (Part 1)
// pWOD 1
// First Attempt: 30 mins DNF
// Second Attempt:  45 mins completed (used Dr. Johnson's lecture video)
// Third Attempt: 11:52 (went back and forth of looking at the completed code
// forgot to clone the repository after creating it
// Fourth Attempt:

const testNums = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sumFor(testNums));

function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
}

console.log(sumWhile(testNums));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  } return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

console.log(sumRecursion(testNums));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(testNums));
