import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 5000}

  updateBalance = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-section">
            <div className="profile-icon">M</div>
            <p className="user-name">Manoj Aelishala</p>
          </div>

          <div className="balance-section">
            <p className="balance-text">Your Balance</p>
            <div className="balance-value">
              <p className="amount">{balance}</p>
              <p className="currency">In Rupees</p>
            </div>
          </div>

          <p className="withdraw-title">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>

          <ul className="denomination-list">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                denominationDetails={eachItem}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
