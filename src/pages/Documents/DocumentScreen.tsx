import { useEffect,useState } from 'react';
import selectorStatus from './data/selectorStatus.json'
import './css/document.css';
import constans from '../../env/constans';
const DocumentScreen = ()=>{
    const [params,setParams] = useState({
        paramProcess:'',
        status:''
    });
    const [documents,setDocuments] = useState({status:null,message:null,response:[]});
    const [process,setProcess] = useState({status:null,message:null,response:[]});
    const [statusRes,setStatusRes] = useState(false);
    const FetchDocuments = async()=>{
        const Url = `${constans.apiurl}/document`;
        const searchParams = new URLSearchParams(params).toString();
        const response = await fetch(Url+`/?${searchParams}`);
        const data = await response.json();
        if(data.status === 'success'){
            setDocuments(data);
        }
    }
    const FetchProcess = async()=>{
        try{
            const response = await fetch(`${constans.apiurl}/process`);
            const data = await response.json();
            if(data.status === 'success'){
                setProcess(data);
            }
        }catch(err){
            alert("error al conectarse al api");
        }
    }
    const SaveFile = async()=>{
        const url = `${constans.apiurl}/document/export`;
        const searchParams = new URLSearchParams(params).toString();
        const response = await fetch(url+`/?${searchParams}`,{headers:{'Content-Type':'application/json'},method:'post'});
        if(response.status === 200){
            const blob = await response.blob();
            const file = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = file;
            a.download = "data.xlsx";
            a.click();
            return ;
        }
        alert('No se puede guardar el archivo. Comunicate con chepita support');
        return ;
    }
    useEffect(()=>{
        FetchProcess();
        FetchDocuments();
    },[]);
    useEffect(()=>{
        if(statusRes === true){
            FetchDocuments();
            setStatusRes(false);
        }
    },[statusRes]);
    return (
        <div className="dashboard-wrapper">
            <h1>documentos</h1>
            <br />
            <div className='styled-select'>
                <select onChange={(e)=> setParams({...params,paramProcess:e.target.value}) }>
                    {process.response.map(({_id,title,createdAt})=><option key={_id} value={_id}>{title}-{new Date(createdAt).toLocaleDateString("es-ES")}</option>)}
                </select>
            </div>
            <div className='styled-select'>
                <select onChange={(e)=> setParams({...params,status:e.target.value}) }>
                    {selectorStatus.map(({value},index)=><option key={index} value={value}>{value}</option>)}
                </select>
            </div>
            <button className="styled-button" style={{backgroundColor:'#ffc107'}} onClick={()=>setStatusRes(true)}>Buscar</button>
            <button className="styled-button" onClick={()=>SaveFile()}>Descargar Excel</button>
            {/* <button className="styled-button" style={{backgroundColor:'#007bff'}}>Descargar PLE</button> */}
            <div className='content-table'>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>RUC CLIENTE</th>
                            <th>CLIENTE</th>
                            <th>NUMERO DOCUMENTO</th>
                            <th>DOCUMENTO</th>
                            <th>ESTADO DE DOCUMENTO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {documents.response.map(({_id,ruc_client,client,number_document,status_document,type_document})=> (<tr key={_id}><td>{ruc_client}</td><td>{client}</td><td>{number_document}</td><td>{type_document}</td><td>{status_document}</td></tr>) )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default DocumentScreen;