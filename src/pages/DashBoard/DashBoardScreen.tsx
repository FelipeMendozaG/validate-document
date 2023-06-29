import { useEffect, useState } from "react";
import '../css/style.css'
import CardProcess from "../../component/CardProcess/CardProcess";
import constans from "../../env/constans";
import {StateError,StateSuccess,StatePending} from '../../store/state_process/action';
const DashBoardScreen = ()=>{
    const [dataRes,SetDataRes] = useState({status:null,message:null,response:[]});
    const FetchResponse = async()=>{
        try{
            const response = await fetch(`${constans.apiurl}/process`);
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
            <h1>Inicio</h1>
            <br />
            <div>
                {
                    dataRes.response.map( (item:any,index:number)=><CardProcess key={index} title={item.title} description="mundo" is_process={false} />)
                }
            </div>
        </div>
    )
}
export default DashBoardScreen;