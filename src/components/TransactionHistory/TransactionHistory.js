import PropTypes from "prop-types";
import styles from "./TransactionHistory.css";

const TransactionHistory = ({ items }) => {
    return (
        <table className="transaction__history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((element) => (
                    <tr key={element.id}>
                        <td>{element.type}</td>
                        <td>{element.amount}</td>
                        <td>{element.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
};

export default TransactionHistory;
