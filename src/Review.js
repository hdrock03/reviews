import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import people from './data' // here people is an array, sara data ko data.js me save kiye fir usko import kiye hai
                            // yaha people pe jagah kuch bhi likhe wo tabhi array ki rhega
import './Review.css'
export default function Review() {

    const [index, setIndex] = useState(0) // yaha index ke based pe state change hoga, state 0 kiye taki hmesa phla data rhe
    const {name, job, image, text} = people[index] // jb index change hga tb usse related data bhi change hga 
    //yaha mko ek time pe ek element chahiye us array se uske liye destructuring use kiye so iske liye direct uska property 
    // use kiye hai check data.js
    
    const checkNumber = (number) => {
        if(number > people.length -1){
            return 0; //yaha 0 matlab 0 index ho jayega
        }
        if(number < 0){
            return people.length - 1;
        }
        return number;
    }
    // const forwardClick = ()=> {
    //     setIndex((previndex)=>{
    //        return previndex + 1;
    //     })
    // }

    // const reverseClick = () => {
    //     setIndex((previndex) => {
    //         return previndex - 1 ;
    //     })
    // }

    const nextPerson = () => {
        setIndex((previndex) => {
            let newIndex= previndex +1
            return checkNumber(newIndex)
        })
    }

    const previousPerson = () => {
        setIndex((previndex) => {
            let newIndex= previndex -1
            return checkNumber(newIndex)
        })
    }

    const generateRandomIndex = () => {
        const randomNumber = Math.floor(Math.random() * people.length);
        setIndex(randomNumber)
    }

  return (
    <div className='big-container'>
    <div className='container'>
        <div className='up'>
            <img src={image} alt={name}></img>
            <h3>{name}</h3>
            <p>{job}</p>

        </div>
        <div className='down'>
            <p>{text}</p>
            <div className='buttons'>
                <button onClick={previousPerson}> <FaChevronLeft/>   </button>
                <button onClick={nextPerson}> <FaChevronRight/> </button>
            </div>
            <button className='suprise' onClick={generateRandomIndex}>Suprise Me</button>
        </div>
        

    </div>
    </div>
  )
}
