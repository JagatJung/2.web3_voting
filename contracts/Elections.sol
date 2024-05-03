// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract Elections {
    uint256 public counter = 0;

    struct Vote {
        address voter;
        uint256 votedDate;
        string votedOption;
    }

    Vote public tempVote;

    struct SingleElection {
        string title;
        string description;
        uint256 voteStartDate;
        address creator;
        uint8 validity; 
        bool isActive;
        string[] options;
        Vote[] votedVotes; 
    }

    mapping(uint256 => SingleElection) public electionList;

    function setSingleElection(string memory _title, string memory _description, uint8 _validity, address _creator) public{
        counter++;
        electionList[counter].title = _title;
        electionList[counter].description = _description;
        electionList[counter].voteStartDate = block.timestamp;
        electionList[counter].creator = _creator;
        electionList[counter].validity = _validity;
        electionList[counter].isActive = true;
    }

    //options for a single elections goes here
    function setOption(string memory _option, uint256 _index) public {
        electionList[_index].options.push(_option);
    }

    function getOption(uint256 _index) public view returns(string[] memory) {
       return electionList[_index].options;
    }

    //vote operations starts here
    function setVotes(address _voter, string memory _option, uint256 _index) public {
        tempVote = Vote(_voter,  block.timestamp, _option);
        electionList[_index].votedVotes.push(tempVote);
    }

    function getVotes(uint256 _index) public view returns(Vote[] memory) {
        return electionList[_index].votedVotes;
    } 

    //get total elections
    function getCount() public view returns(uint256) {
        return counter;
    }

    function setCount(uint256 _count) external {
        counter = _count;
    }
    
    function getElections(uint256 _index) public view returns(SingleElection memory) {
        return electionList[_index];
    }

}