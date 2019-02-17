const pointOfSale = [
  {
    constant: false,
    inputs: [
      {
        name: 'costOfItem',
        type: 'uint256'
      },
      {
        name: 'chargeId',
        type: 'string'
      }
    ],
    name: 'createCharge',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: 'receiptId',
        type: 'string'
      }
    ],
    name: 'refund',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [],
    name: 'withdrawFunds',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    payable: true,
    stateMutability: 'payable',
    type: 'fallback'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'chargeId',
        type: 'string'
      },
      {
        indexed: false,
        name: 'cost',
        type: 'uint256'
      }
    ],
    name: 'ChargeCreated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'receiptId',
        type: 'string'
      },
      {
        indexed: true,
        name: 'payee',
        type: 'address'
      },
      {
        indexed: false,
        name: 'cost',
        type: 'uint256'
      }
    ],
    name: 'Refunded',
    type: 'event'
  },
  {
    constant: true,
    inputs: [],
    name: 'currentChargeId',
    outputs: [
      {
        name: '',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }
];

module.exports = pointOfSale;
