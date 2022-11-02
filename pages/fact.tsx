import { gql,useMutation } from '@apollo/client';
import React, { useState } from 'react';

const fact = () => {
  const ADD_ONE_FACTURA = gql`
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
  `;
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [paisCliente, setpaisCliente] = useState('');
  const [moneda, setMoneda] = useState('');
  const [medioDePago, setMedioDePago] = useState('');
  const [monto, setMonto] = useState(0);

  const variables = {
    data: { monto, paisCliente, moneda, medioDePago },
  };

  const [crearFactura, { data, loading, error }] = useMutation(ADD_ONE_FACTURA, {
    variables,
  });

  if (loading) {
    return <h1>CARGANDO...</h1>;
  }

  return (
    <div>
      <form
        action=''
        onSubmit={() => {
          crearFactura({
            variables: {
              data: {
                medioDePago: medioDePago,
                moneda: moneda,
                paisCliente: paisCliente,
                monto: monto,
              },
            },
          });
        }}
      >
        <input type='text' placeholder='nombre' onChange={() => setNombreCompleto} />
        <input type='text' placeholder='email' onChange={() => setEmail} />
        <select name='' placeholder='PAIS' onChange={() => setpaisCliente}>
          <option value='colombia'>colombia</option>
          <option value='España'>España</option>
          <option value='Estados unidos'>EE.UU</option>
        </select>
        <select name='' placeholder='PAIS' onChange={() => setMoneda}>
          <option value='COP'>COP</option>
          <option value='EUR'>EUR</option>
          <option value='USD'>USD</option>
        </select>
        <select name='' placeholder='Tipo de pago' onChange={() => setMedioDePago}>
          <option value='Efectivo'>Efectivo</option>
          <option value='Credito'>Credito</option>
        </select>
        <input type='text' placeholder='monto' onChange={() => setMonto} />
        <button type='submit'>Enviar Factura</button>
      </form>
    </div>
  );
};

export default fact;
