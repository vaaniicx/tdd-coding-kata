// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(input) {
	return input ? calculateSumFromString(input.trim()) : 0;
};

function calculateSumFromString(string_numbers) {
	let sum = 0;

	string_numbers.split(',').forEach(char => {
		sum += parseInt(char);
	});
	return sum;
}
