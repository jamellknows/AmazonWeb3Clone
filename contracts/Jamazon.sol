// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract Jamazon {
    string public name = "Jamazon";
    address public owner;
    
    constructor(){
        name = "Jamazon";
        owner = msg.sender;
    }
    

    
}