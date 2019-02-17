pragma solidity >0.4.99 <0.6.0;


contract PointOfSale {
  address payable owner;

  struct Charge {
      bool refunded;
      uint cost;
      uint tip;
      string chargeId;
      uint amountPaid;
      address payee;
  }

  string public currentChargeId;
  
  mapping(string => Charge) public charges;
  
  event ChargeCreated(string indexed chargeId, uint256 cost);
  event Refunded(string indexed receiptId, address indexed payee, uint cost);

   modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

  constructor() public {
    owner = msg.sender;
  }

  function() payable external{
      Charge storage charge = charges[currentChargeId];
      require(charge.cost <= msg.value);
      charge.payee = msg.sender;
      charge.amountPaid = msg.value;
      charge.tip = msg.value - charge.cost;
  }

  function createCharge(uint256 costOfItem, string memory chargeId) public onlyOwner{
      Charge storage charge = charges[chargeId];
      charge.cost = costOfItem;
      charge.chargeId = chargeId;
      currentChargeId = chargeId;
      emit ChargeCreated(chargeId, charge.cost);
  }

  function refund(string memory receiptId) public onlyOwner {
      Charge storage charge = charges[receiptId];
      require(!charge.refunded);
      charge.refunded = true;
      // tokenReward.transfer(_recipients[i], tokenAmount);
      address payable recipient = address(uint160(charge.payee));
      address(recipient).transfer(charge.cost);
      emit Refunded(receiptId, charge.payee, charge.cost);
  }

  function withdrawFunds() onlyOwner public {
      address contractAddress = address(this);
      address(owner).transfer(contractAddress.balance);
  }

    // function withdrawTokens() onlyBy(faucet) public {
    //     uint tokenBalance = tokenReward.balanceOf(this);

    //     tokenReward.transfer(faucet, tokenBalance);
    // }
}