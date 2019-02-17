import React from 'react';
import './Register.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCheeseburger: false,
      showWater: false,
      showSticks: false
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
      <div className="register">
        <div className="left">
          <div className="order-window">
            <table>
              <tbody>
                <tr>
                  <td>#</td>
                  <td>Item</td>
                  <td>Price</td>
                  <td>GL</td>
                </tr>
                <tr>
                  {this.state.showWater && (
                    <React.Fragment>
                      <td>1</td>
                      <td>Water</td>
                      <td>$1.00</td>
                    </React.Fragment>
                  )}
                </tr>
                <tr>
                  {this.state.showCheeseburger && (
                    <React.Fragment>
                      <td>1</td>
                      <td>Cheesburger</td>
                      <td>$2.00</td>
                    </React.Fragment>
                  )}
                </tr>

                <tr>
                  {this.state.showSticks && (
                    <React.Fragment>
                      <td>1</td>
                      <td>Mozarella Sticks</td>
                      <td>$1.00</td>
                    </React.Fragment>
                  )}
                </tr>
              </tbody>
            </table>
          </div>
          <div className="order-total">
            <span>{this.state.total}</span>
          </div>
          <div className="buttons">
            <button>
              <i className="fas fa-print" />
              Print
            </button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>
              <i className="fas fa-ban" />
              Void
            </button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>
              <i className="fa fa-times" />
              QTY
            </button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>
              <i className="fas fa-sign-out-alt" />
              Exit
            </button>
            <div />
            <button>0</button>
            <button>.00</button>
          </div>
        </div>
        <div className="right">
          <div className="categories">
            <ul>
              <li>
                <a href="#">All Items</a>
              </li>
              <li>
                <a href="#">Beverages</a>
              </li>
              <li>
                <a href="#">Soup/Salad</a>
              </li>
              <li>
                <a href="#">Appetizers</a>
              </li>
              <li>
                <a href="#">Entrees</a>
              </li>
              <li>
                <a href="#">Desserts</a>
              </li>
            </ul>
          </div>
          <div className="menu-items">
            <ul>
              <li
                onClick={() => {
                  console.log('gg');
                  this.setState({ showWater: true, total: '$1.00' });
                }}
              >
                {/*           <i class="fas fa-beer fa-2x  fa-fw" data-fa-transform="up-3"></i> */}
                <span className="item">Water</span>
                <span className="category">Beverages</span>
              </li>
              <li>
                {/*           <i class="fas fa-beer fa-2x  fa-fw" data-fa-transform="up-3"></i> */}
                <span className="item">Iced Tea</span>
                <span className="category">Beverages</span>
              </li>
              <li>
                {/*           <i class="fas fa-beer fa-2x  fa-fw" data-fa-transform="up-3"></i> */}
                <span className="item">Soda</span>
                <span className="category">Beverages</span>
              </li>
              <li>
                {/*           <i class="fas fa-beer fa-2x fa-fw" data-fa-transform="up-3"></i> */}
                <span className="item">Coffee</span>
                <span className="category">Beverages</span>
              </li>
              <li>
                {/*           <i class="fas fa-utensils fa-2x fa-fw" data-fa-transform="up-3"></i> */}
                <span className="item">House Salad</span>
                <span className="category">Soup/Salad</span>
              </li>
              <li>
                {/*           <i class="fas fa-utensils fa-2x fa-fw" data-fa-transform="up-3"></i> */}
                <span className="item">Side Salad</span>
                <span className="category">Soup/Salad</span>
              </li>
              <li>
                {/*           <i class="fas fa-utensils fa-2x fa-fw" data-fa-transform="up-3"></i> */}
                <span className="item">Spaghetti</span>
                <span className="category">Entree</span>
              </li>
              <li>
                {/*           <i class="fas fa-utensils fa-2x fa-fw" data-fa-transform="up-3"></i> */}
                <span className="item">Chicken Alfredo</span>
                <span className="category">Entree</span>
              </li>
              <li>
                {/*           <i class="fas fa-utensils fa-2x fa-fw" data-fa-transform="up-3"></i> */}
                <span className="item">Hamburger</span>
                <span className="category">Entree</span>
              </li>
              <li
                onClick={() =>
                  this.setState({ showCheeseburger: true, total: '$3.00' })
                }
              >
                {/*           <i class="fas fa-utensils fa-2x fa-fw" data-fa-transform="up-3"></i> */}
                <span className="item">Cheeseburger</span>
                <span className="category">Entree</span>
              </li>
              <li
                onClick={() =>
                  this.setState({ showSticks: true, total: '$4.00' })
                }
              >
                {/*           <i class="fas fa-utensils fa-2x fa-fw" data-fa-transform="up-3"></i> */}
                <span className="item">Mozzarella Sticks</span>
                <span className="category">Appetizers</span>
              </li>
              <li>
                {/*           <i class="fas fa-utensils fa-2x fa-fw" data-fa-transform="up-3"></i> */}
                <span className="item">Nachos</span>
                <span className="category">Appetizers</span>
              </li>
              <li>
                {/*           <i class="fas fa-utensils fa-2x fa-fw" data-fa-transform="up-3"></i> */}
                <span className="item">Chocolate Cake</span>
                <span className="category">Desserts</span>
              </li>
              <li>
                {/*           <i class="fas fa-utensils fa-2x fa-fw" data-fa-transform="up-3"></i> */}
                <span className="item">Apple Pie</span>
                <span className="category">Desserts</span>
              </li>
              <li>
                {/*           <i class="fas fa-utensils fa-2x fa-fw" data-fa-transform="up-3"></i> */}
                <span className="item">Blueberry Cobbler</span>
                <span className="category">Entree</span>
              </li>
            </ul>
          </div>
          <div className="payment-keys">
            <ul>
              <li>
                <i
                  className="fas fa-money-bill-alt fa-2x fa-fw"
                  data-fa-transform="up-2"
                />{' '}
                Cash
              </li>
              <li>
                <i
                  className="fas fa-check-square fa-2x fa-fw"
                  data-fa-transform="up-2"
                />{' '}
                Check
              </li>
              <li>
                <i
                  className="fas fa-credit-card fa-2x fa-fw"
                  data-fa-transform="up-2"
                />{' '}
                Credit / Debit
              </li>
              <li>
                <i
                  className="fas fa-gift fa-2x fa-fw"
                  data-fa-transform="up-2"
                />{' '}
                Gift Card
              </li>
              <li onClick={() => this.props.onCharge()}>
                <i
                  className="fas fa-user fa-2x fa-fw"
                  data-fa-transform="up-2"
                />{' '}
                XDai
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
