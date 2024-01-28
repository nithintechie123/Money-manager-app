import './index.css'

const TransactionItem = props => {
  const {transactionItemDetails} = props

  const {title, amount, type} = transactionItemDetails

  return (
    <li className="transaction-item">
      <p className="transaction-item-text">{title}</p>
      <p className="transaction-item-text">{amount}</p>
      <p className="transaction-item-text">{type}</p>
      <button type="button" className="delete-button" data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default TransactionItem
