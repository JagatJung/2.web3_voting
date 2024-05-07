import React from 'react'
import { ethers } from 'ethers';

import Elections from '../../abis/elections.json'

export default function NewElectionAdder({setIsOPen, userAddress}) {

    const setNewElectionObject = async () => { 

        const provide_new = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
        const signer1 = await provide_new.getSigner();
        const contract2 = new ethers.Contract('0x5FbDB2315678afecb367f032d93F642f64180aa3', Elections, signer1);

        const title = document.getElementById('electionTitle').value;
        const description = document.getElementById('electionDesc').value;
        const validity = document.getElementById('electionRD').value; 
        const creator = userAddress; 
        const elect = await contract2.setSingleElection(title, description,validity,creator);
        await elect.wait();

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
            <button class="btn mr-3 btn-primary" onClick={()=>{setNewElectionObject()}}>Add</button>
            <button class="btn btn-error" onClick={()=>{setIsOPen(false)}}>Cancel</button>
        </form>
        </div>
    </div>
  )
}
