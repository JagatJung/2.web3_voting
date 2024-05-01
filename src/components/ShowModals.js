import React from 'react'
import NewElectionAdder from './modals/NewElectionAdder';

export default function ShowModal({ isOpen , setIsOPen }){

    if(!isOpen) {
        return null;
    }  
    return (
        <dialog id="my_modal_1" class="modal" open>
            <NewElectionAdder setIsOPen = {setIsOPen}/>
        </dialog>
    );
  };
