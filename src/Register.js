import React from "react";
import "./Register.css";
import Modal from "react-modal";
import { throws } from "assert";
import { isNull } from "../node_modules/util";

Modal.setAppElement("#root");

const totalItems = [
  {
    name: "Water",
    category: "Beverage",
    price: 1.0,
    quantity: 1
  },
  {
    name: "Iced Tea",
    category: "Beverage",
    price: 1.0,
    quantity: 1
  },
  {
    name: "Soda",
    category: "Beverage",
    price: 1.0,
    quantity: 1
  },
  {
    name: "Coffee",
    category: "Beverage",
    price: 1.5,
    quantity: 1
  },
  {
    name: "House Salad",
    category: "Soup/Salad",
    price: 3.0,
    quantity: 1
  },
  {
    name: "Side Salad",
    category: "Soup/Salad",
    price: 2.0,
    quantity: 1
  },
  {
    name: "Spagehetti",
    category: "Soup/Salad",
    price: 5.0,
    quantity: 1
  },
  {
    name: "Chicken Alfredo",
    category: "Entree",
    price: 5.0,
    quantity: 1
  },
  {
    name: "Hamburger",
    category: "Entree",
    price: 3.0,
    quantity: 1
  },
  {
    name: "Cheeseburger",
    category: "Entree",
    price: 3.5,
    quantity: 1
  },
  {
    name: "Mozzarella Sticks",
    category: "Appetizers",
    price: 3.0,
    quantity: 1
  },
  {
    name: "Nachos",
    category: "Appetizers",
    price: 3.0,
    quantity: 1
  },
  {
    name: "Chocolate Cake",
    category: "Dessert",
    price: 3.5,
    quantity: 1
  },
  {
    name: "Apple Pie",
    category: "Desserts",
    price: 3.5,
    quantity: 1
  },
  {
    name: "Blueberry cobbler",
    category: "Desserts",
    price: 4.0,
    quantity: 1
  }
];

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: totalItems,
      orderItems: [],
      total: 0
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

  componentDidUpdate() {
    console.log("current items ordered ", this.state.orderItems);
  }

  filterAllItems = () => {
    const newItems = totalItems;

    this.setState({ menuItems: newItems });
  };

  filterBeverages = () => {
    // complete this

    const newItems = totalItems.filter(
      beverageItems => beverageItems.category === "Beverage"
    );

    this.setState({ menuItems: newItems });
  };

  filterSoup_Salad = () => {
    // complete this

    const newItems = totalItems.filter(
      Soup_Salad => Soup_Salad.category === "Soup/Salad"
    );

    this.setState({ menuItems: newItems });
  };

  filterAppetizers = () => {
    // complete this

    const newItems = totalItems.filter(
      appetizerItems => appetizerItems.category === "Appetizers"
    );

    this.setState({ menuItems: newItems });
  };

  filterEntrees = () => {
    // complete this

    const newItems = totalItems.filter(
      entreeItems => entreeItems.category === "Entree"
    );

    this.setState({ menuItems: newItems });
  };

  filterDesserts = () => {
    // complete this

    const newItems = totalItems.filter(
      dessertItems => dessertItems.category === "Desserts"
    );

    this.setState({ menuItems: newItems });
  };

  renderMenuItems = () => {
    // add all the menuitems

    const list = this.state.menuItems.map((item, i) => {
      return (
        <li
          key={i}
          onClick={() => {
            // When a new item is being added

            // Create an object to add to the list
            const menuItemToAdd = {
              name: item.name,
              price: item.price,
              quantity: item.quantity
            };
            // We need to make our object into an array because
            // concat takes in an array .concat([])
            // We made the object an array to concat later
            const menuItemsArray = [menuItemToAdd];

            // Find index of the item and make sure it is not in the list
            // Find an item with the same name it will give us index over -1
            const indexOfItem = this.state.orderItems.findIndex(
              item => item.name === menuItemToAdd.name
            );

            // console.log(this.state.orderItems.i(menuItemToAdd));

            if (indexOfItem !== -1) {
              const leftItems = this.state.orderItems.slice(0, indexOfItem);
              const menuItemExist = this.state.orderItems[indexOfItem];
              const rightItems = this.state.orderItems.slice(indexOfItem + 1);

              const menuItemExistToAdd = {
                name: menuItemExist.name,
                price: menuItemExist.price,
                quantity: menuItemExist.quantity + 1
              };

              const leftItemsandMenuItems = leftItems.concat([
                menuItemExistToAdd
              ]);

              const newItems = leftItemsandMenuItems.concat(rightItems);

              const newTotal = this.state.total + item.price;

              this.setState({ orderItems: newItems, total: newTotal });
            } else {
              const newItems = this.state.orderItems.concat(menuItemsArray);
              const newTotal = this.state.total + item.price;
              this.setState({ orderItems: newItems, total: newTotal });
            }
          }}
        >
          <span className="item">{item.name}</span>
          <span className="category">{item.category}</span>
        </li>
      );
    });

    return list;
  };

  renderOrderItems = () => {
    const list = this.state.orderItems.map((item, i) => {
      return (
        <tr
          key={i}
          onClick={() => {
            const leftItems = this.state.orderItems.slice(0, i);

            const rightItems = this.state.orderItems.slice(i + 1);

            const newItems = leftItems.concat(rightItems);

            const newTotal = this.state.total - item.price * item.quantity;

            this.setState({ orderItems: newItems, total: newTotal });
          }}
        >
          <td> {item.quantity}</td>
          <td>{item.name}</td>
          <td>${item.price.toFixed(2)}</td>
        </tr>
      );
    });

    return list;
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
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
                {this.renderOrderItems()}
              </tbody>
            </table>
          </div>
          <div className="order-total">
            <span>${this.state.total.toFixed(2)}</span>
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
              <li onClick={() => this.filterAllItems()}>
                <a href="#">All Items</a>
              </li>
              <li onClick={() => this.filterBeverages()}>
                <a href="#">Beverages</a>
              </li>
              <li onClick={() => this.filterSoup_Salad()}>
                <a href="#">Soup/Salad</a>
              </li>
              <li onClick={() => this.filterAppetizers()}>
                <a href="#">Appetizers</a>
              </li>
              <li onClick={() => this.filterEntrees()}>
                <a href="#">Entrees</a>
              </li>
              <li onClick={() => this.filterDesserts()}>
                <a href="#">Desserts</a>
              </li>
            </ul>
          </div>
          <div className="menu-items">
            <ul>{this.renderMenuItems()}</ul>
          </div>
          <div className="payment-keys">
            <ul>
              <li>
                <i
                  className="fas fa-money-bill-alt fa-2x fa-fw"
                  data-fa-transform="up-2"
                />{" "}
                Cash
              </li>
              <li>
                <i
                  className="fas fa-check-square fa-2x fa-fw"
                  data-fa-transform="up-2"
                />{" "}
                Check
              </li>
              <li>
                <i
                  className="fas fa-credit-card fa-2x fa-fw"
                  data-fa-transform="up-2"
                />{" "}
                Credit / Debit
              </li>
              <li>
                <i
                  className="fas fa-gift fa-2x fa-fw"
                  data-fa-transform="up-2"
                />{" "}
                Gift Card
              </li>
              <li onClick={() => this.props.onCharge()}>
                <i
                  className="fas fa-user fa-2x fa-fw"
                  data-fa-transform="up-2"
                />{" "}
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
