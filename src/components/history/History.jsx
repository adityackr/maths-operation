import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const History = ({
	historyItems,
	handleRestoreButton,
	restored,
	handleDeleteButton,
}) => {
	return (
		<div style={{ marginTop: '3rem' }}>
			<p style={{ fontWeight: 'bold' }}>History</p>
			{historyItems.length === 0 ? (
				<p>There is no history</p>
			) : (
				<ul
					style={{
						listStyle: 'none',
					}}
				>
					{historyItems.map((historyItem) => (
						<HistoryItem
							key={historyItem.id}
							historyItem={historyItem}
							handleRestoreButton={handleRestoreButton}
							handleDeleteButton={handleDeleteButton}
							disabled={restored === historyItem.id}
						/>
					))}
				</ul>
			)}
		</div>
	);
};

HistoryItem.propTypes = {
	historyItems: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			inputs: PropTypes.shape({
				a: PropTypes.number.isRequired,
				b: PropTypes.number.isRequired,
			}).isRequired,
			operator: PropTypes.string.isRequired,
			result: PropTypes.number.isRequired,
		})
	),
	restored: PropTypes.string.isRequired,
	handleRestoreBtn: PropTypes.func.isRequired,
	handleDeleteButton: PropTypes.func.isRequired,
};

export default History;
