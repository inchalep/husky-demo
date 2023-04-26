import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState();
	console.log(count, 'count');
	useEffect(() => {
		setCount(1);
	}, []);

	const getMultiple = (val) => {
		return val * 2;
	};
	console.log(getMultiple(count));
	return (
		<div className="App">
			<h2>huscky demo</h2>
		</div>
	);
}

export default App;
