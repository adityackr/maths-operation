import PropTypes from 'prop-types';
import shortid from 'shortid';
import Button from '../ui/Button';

const Operations = ({ handleArithmeticOps, handleClearInputs }) => {
	const operations = [
		{
			id: shortid.generate(),
			text: '+',
			onClick: () => handleArithmeticOps('+'),
		},
		{
			id: shortid.generate(),
			text: '-',
			onClick: () => handleArithmeticOps('-'),
		},
		{
			id: shortid.generate(),
			text: '*',
			onClick: () => handleArithmeticOps('*'),
		},
		{
			id: shortid.generate(),
			text: '/',
			onClick: () => handleArithmeticOps('/'),
		},
		{
			id: shortid.generate(),
			text: '%',
			onClick: () => handleArithmeticOps('%'),
		},
		{
			id: shortid.generate(),
			text: '**',
			onClick: () => handleArithmeticOps('**'),
		},
		{
			id: shortid.generate(),
			text: 'Clear',
			onClick: handleClearInputs,
		},
	];

	return (
		<div style={{ marginBottom: '3rem' }}>
			<p style={{ fontWeight: 'bold' }}>Operations</p>
			<div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
				{operations.map((operation) => (
					<Button
						onClick={operation.onClick}
						text={operation.text}
						key={operation.id}
					/>
				))}
			</div>
		</div>
	);
};

Operations.propTypes = {
	handleArithmeticOps: PropTypes.func.isRequired,
	handleClearInputs: PropTypes.func.isRequired,
};

export default Operations;
