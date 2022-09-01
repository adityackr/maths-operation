import { useState } from 'react';
import InputSection from './components/inputs/InputSection';

const initialInputState = {
	a: 0,
	b: 0,
};

const App = () => {
	const [inputs, setInputs] = useState({ ...initialInputState });
	const handleInputChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: parseInt(e.target.value) });
	};
	return (
		<div
			style={{
				width: '50%',
				textAlign: 'center',
				margin: '2rem auto',
				fontFamily: 'sans-serif',
				backgroundColor: 'teal',
				color: '#fff',
			}}
		>
			<InputSection inputs={inputs} handleInputChange={handleInputChange} />
		</div>
	);
};

export default App;
