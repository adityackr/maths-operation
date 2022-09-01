import PropTypes from 'prop-types';
import InputField from '../ui/InputField';

const InputSection = ({ inputs, handleInputChange }) => {
	return (
		<div
			style={{
				padding: '2rem 1rem',
			}}
		>
			<h1>Inputs</h1>
			<div
				style={{
					display: 'flex',
					gap: '1rem',
					justifyContent: 'space-between',
				}}
			>
				<InputField value={inputs.a} name="a" onChange={handleInputChange} />
				<InputField value={inputs.b} name="b" onChange={handleInputChange} />
			</div>
		</div>
	);
};

InputSection.propTypes = {
	inputs: PropTypes.shape({
		a: PropTypes.number.isRequired,
		b: PropTypes.number.isRequired,
	}).isRequired,
	handleInputChange: PropTypes.func.isRequired,
};

export default InputSection;
