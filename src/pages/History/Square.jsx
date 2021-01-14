import React from 'react';

function Square({ value, highLight }) {
	const classname = 'square-his' + (highLight ? ' text-danger font-weight-bolder' : '');
	return (
		<div className={classname}>
			{value}
		</div >
	);
}

export default Square;
