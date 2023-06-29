import { useEffect, useState } from "react";
import '../css/style.css'
import CardProcess from "../../component/CardProcess/CardProcess";
import constans from "../../env/constans";
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
                    dataRes.response.map( (item:any,index:number)=><CardProcess key={index} date={item.createdAt} title={item.title} description={item.description} is_process={item.is_finish} />)
                }
            </div>
        </div>
    )
}
export default DashBoardScreen;