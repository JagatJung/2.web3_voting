import React from 'react'
import { ethers } from 'ethers';

import Elections from '../../abis/elections.json'

export default function NewElectionAdder({setIsOPen, SetElectionInfo, setElectionCount}) {

    const setNewElectionObject = async () => { 
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const contract1 = new ethers.Contract('0x5FbDB2315678afecb367f032d93F642f64180aa3', Elections, signer);
        
    
        const provide_new = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
        const signer1 = await provide_new.getSigner();
        const contract2 = new ethers.Contract('0x5FbDB2315678afecb367f032d93F642f64180aa3', Elections, signer1);
        // const data = await contract2.setCount(10);
        // await data.wait();
        
        // const title = document.getElementById('electionTitle');
        // const description = document.getElementById('electionDesc');
        // const validity = parseInt(document.getElementById('electionRD')); 
        // const creator = signer.address; 
        // const elect = await contract2.setSingleElection(title, description,validity,creator);
        // await elect.wait();

        const title = "Election Title";
        const description = "Election Description";
        const validity = 5; // Example validity period
        const creator = "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f"; 
        const elect = await contract2.setSingleElection(title, description,validity,creator);
        await elect.wait();
        
        // const electionCounts = await contract1.getCount();
        // const data2 = await contract1.getElections();

        setIsOPen(false);
    }
  return (
    <div class="modal-box p-5">
        <h3 class="font-bold text-lg">Add New Election</h3>
        
        <label className="input input-bordered flex items-center gap-2 mt-3">
             Title
            <input type="text" className="grow"  id="electionTitle"/>
        </label>

        <label className="input input-bordered flex items-center gap-2 mt-3">
            Description
            <input type="text" className="grow" id="electionDesc"/>
        </label>

        <label className="input input-bordered flex items-center gap-2 mt-3">
             Running Days
            <input type="number" className="grow" id="electionRD" />
        </label>

        <div class="modal-action">
        <form method="dialog">
        <button class="btn mr-3" onClick={()=>{setNewElectionObject()}}>Add</button>
            <button class="btn btn-error" onClick={()=>{setIsOPen(false)}}>Cancel</button>
        </form>
        </div>
    </div>
  )
}
