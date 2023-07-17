import Swal from 'sweetalert2';
import {useEffect, useState} from 'react';
import './css/upload.css';
import constans from '../../env/constans';
  
const UploadScreen = ()=>{
    const [state,setState] = useState<Number>(0);

    useEffect(()=>{
        if(state === 1){
            Swal.fire({
                position:'top-right',
                title: 'Cargando',
                icon: 'info',
                showConfirmButton:false
            })
            return ;
        }
        if(state === 2){
            Swal.fire({
                position:'top-right',
                title: 'Finalizado',
                icon: 'success',
                showConfirmButton:false
            });
        }
        return ;
    },[state]);
    const ChangeFile=async(valueFile:any)=>{
        setState(1);
        let bodyContent = new FormData();
        bodyContent.append("dataExcel", valueFile[0]);
        let response = await fetch(`${constans.apiurl}/document/load/excel`, { 
            method: "POST",
            body: bodyContent,
            headers: {}
        });
        if(response.status === 200){
            await response.json();
            setState(2);
        }
        response = await response.json();
        alert("ocurrio un error:" + response.status);
        alert("El error es el siguiente: "+ JSON.stringify(response))
        return ;
    }
    return (
        <div className="dashboard-wrapper">
            <h1>Procesar documentos</h1>
            <hr style={{marginTop:10,marginBottom:10}} />
            <div className='file-select' id='src-file1'>
                <input onChange={(e)=>ChangeFile(e.target.files)} type="file" name="file" id="dataExcel" />
            </div>
        </div>
    );
};
export default UploadScreen;