import { useEffect, useState} from 'react';
import React from 'react'

import { ethers } from 'ethers';
import Elections from '../../abis/elections.json'

export default function ElectionDescription({ setIsOPen, selectedID }) {
    const [currentElection, setCurrentElection] = useState([]);
    const [currentOptions, setCurrentOptions] = useState([]);

    const newOptionAdder = async () => {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const contract1 = new ethers.Contract('0x5FbDB2315678afecb367f032d93F642f64180aa3', Elections, signer);
        let data2 = await contract1.getElections(selectedID);
        setCurrentElection(data2)
        let data3 = await contract1.getOption(selectedID);
        setCurrentOptions(data3);
    }

    const setOptionAdder = async ()=> {
        const provide_new = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
        const signer1 = await provide_new.getSigner();
        const contract2 = new ethers.Contract('0x5FbDB2315678afecb367f032d93F642f64180aa3', Elections, signer1);
        const newoption = document.getElementById('newOption').value;
        const waitOption = await contract2.setOption(newoption, selectedID);
        await waitOption.wait();
    }

    const VotedVote = async() => {
        const radios = document.getElementsByName('radio_options');
        var selectedValue = '';
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                selectedValue = radios[i].value;
                break;
            }
        }

        const provide_new = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
        const signer1 = await provide_new.getSigner();
        const contract2 = new ethers.Contract('0x5FbDB2315678afecb367f032d93F642f64180aa3', Elections, signer1);
        const waitOption = await contract2.setVotes('0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65',   selectedValue,  selectedID);
        await waitOption.wait();

    }

    const getVotes = async() => {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const contract1 = new ethers.Contract('0x5FbDB2315678afecb367f032d93F642f64180aa3', Elections, signer);
        let data3 = await contract1.getVotes(selectedID);
        console.log(data3);
    }

    useEffect(()=>{
        newOptionAdder();
      },[currentElection]);

  return (
    <div class="modal-box w-full">
        <div className='p-5'>
            <h2 class="font-bold text-lg">{currentElection[0]} sadasd</h2>
            <p> {currentElection[1]}</p>

            {currentOptions.map((option, index) => (
                
                    <div className="form-control py-2 shadow-lg bg-gray-700 px-3 mt-3 rounded-xl" key={index}>
                    <label className="label cursor-pointer">
                        <span className="label-text">{option}</span> 
                        <input type="radio" name="radio_options" className="radio radio-accent" value={index} />
                    </label>
                    </div>
                )
            )}
            
            <div className="form-control py-2 shadow-lg bg-gray-700 px-3 mt-3 rounded-xl">
            <label className="label cursor-pointer"> 
                <span className="label-text"><input type="text" className=" bg-gray-700 text-white py-2 outline-none" placeholder="Add Option ..." id = 'newOption'/></span> 
                <button class="btn btn-primary btn-sm" onClick={()=>{setOptionAdder()}}><span className='text-xl'>&#43;</span></button>
            </label>
            </div>

            <div class="flex mt-4">
                <button class="btn w-1/2 btn-success" onClick={()=>{ getVotes() }}>Vote</button> &nbsp;&nbsp;&nbsp;
                <button class="btn w-1/2 btn-error" onClick={()=>{setIsOPen(false)}}>Cancel</button>
            </div>
        </div>
    </div>
  )
}
