import { useEffect, useState} from 'react';
import { ethers } from 'ethers';

import NavBar from './components/NavBar';
import ElectionsDiv from './components/ElectionsDiv';

import Elections from './abis/elections.json'

// Config
import config from './config.json';
import ShowModal from './components/ShowModals';


function App() {
  const [userAddress, setuserAddress] = useState(null);
  const [isOpen, setIsOPen] = useState(false);
  const [electionInfo, SetElectionInfo] = useState([]);
  const [electionCount, setElectionCount] = useState(0);
  const [selectedID, setSelectedId] = useState(0);
  const [totalVotes, setTotalVotes] = useState([])

  const loadBlockchainData = async ()=> {
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const contract1 = new ethers.Contract('0x5FbDB2315678afecb367f032d93F642f64180aa3', Elections, signer);
    const electionCounts = await contract1.getCount();
    let election_list = [];
    for(var i = 0; i < electionCounts ; i++) {
      let data2 = await contract1.getElections(i);
      election_list.push(data2);
    }
    SetElectionInfo(election_list);
  }

  window.ethereum.on("accountsChanged", async()=>{
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'});
    const account = ethers.getAddress(accounts[0]);
    setuserAddress(account);
  });
  
  useEffect(()=>{
    loadBlockchainData();
  },[]);

  return (
    <div >
      <ShowModal isOpen={isOpen} setIsOPen = {setIsOPen} selectedID = {selectedID} setTotalVotes={ setTotalVotes } totalVotes= { totalVotes }/>

      <NavBar 
        userAddress = {userAddress} 
        setuserAddress = {setuserAddress}
        setIsOPen = {setIsOPen}
        setSelectedId = {setSelectedId} 
      />

      <div className="flex flex-wrap justify-center mt-20">
      {electionInfo.map((election, index) => (
            <ElectionsDiv setIsOPen = {setIsOPen} 
            theKey= {index} 
            election = {election} 
            setSelectedId = {setSelectedId}  
            selectedId = {selectedID} 
            />
        ))}
         
      </div>
      
    </div>
    
  );
}

export default App;
