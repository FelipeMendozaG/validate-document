import {useEffect, useState} from 'react';
import CardProcesPles from '../../component/CardProcessPle/CardProcessPle';
import './css/exportple.css'
import constans from "../../env/constans";
const ExportPleScreen = ()=>{
    const [dataRes,SetDataRes] = useState({status:null,message:null,response:[]});
    const FetchResponse = async()=>{
        try{
            const response = await fetch(`${constans.apiurl}/process/finaly`);
            const data = await response.json();
            SetDataRes(data);
        }catch(err){
            alert("error al conectarse al api");
        }
    }
    useEffect(()=>{
        FetchResponse();
    },[]);
    return (
        <div className='dashboard-wrapper'>
            <div className='page-header'>
                <h1>Libros electronicos</h1>
                {/* <button className="styled-button" style={{backgroundColor:'#007bff'}}>Descargar PLE</button> */}
            </div>
            <br />
            <div>
                {
                    dataRes.response.map( (item:any,index:number)=><CardProcesPles key={index} id={item._id} date={item.createdAt} title={item.title} description={item.description} />)
                }
            </div>
        </div>
    )
};

export default ExportPleScreen;