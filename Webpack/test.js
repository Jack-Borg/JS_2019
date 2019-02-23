// const arr = [1, 2, 3, 4];
// console.log(arr.slice(1, 3).reduce((acc, curr) => acc + curr));

divisibleSumPairs(3, [1, 3, 2, 6, 1, 2]);

function divisibleSumPairs(k, ar) {
	for (let i = 0; i < ar.length; i++) {
		for (let j = i + 1; j < ar.length; j++) {
			if ((ar[i] + ar[j]) % k === 0) {
				console.log(ar[i] + " " + ar[j]);
			}
		}
	}
}
