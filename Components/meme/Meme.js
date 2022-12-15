import React from "react";
import './Meme.css'
import {IoBrowsersOutline} from 'react-icons/io5'

export default function Meme (){
    return(
        <div className="meme">
            <form className='form'>
                <input 
                    className="form--input"
                    placeholder='Top text'
                    type='text'
                />
                <input 
                    className="form--input"
                    placeholder='Bottom text'
                    type='text'
                />
                <button className="form--btn">
                    <IoBrowsersOutline className="form--btn-icon"/>
                    Get new Meme Image
                </button>  
            </form>
        </div>
    )
}