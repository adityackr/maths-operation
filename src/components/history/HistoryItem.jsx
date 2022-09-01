import PropTypes from 'prop-types';
import Button from '../ui/Button';

const HistoryItem = ({
	historyItem,
	handleRestoreButton,
	disabled,
	handleDeleteButton,
}) => {
	return (
		<li style={{ borderBottom: '1px solid #333' }} key={historyItem.id}>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<p>
					{historyItem.inputs.a} {historyItem.operator} {historyItem.inputs.b} ={' '}
					{historyItem.result}
				</p>
				<div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
					<Button
						text="Restore"
						onClick={() => handleRestoreButton(historyItem)}
						disabled={disabled}
					/>
					<Button
						text="Delete"
						onClick={() => handleDeleteButton(historyItem)}
					/>
				</div>
			</div>
		</li>
	);
};

HistoryItem.propTypes = {
	historyItem: PropTypes.shape({
		id: PropTypes.string.isRequired,
		inputs: PropTypes.shape({
			a: PropTypes.number.isRequired,
			b: PropTypes.number.isRequired,
		}).isRequired,
		operator: PropTypes.string.isRequired,
		result: PropTypes.number.isRequired,
	}),
	disabled: PropTypes.bool.isRequired,
	handleRestoreBtn: PropTypes.func.isRequired,
	handleDeleteButton: PropTypes.func.isRequired,
};

export default HistoryItem;
