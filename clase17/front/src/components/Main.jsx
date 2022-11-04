import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table, Button } from 'react-bootstrap';


const Main = () => {

  const [personas, setPersonas] = useState([]);

  const URL = 'http://localhost:3001/';

  useEffect(() => {
    const getPersonas = async () => {
      try {
        const { data } = await axios.get(URL);
        setPersonas(data.persona)
        console.log(data.persona);
      } catch (error) {
        console.error(error);
      }
    }
    getPersonas()
  }, [])


  return (
    <div className="container text-center m-5">
      <h2 className="m-4">Nómina de Personas</h2>
      <Table className="table m-4">
        <thead className="m-4">
          <th>Nombre</th>
          <th>Apellido</th>
          <th>DNI</th>
        </thead>
        <tbody className="m-4">
          {personas.map(persona => 
            <tr>
              <td>{persona.nombre}</td>
              <td>{persona.apellido}</td>
              <td>{persona.dni}</td>
              <td><Button variant="success" className="mt-3">Update</Button></td>
              <td><Button variant="danger" className="mt-3">Delete</Button></td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default Main