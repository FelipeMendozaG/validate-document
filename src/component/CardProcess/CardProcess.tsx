import React from "react";
import './css/cardprocess.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
interface CardProcessProps{
    title: string;
    description: string;
    is_process: boolean;
    date: string;
}
const CardProcess:React.FC<CardProcessProps>=({title,description,is_process,date})=>{
    return (
        <div className="card">
            <h2 className="h2">{title}</h2>
            <p className="description">{description}</p>
            <p className="datetime">{date}</p>
            { !is_process ? (
                <div className="loader">
                    <div><FontAwesomeIcon icon={faCheckSquare} size="xl" color="green" /></div>
                    <div className="spinner"></div>
                </div>):(<></>)}
        </div>
    );
}
export default CardProcess