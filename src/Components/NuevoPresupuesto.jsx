import { useState } from 'react';
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {

    const [mensaje, setMensaje] = useState('');
    
    const handlePresupuesto = (evt) => {
        evt.preventDefault();

        if(!Number(presupuesto) || Number(presupuesto) < 0){
            setMensaje('No es un presupuesto válido');
        } else {

        }
    }

    return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
        <div className='campo'>
            <label>Definir Presupuesto</label>
            <input 
                className='nuevo-presupuesto'
                type='text'
                placeholder='Añade tu presupuesto'
                value={presupuesto}
                onChange={(evt) => setPresupuesto(evt.target.value)}
            />
        </div>
        <input 
            type='submit'
            value='Añadir'
        />
        {mensaje && 
        <Mensaje tipo='error'>
            {mensaje}
        </Mensaje>
        }
        </form>
    </div>
    )
}

export default NuevoPresupuesto
