import React from 'react'
import firebaseDb from './firebaseConfig';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabase, ref,set,push } from 'firebase/database';
function Led() {

    const db=getDatabase(firebaseDb);
    const newDocRef=ref(db, "array");
    const modeDocRef=ref(db, "mode");
    const [matrix, setMatrix]=useState([[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]])

    
const layout=[1,2,3,4,5,6,7,8]

    function sendData(){
        let finalArray=[]

        console.log(matrix)
        matrix.forEach(row=> {
            // finalArray.push(row.join().parseInt())
        console.log(parseInt(row.join(''),2))
        finalArray.push(parseInt(row.join(''),2))
        })
        set(newDocRef, finalArray).then(
            ()=>
            console.log('saved')
        ).catch((error)=>
    console.log(error))
    console.log(finalArray)
    }

    function clearData(){
      setMatrix([[0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]])
    }
    function handleChange(row, column)
    {   const matrixcpy=[...matrix]
        
        matrixcpy[row]
        if(matrixcpy[row][column]==0)
        matrixcpy[row][column]=1
    else
    matrixcpy[row][column]=0
        setMatrix(matrixcpy)
         console.log(matrix)
    }

    const changeMode=(isFireMode)=>{

 
        set(modeDocRef, isFireMode?1:0).then(
          ()=>
          console.log('fire')
      ).catch((error)=>
  console.log(error))

 
    }


    return (
        <div >
          {layout.map((j, row) => (
            <div key={row}>
              {layout.map((l, column) => (
                <button 
                className={`btn-sm btn-circle sm:btn-md ${matrix[row][column] === 0 ? 'bg-base-200' : 'bg-primary'} `} 
                key={column} 
                onClick={() => handleChange(row, column)}
              >
               
              </button>
              
              ))}
            </div>
          ))}

          <div className='flex justify-center gap-4 m-4' >  
          <button className = ' btn btn-outline' onClick={clearData}>Reset</button>
          
          <button className = ' btn btn-primary' onClick={sendData}>Upload</button>
        </div>
        <div className='flex justify-center gap-4 m-4'>
        <label className="cursor-pointer label flex gap-2">


      <span className="label-text text-lg font-bold">Fire Mode</span> 
      <input type="checkbox" className="toggle toggle-lg toggle-error" onChange={(e)=> {changeMode(e.target.checked)}}/>
    </label>
        </div>

        
        
        </div>
      );
      
 
}

export default Led