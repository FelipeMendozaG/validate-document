import Swal from 'sweetalert2';
import {useEffect, useState} from 'react';
import './css/upload.css';
  
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
    const ChangeFile=(valueFile:any)=>{
        console.log(valueFile);
        setState(1);
        setTimeout(()=>{
            setState(2);
        },5000);
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