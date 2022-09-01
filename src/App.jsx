import { useState } from 'react';
import shortid from 'shortid';
import History from './components/history/History';
import InputSection from './components/inputs/InputSection';
import Operations from './components/operations/Operations';

const initialInputState = {
	a: 0,
	b: 0,
};

const App = () => {
	const [inputs, setInputs] = useState({ ...initialInputState });
	const [result, setResult] = useState(0);
	const [historyItems, setHistoryItems] = useState([]);
	const [restored, setRestored] = useState(null);

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

		const result = eval(`${inputs.a} ${operator} ${inputs.b}`);
		setResult(result);

		const history = {
			id: shortid.generate(),
			inputs: { ...inputs },
			operator,
			result,
		};

		setHistoryItems([history, ...historyItems]);
	};

	const handleRestoreButton = (historyItem) => {
		setInputs({ ...historyItem.inputs });
		setResult(historyItem.result);
		setRestored(historyItem.id);
	};

	const handleDeleteButton = (historyItem) => {
		const index = historyItems.findIndex((item) => item.id === historyItem.id);
		historyItems.splice(index, 1);
		setHistoryItems([...historyItems]);
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

			<History
				historyItems={historyItems}
				handleRestoreButton={handleRestoreButton}
				handleDeleteButton={handleDeleteButton}
				restored={restored}
			/>
		</div>
	);
};

export default App;
