import {React} from 'react'
import { ethers } from 'ethers';

export default function NavBar({userAddress, setuserAddress, setIsOPen}) {


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
            <button class="btn btn-ghost btn-circle" onClick={()=>{setIsOPen(true)}}>
            <div class="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span class="badge badge-xs badge-primary indicator-item"></span>
            </div>
            </button>
        </div>
    </div>
  )
}