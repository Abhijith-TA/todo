import React from 'react'
import {Carousel} from 'react-bootstrap';

const data =[
    {
        img:"https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2lkZSUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        imgalt:"First slide",
        label:"First slide label",
        dis:"Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
        img:"https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2lkZSUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        imgalt:"Second slide",
        label:"second slide label",
        dis:"Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
        img:"https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2lkZSUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        imgalt:"Third slide",
        label:"Third slide label",
        dis:"Nulla vitae elit libero, a pharetra augue mollis interdum."
    }
]

function ImageSlider() {
    return (
    <Carousel className='h-100'>
        
        {
            data.map((item)=>{
                const {img,imgalt,label,dis} =item;
                return (
                    <Carousel.Item >
                        <img
                        className="d-block w-100"
                        src={img}
                        alt={imgalt}
                        />
                        <Carousel.Caption>
                        <h3>{label}</h3>
                        <p>{dis}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })
        }

    </Carousel>
    )
}

export default ImageSlider
