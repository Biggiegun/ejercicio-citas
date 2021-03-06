import React from 'react'
import AgregarCita from '../components/AgregarCita'
import {ListarCitas} from '../components/ListarCitas'

export const AppCitas = () => {
    return (
        <div className="container text-center">
        <header><h1>EPS Sura</h1></header>
        <div className="row mt-3">
          <div className="col-md-6">
            <AgregarCita/>
          </div>
          <div className="col-md-6">
            <ListarCitas/>
          </div>
        </div>
      </div>
    )
}