import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
    transactionsList: [],
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeOptionIdInput = event => {
    this.setState({optionId: event.target.value})
  }

  onAddTransactionDetails = event => {
    event.preventDefault()

    const {titleInput, amountInput, optionId} = this.state

    const optionType = transactionTypeOptions.find(
      eachType => eachType.optionId === optionId,
    )

    const {displayText} = optionType

    const newTransactionItem = {
      id: v4(),
      title: titleInput,
      amount: amountInput,
      type: displayText,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransactionItem],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getIncomeAmount = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getExpensesAmount = () => {
    const {transactionsList} = this.state
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += expensesAmount.amount
      }
    })
    return expensesAmount
  }

  getBalanceAmount = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0
    let balanceAmount = 0
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += expensesAmount.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  render() {
    const {transactionsList, titleInput, amountInput, optionId} = this.state

    const balanceAmount = this.getBalanceAmount()
    const incomeAmount = this.getIncomeAmount()
    const expensesAmount = this.getExpensesAmount()

    return (
      <div className="app-container">
        <div className="money-manager-container">
          <div className="heading-container">
            <h1 className="name">
              Hi,Richard
              <p className="description">
                Welcome back to your
                <span className="span-element"> Money Manager</span>
              </p>
            </h1>
          </div>
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
          <div className="add-transaction-history-container">
            <form
              className="add-transaction-container"
              onSubmit={this.onAddTransactionDetails}
            >
              <h1 className="add-transaction-heading">Add Transaction</h1>
              <label htmlFor="title" className="label-element">
                TITLE
              </label>
              <input
                id="title"
                type="text"
                value={titleInput}
                placeholder="TITLE"
                className="input-element"
                onChange={this.onChangeTitleInput}
              />
              <label htmlFor="amount" className="label-element">
                AMOUNT
              </label>
              <input
                id="amount"
                type="text"
                title={amountInput}
                placeholder="AMOUNT"
                className="input-element"
                onChange={this.onChangeAmountInput}
              />
              <label htmlFor="type" className="label-element">
                TYPE
              </label>
              <select
                id="type"
                className="input-element"
                onChange={this.onChangeOptionIdInput}
                value={optionId}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option value={eachOption.optionId} key={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <div className="history-container">
              <h1 className="add-transaction-heading">History</h1>
              <div className="columns-heading-container">
                <p className="column-heading">Title</p>
                <p className="column-heading">Amount</p>
                <p className="column-heading">Type</p>
              </div>
              <ul className="transaction-items-container">
                {transactionsList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionItemDetails={eachTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
