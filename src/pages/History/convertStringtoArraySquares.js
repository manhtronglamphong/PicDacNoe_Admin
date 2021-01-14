const _BOARD_SIZE = 10;

exports.convertStringtoArraySquares = (str) => {
	const splitted = str.split(',');
	const newArr = [];
	for (let i = 0; i < arrSquares.length; i += _BOARD_SIZE) {
		let spliced = splitted.splice(i, i + _BOARD_SIZE);
		newArr.push(spliced);
	}
	return newArr;
};

exports.convertStringtoArrayWinLine = (str) => {
	const splitted = str.split(',');
	const newArr = [];
	for (let i = 0; i < arrSquares.length; i += 2) {
		let spliced = splitted.splice(i, i + 2);
		newArr.push(spliced);
	}
	return newArr;
};
