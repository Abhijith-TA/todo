import React, {useState,useEffect} from 'react';
//import {Carousel} from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';

function Carousel() {
    const [index,setIndex] = useState(0)

    const incrementIndex = ()=>{
        if(index<2){
            setIndex(index+1);
        }
        else{
            setIndex(0);
        }
    }

    const decrementIndex = ()=>{
        if(index>0){
            setIndex(index-1);
        }
        else{
            setIndex(2);
        }
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(index<2){
                setIndex(index+1);
            }
        },4000);
        return ()=>{
            clearInterval(interval);
        }
    },[index])

    return (
        <>
        <div className="slide-container">
            <div className="slide slide-1" style={{transform:`translateX(-${index*100}%)`}}>
                <h1>slide 1</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, accusantium.</p>
            </div>
            <div className="slide slide-2" style={{transform:`translateX(-${index*100}%)`}}>
                <h1>slide 2</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, accusantium.</p>
            </div>
            <div className="slide slide-3" style={{transform:`translateX(-${index*100}%)`}}>
                <h1>slide 3</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, accusantium.</p>
            </div>
            <AiOutlineLeft className="btn-left" onClick={decrementIndex} />
            <AiOutlineRight className="btn-right" onClick={incrementIndex}/>
        </div>

        </>
    )
}

export default Carousel;
