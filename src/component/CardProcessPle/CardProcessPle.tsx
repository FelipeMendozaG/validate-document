import React, { useState } from "react";
import './css/cardprocess.css';
import constans from "../../env/constans";
interface CardProcessProps{
    id:number;
    title: string;
    description: string;
    date: string;
}
const CardProcesPles:React.FC<CardProcessProps>=({id,title,description,date})=>{
    const [mydate,setMyDate] = useState({
        month:null,
        year:null
    });
    const ExportNotePle=async()=>{
        const BodyParam = {
            month:mydate.month,
            year:mydate.year,
            paramProcess:id,
            status:'NO EXISTE'
        };
        const response = await fetch(`${constans.apiurl}/document/export/ple`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(BodyParam)});
        const data = await response.text();
        const filename = `LE20507852549${BodyParam.year}${BodyParam.month}00140100001111.txt`;
        const contenido = new Blob([data], { type: 'text/plain' });

        const enlaceDescarga = document.createElement('a');
        enlaceDescarga.href = URL.createObjectURL(contenido);
        enlaceDescarga.download = filename;
        enlaceDescarga.style.display = 'none';

        document.body.appendChild(enlaceDescarga);
        enlaceDescarga.click();
        document.body.removeChild(enlaceDescarga);
    }
    const ChangeDate = async(e:any)=>{
        const myDate = e.target.value.split('-');
        setMyDate({...mydate, year:myDate[0],month:myDate[1]});
    }
    return (
        <div className="card">
            <div className="d-flex">
                <div className="col">
                    <h2 className="h2">{title}</h2>
                    <p className="description">{description}</p>
                    <p className="datetime">{date}</p>
                </div>
                <div className="col-option">
                    <input onChange={(e)=>ChangeDate(e)} type="month" className="myMonthInput" />
                    <button onClick={()=>ExportNotePle()} className="styled-button">
                        Exportar PLE
                    </button>
                </div>
            </div>
        </div>
    );
}
export default CardProcesPles