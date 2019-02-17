import React, { Component } from 'react';
// import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from 'react-apollo';

import Register from './Register';
import Payment from './Payment';
import Portis from '@portis/web3';
import Web3 from 'web3';
import pointOfSaleABI from './pointOfSaleABI';
import './App.css';

const portis = new Portis('0f6fcede-8244-4b33-9b4f-a51cba10741c', 'ropsten');
const web3 = new Web3(portis.provider);

// const CONTRACT_ADDRESS =

class App extends Component {
  // async charge(account, finneyAmount) {
  //   return new Promise((resolve, reject) => {
  //     const value = web3.utils.toWei(finneyAmount, 'finney');
  //   });
  // }
  constructor(props) {
    super(props);
    this.state = {
      showPaymentScreen: false
    };
    this.charge = this.charge.bind(this);
  }

  async charge(address) {
    const contractAddress = '0x1a8e1d85d5f8f125be00acc83f62695c3bc6cdf3';
    // const contractAddress = '0xE49414Ef6Eaf70E729CB3fB133eB80C7c6d81f81';

    const myContract = new web3.eth.Contract(pointOfSaleABI, contractAddress);
    const costOfItem = web3.utils.toWei('1000', 'szabo');
    // const costOfItem = web3.utils.toWei('4', 'ether');

    const chargeId = 'RRRRRRR';

    await myContract.methods
      .createCharge(costOfItem, chargeId)
      .send({ from: '0x3B83803d4d6f59647Ea04842eA4BDaab8Cd65B82' })
      .on('transactionHash', hash => {
        console.log(hash);
        this.setState({
          showPaymentScreen: true
        });

        // this.watchForPayment(chargeId);
      });
  }
  watchForPayment(chargeId) {
    const contractAddress = '0x1a8e1d85d5f8f125be00acc83f62695c3bc6cdf3';

    const myContract = new web3.eth.Contract(pointOfSaleABI, contractAddress);
    myContract.events.NewPayment(
      {
        filter: {
          orderId: [chargeId]
        } // Using an array means OR: e.g. 20 or 23
      },
      function(error, event) {
        console.log(event);
      }
    );
  }

  render() {
    return (
      <div className="App">
        {!this.state.showPaymentScreen && <Register onCharge={this.charge} />}
        {this.state.showPaymentScreen && <Payment />}

        {/* {this.state.showPaymentScreen && <Payment contractAddress={CONTRACT_ADDRESS} />} */}
      </div>
    );
  }
}

export default App;
