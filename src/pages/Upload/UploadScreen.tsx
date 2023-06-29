import Swal from 'sweetalert2';
import {useEffect} from 'react';
const UploadScreen = ()=>{
    useEffect(()=>{
        Swal.fire({
            position:'bottom-right',
            title: 'Error!',
            icon: 'info',
            heightAuto:false,
            showConfirmButton:false
        })
    },[]);
    return (
        <div className="dashboard-wrapper">
            <h1>Procesar documentos</h1>
            <br />
            <input type="file" name="file" id="idfile" />
            <button>
                hola mundo
            </button>
        </div>
    );
};
export default UploadScreen;