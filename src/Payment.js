import React from 'react';
import './Payment.css';
import Modal from 'react-modal';
import QRCode from 'qrcode.react';

Modal.setAppElement('#root');

class payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentCompleted: false
    };
  }
  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  renderFoodItems() {
    return (
      <React.Fragment>
        <tr>
          <td>1</td>
          <td>Water</td>
          <td>$1.00</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Cheesburger</td>
          <td>$2.00</td>
        </tr>

        <tr>
          <td>1</td>
          <td>Mozarella Sticks</td>
          <td>$1.00</td>
        </tr>
      </React.Fragment>
    );
  }
  render() {
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
      }
    };

    return (
      <div className="payment">
        <Modal
          isOpen={true}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        />
        <div className="left">
          <div className="order-window">
            <table>
              <tbody>
                <tr>
                  <td>#</td>
                  <td>Item</td>
                  <td>Price</td>
                </tr>

                {this.renderFoodItems()}
              </tbody>
            </table>
          </div>
          <div className="order-total">
            <span>Total: $4.00</span>
          </div>
          <div className="buttons">
            <div />
          </div>
        </div>
        <div className="right">
          <div className="categories" />
          <div className="menu-items">
            <div class="well">
              {!this.state.paymentCompleted && (
                <React.Fragment>
                  <h2>Pay with xDai to confirm</h2>
                  <QRCode value="0x1a8e1d85d5f8f125be00acc83f62695c3bc6cdf3" />,
                  <h2>Total is $4.00</h2>
                  <button
                    onClick={() => this.setState({ paymentCompleted: true })}
                  >
                    Finalize payment
                  </button>
                </React.Fragment>
              )}
              {this.state.paymentCompleted && (
                <React.Fragment>
                  <h1>Thank you for your payment!</h1>
                  <h4>receipt id: FEEsdgs keep id for refund!</h4>
                  <button onClick={() => console.log('thanks')}>
                    Complete
                  </button>
                </React.Fragment>
              )}
            </div>
          </div>
          <div className="payment-keys" />
        </div>
      </div>
    );
  }
}

export default payment;
