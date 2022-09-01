import PropTypes from 'prop-types';

const InputField = ({ value, name, onChange }) => {
	const style = {
		width: '100%',
		padding: '0.5rem 1rem',
		border: 'none',
		outline: 'none',
		borderRadius: '0.25rem',
	};
	return (
		<input
			style={style}
			type="number"
			value={value}
			name={name}
			onChange={onChange}
		/>
	);
};

InputField.propTypes = {
	value: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default InputField;
