import { useState, useEffect } from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
      <form>
        <div className='campo'>
            <label>Filtrar Gastos</label>
            <select
                value={filtro}
                onChange={evt => setFiltro(evt.target.value)}
            >
                <option value="">-- Toda las categorías --</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="casa">Casa</option>
                <option value="gastos">Gastos Varios</option>
                <option value="ocio">Ocio</option>
                <option value="salud">Salud</option>
                <option value="suscripciones">Suscripciones</option>
            </select>
        </div>
      </form>
    </div>
  )
}

export default Filtros
