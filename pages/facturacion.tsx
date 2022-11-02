import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Button, Input, MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { PrismaClient } from '@prisma/client';
import axios from 'axios';

export default function facturacion() {
  /*   const ADD_ONE_FACTURA = gql`
mutation CreateOneFactura($data: FacturaCreateInput!) {
  createOneFactura(data: $data) {
    monto
        moneda
        id
        pais
        esEfectivo
        published
      }
    }
  `; */
  const [nombre, setnombre] = useState('');
  const [email, setEmail] = useState('');
  const [pais, setpais] = useState('');
  const [moneda, setMoneda] = useState('');
  const [esEfectivo, setesEfectivo] = useState('');
  const [monto, setMonto] = useState(0);
  const [clienteId, setclienteId] = useState(1);
  const [responseAPI, setresponseAPI] = useState(0);


  const addFactura = async (e:any) => {
    e.preventDefault()
    await axios.post('/api/addFactura', { moneda, monto, pais, esEfectivo, clienteId });
    await axios.post('/api/addCliente', { email,nombre });
  };

  return (
    <>
      <h1>Facturación</h1>

      <br />
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          addFactura(e);
          setTimeout(()=>{
            // window.location.reload();
          },3000)
        }}
      >
        <TextField
          label='Nombre y Apellidos'
          id='outlined-start-adornment'
          sx={{ m: 1, width: '25ch' }}
          onChange={(e) => setnombre(e.target.value)}
          value={nombre}
        />

        <TextField
          label='Email'
          id='outlined-start-adornment'
          sx={{ m: 1, width: '25ch' }}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <FormControl fullWidth>
          <InputLabel htmlFor='outlined-adornment-amount'>Pais Cliente</InputLabel>
          <Select
            // value={age}
            label='Age'
            value={pais}
            onChange={(e) => setpais(e.target.value)}
          >
            <MenuItem value={'Colombia'}>Colombia</MenuItem>
            <MenuItem value={'Colombia'}>España</MenuItem>
            <MenuItem value={'Colombia'}>Estados unidos</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor='outlined-adornment-amount'>Moneda</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            sx={{ m: 1, width: '25ch' }}
            // value={age}
            label='Age'
            value={moneda}
            onChange={async (e) => {
              setMoneda(e.target.value)
              var config = {
                method: 'get',
                url:
                  'https://v6.exchangerate-api.com/v6/fef05bb4f020c8fd2c94e328/pair/' +
                  moneda +
                  '/COP',
                headers: {},
              };

              await axios(config)
                .then(function (response) {
                  console.log(JSON.stringify(response.data));
                  setresponseAPI(response.data.conversion_rate);
                  console.log('api');
                  console.log(responseAPI);
                })
                .catch(function (error) {
                  console.log(error);
                });
            }}
          >
            <MenuItem value={'COP'}>COP</MenuItem>
            <MenuItem value={'EUR'}>EUR</MenuItem>
            <MenuItem value={'USD'}>USD</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor='outlined-adornment-amount'>Medio de pago</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            sx={{ m: 1, width: '25ch' }}
            // value={age}
            label='medio de pago'
            value={esEfectivo}
            onChange={(e) => setesEfectivo(e.target.value)}
          >
            <MenuItem value={'efectivo'}>efectivo</MenuItem>
            <MenuItem value={'credito'}>credito</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            id='outlined-adornment-amount'
            
            value={monto}
            onChange={(e) => {
              setMonto(parseFloat(e.target.value));
            
            }}
            startAdornment={<InputAdornment position='start'>$</InputAdornment>}
            label='Monto'
          />
        </FormControl>
        <p>{`CONVERSION DEL MONTO : ${responseAPI * monto}`}</p>
        <Button type='submit' variant='contained'>
          Finalizar Factura
        </Button>
      </form>
    </>
  );
}
