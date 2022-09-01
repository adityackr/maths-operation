import PropTypes from 'prop-types';

const Button = ({ text, onClick, disabled }) => {
	const disabledStyle = {
		backgroundColor: '#999',
		color: '#333',
		cursor: 'not-allowed',
	};

	const style = {
		border: 'none',
		backgroundColor: '#ddd',
		cursor: 'pointer',
		padding: '0.25rem 1rem',
		fontWeight: 'bold',
		...(disabled && disabledStyle),
	};
	return (
		<button style={style} onClick={onClick} disabled={disabled}>
			{text}
		</button>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
};

Button.defaultProps = {
	disabled: false,
};

export default Button;
