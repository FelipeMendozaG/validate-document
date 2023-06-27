import React from "react";
import './css/cardprocess.css'
interface CardProcessProps{
    title: string;
    description: string;
    is_process: boolean;
  }
const CardProcess:React.FC<CardProcessProps> = ({title,description,is_process})=>{
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            {is_process ?(
                <div className="loader">
                    <div className="spinner"></div>
                </div>):(<></>)}
        </div>
    );
}
export default CardProcess