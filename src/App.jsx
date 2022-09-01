import { useState } from 'react';
import InputSection from './components/inputs/InputSection';
import Operations from './components/operations/Operations';

const initialInputState = {
	a: 0,
	b: 0,
};

const App = () => {
	const [inputs, setInputs] = useState({ ...initialInputState });
	const [result, setResult] = useState(0);

	const handleInputChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: parseInt(e.target.value) });
	};

	const handleClearInputs = () => {
		setInputs({ ...initialInputState });
		setResult(0);
	};

	const handleArithmeticOps = (operator) => {
		if (!inputs.a || !inputs.b) {
			alert('Invalid Input');
			return;
		}

		const res = eval(`${inputs.a} ${operator} ${inputs.b}`);

		setResult(res);
	};
	return (
		<div
			style={{
				width: '50%',
				textAlign: 'center',
				margin: '2rem auto',
				padding: '2rem 1rem',
				fontFamily: 'sans-serif',
				backgroundColor: 'teal',
				color: '#fff',
			}}
		>
			<InputSection inputs={inputs} handleInputChange={handleInputChange} />

			<Operations
				handleArithmeticOps={handleArithmeticOps}
				handleClearInputs={handleClearInputs}
			/>
			<div>
				<h3>Result: {result}</h3>
			</div>
		</div>
	);
};

export default App;
