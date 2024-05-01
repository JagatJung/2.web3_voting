import React from 'react'
import NewElectionAdder from './modals/NewElectionAdder';
import ElectionDescription from './modals/ElectionDescription';

export default function ShowModal({ isOpen , setIsOPen, selectedID }){

    if(!isOpen) {
        return null;
    }  
    return (
        <dialog id="my_modal_1" class="modal" open>
            {
             (selectedID == 0) ? 
             ( <NewElectionAdder setIsOPen = {setIsOPen}/> ) :
             (<ElectionDescription setIsOPen = {setIsOPen} />)
            }
        </dialog>
    );
  };
