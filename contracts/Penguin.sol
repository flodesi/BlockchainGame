pragma solidity 0.4.24;

import './ERC721BasicToken.sol';

contract Penguin is ERC721BasicToken {
    struct penguin {
        string name; //this i the name of the penguin
        uint color; // color of the penguin roygbiv correspond to 0-6
        uint size; // size in range 0-10
        uint hat; // hats value range is 0-4
        uint birthtime; // number of seconds until birth of child, max value between parents is used, doubles after child born
    }
    
    penguin[] public penguins;
    address public owner;
    
    constructor() public {
        owner = msg.sender;
    }
    
    function createPenguin(string _name, address _to) public {
        require(owner == msg.sender);
        uint id = penguins.length;
        penguins.push(penguin(_name, 1, 1, 1, 1));
        _mint(_to, id);
    }
    
    // function babymaker(uint _penguinID, uint _targetID) onlyOwnerOf(_penguinID) public {
    //     penguin storage penguin1 = penguins[_penguinID];
    //     penguin storage penguin2 = penguins[_targetID];
        
        
        
    //     penguin1.birthtime = penguin1.birthtime * 2;
    //     penguin2.birthtime = penguin2.birthtime * 2;
    // }
}
