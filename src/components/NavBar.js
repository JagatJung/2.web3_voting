import {React} from 'react'
import { ethers } from 'ethers';

export default function NavBar({userAddress, setuserAddress, setIsOPen, setSelectedId}) {


    const connectionHandler = async () => {
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
        const account = ethers.getAddress(accounts[0]);
        setuserAddress(account);
    }

  return (
    <div class="navbar bg-base-100 px-5 py-3 fixed top-0 w-full z-50">
        <div class="navbar-start">
            <div tabindex="0" role="button" class="btn btn-primary" onClick={connectionHandler}>
                { 
                    userAddress ? (<span>{userAddress.slice(0,6) + '.....' + userAddress.slice(38,42)}</span>) : (<span>connected</span>)
                }
            </div>
        </div>
        <div class="navbar-center">
            <a class="btn btn-ghost text-xl">Voting DApp</a>
        </div>
        <div class="navbar-end">
            <button class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button> 
            {/* add disable here */}
            <button class="btn btn-primary btn-circle" onClick={()=>{setSelectedId(0); setIsOPen(true)}} disabled={!userAddress}>
                <div class="indicator">
                <span className='text-xl'>&#43;</span>
                </div>
            </button>
        </div>
    </div>
  )
}
