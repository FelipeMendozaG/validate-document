import { useEffect, useState } from "react";
import '../css/style.css'
import CardProcess from "../../component/CardProcess/CardProcess";
const DashBoardScreen = ()=>{
    const [dataRes,SetDataRes] = useState(null);
    const FetchResponse = async()=>{
        try{
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
            const data = await response.json();
            SetDataRes(data);
        }catch(err){
            console.log(err);
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
                <CardProcess title="Hola mundo" description="mundo" is_process={false} />
            </div>
        </div>
    )
}
export default DashBoardScreen;