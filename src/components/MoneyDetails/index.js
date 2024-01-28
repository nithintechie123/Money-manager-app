import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <ul className="money-details-container">
      <li className="balance-bg-color money-details-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="money-details-image"
        />
        <div className="money-details-text-cotainer">
          <p className="money-details-heading">Your Balance</p>
          <p className="money-details-amount" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </li>
      <li className="income-bg-color money-details-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="money-details-image"
        />
        <div className="money-details-text-cotainer">
          <p className="money-details-heading">Your Income</p>
          <p className="money-details-amount" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </li>
      <li className="expenses-bg-color money-details-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="money-details-image"
        />
        <div className="money-details-text-cotainer">
          <p className="money-details-heading">Your Expenses</p>
          <p className="money-details-amount" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
