import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Button, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

export default function facturacion() {

    const ADD_ONE_FACTURA = gql `
    
    `



    const [nombreCompleto, setNombreCompleto] = useState('');
    const [email, setEmail] = useState('');
    const [paisCliente, setpaisCliente] = useState('');
    const [moneda, setMoneda] = useState('');
    const [medioDePago, setMedioDePago] = useState('');
    const [monto, setMonto] = useState(0);

    // Mapeo de paises


    return (
        <Box sx={{ m: 10 }}>
            <h1>Facturación</h1>

            <br />
            <div>
                <TextField
                    label="Nombre y Apellidos"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '25ch' }}
                    onChange={(e) => setNombreCompleto(e.target.value)}
                    value={nombreCompleto}
                />

                <TextField
                    label="Email"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '25ch' }}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />


                <FormControl fullWidth>
                    <InputLabel htmlFor="outlined-adornment-amount">Pais Cliente</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        sx={{ m: 1, width: '25ch' }}
                        // value={age}
                        label="Age"
                        value={paisCliente}
                        onChange={e => setpaisCliente(e.target.value)}

                    >
                        <MenuItem value={"Colombia"}>Colombia</MenuItem>
                        <MenuItem value={"Colombia"}>España</MenuItem>
                        <MenuItem value={"Colombia"}>Estados unidos</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="outlined-adornment-amount">Moneda</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        sx={{ m: 1, width: '25ch' }}
                        // value={age}
                        label="Age"
                        value={moneda}
                        onChange={(e) => setMoneda(e.target.value)}
                    >
                        <MenuItem value={"COP"}>COP</MenuItem>
                        <MenuItem value={"EUR"}>EUR</MenuItem>
                        <MenuItem value={"USD"}>USD</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="outlined-adornment-amount">Medio de pago</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        sx={{ m: 1, width: '25ch' }}
                        // value={age}
                        label="medio de pago"
                        value={medioDePago}
                        onChange={e => setMedioDePago(e.target.value)}

                    >
                        <MenuItem value={"efectivo"}>efectivo</MenuItem>
                        <MenuItem value={"credito"}>credito</MenuItem>

                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="outlined-adornment-amount">Monto</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        sx={{ m: 1, width: '25ch' }}
                        value={monto}
                        onChange={() => setMonto(monto)}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        label="Amount"
                    />
                </FormControl>
                <Button variant="contained">Finalizar Factura</Button>
            </div>

        </Box>
    );
}
