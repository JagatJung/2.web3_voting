import React from 'react'

export default function ElectionDescription({ setIsOPen }) {

    const newOptionAdder = () => {
        console.log(document.getElementById('newOption').value);
    }
  return (
    <div class="modal-box w-full">
        <div className='p-5'>
            <h2 class="font-bold text-lg">Election Title</h2>
            <p> text evera galleyIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
            
            <div className="form-control py-2 shadow-lg bg-gray-700 px-3 mt-3 rounded-xl">
            <label className="label cursor-pointer">
                <span className="label-text">Red pill</span> 
                <input type="radio" name="radio-10" className="radio radio-accent" checked />
            </label>
            </div>

            <div className="form-control py-2 shadow-lg bg-gray-700 px-3 mt-3 rounded-xl">
            <label className="label cursor-pointer">
                <span className="label-text">Red pill</span> 
                <input type="radio" name="radio-10" className="radio radio-accent" checked />
            </label>
            </div>

            <div className="form-control py-2 shadow-lg bg-gray-700 px-3 mt-3 rounded-xl">
            <label className="label cursor-pointer">
                <span className="label-text">Red pill</span> 
                <input type="radio" name="radio-10" className="radio radio-accent" checked />
            </label>
            </div>

            <div className="form-control py-2 shadow-lg bg-gray-700 px-3 mt-3 rounded-xl">
            <label className="label cursor-pointer">
                <span className="label-text"><input type="text" className=" bg-gray-700 text-white py-2 outline-none" placeholder="Add Option ..." id = 'newOption'/></span> 
                <button class="btn btn-primary btn-sm" onClick={()=>{newOptionAdder()}}><span className='text-xl'>&#43;</span></button>
            </label>
            </div>

            <div class="flex mt-4">
                <button class="btn w-1/2 btn-success">Vote</button> &nbsp;&nbsp;&nbsp;
                <button class="btn w-1/2 btn-error" onClick={()=>{setIsOPen(false)}}>Cancel</button>
            </div>
        </div>
    </div>
  )
}
