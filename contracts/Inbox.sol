pragma solidity ^0.4.17;

contract Inbox {
    string public message;
    
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }
    
    function setMessage(string newMessage) public {
        message = newMessage;
    }
}

//this is a address of one of my goerli address check the block in goerli etherscan
//0xfAdD7b85C487074e99b859552F900723f18596ED