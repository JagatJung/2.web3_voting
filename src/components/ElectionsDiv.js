import React, { useEffect, useState } from 'react'

export default function ElectionsDiv({setIsOPen,theKey,election, setSelectedId}) {

    const [highestVote, setHighestVote] = useState([])
  const getHigestVote = () => {
        let temp_array = [];
        for (let i = 0 ; i < election[7].length; i++ ){
            temp_array.push(election[7][i][2]);
        }

        const counts = {};
        temp_array.forEach(element => {
            counts[element] = (counts[element] || 0) + 1;
        });

        console.log(temp_array);

        let maxElement;
        let maxCount = 0;

        for (let element in counts) {
            if (counts[element] > maxCount) {
                maxElement = element;
                maxCount = counts[element];
            }
        }
        setHighestVote({'el':maxElement, 'num':maxCount});
  }
  useEffect(()=>{
    getHigestVote();
  },[]) 
  return (
    <div class="stats shadow mt-4 bg-slate-700 w-3/4" onClick={()=>{setIsOPen(true); setSelectedId(theKey);}} key = {theKey}>
      <div class="stat">
        <div class="stat-title">Name</div>
        <div class="stat-value text-lime-50">{election[0]}</div>
        <div class="stat-desc mt-3">Date: {Date(Number(election[2]) * 1000)}</div>
      </div>
      
      <div class="stat">
        <div class="stat-figure text-success">
          <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-8 h-8 stroke-current mt-5" viewBox="0 0 32 32"><path fill="currentColor" d="M8 5v16h16V5zm2 2h12v12H10zm9.3 2.9L15 14.2l-2.3-2.3l-1.4 1.5l3 3l.7.7l.7-.7l5-5zM2 19v8h2v-6h2v-2zm24 0v2h2v6h2v-8zM6 23v2h20v-2z"/></svg>
        </div>
        <div class="stat-title">Total Votes</div>
        <div class="stat-value text-success">{election[7].length}</div>
      </div>
      
      <div class="stat">
      <div class="stat-figure text-success">
        <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-8 h-8 stroke-current mt-5 mr-3" viewBox="0 0 256 256"><path fill="currentColor" d="M244 56v64a12 12 0 0 1-24 0V85l-75.51 75.52a12 12 0 0 1-17 0L96 129l-63.51 63.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0L136 135l67-67h-35a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12"/></svg>
        </div>
        <div class="stat-title">Highest Vote</div>
        <div class="stat-value text-lime-50">{highestVote['num']}</div>
        <div class="stat-desc text-secondary">{election[6][highestVote['el']]}</div>
      </div>
  </div>
  )
}
