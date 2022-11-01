import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, MenuItem, Select } from '@mui/material';
import { PrismaClient } from '@prisma/client';
import { useState } from 'react';

interface State {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
}

export default function facturacion() {
    const [values, setValues] = React.useState<State>({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const [nombreCompleto, setNombreCompleto] = useState();
    const [email, setEmail] = useState();
    const [paisCliente, setpaisCliente] = useState();
    const [moneda, setMoneda] = useState();
    const [medioDePago, setMedioDePago] = useState();
    const [monto, setMonto] = useState();
    
    const handleChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [prop]: event.target.value });
        };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Box sx={{m:10}}>
            <h1>Facturación</h1>
            
            <br />
            <div>
                <TextField
                    label="Nombre y Apellidos"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '25ch' }}
                    onChange={()=>setNombreCompleto(nombreCompleto)}
                    value={nombreCompleto}
                />

                <TextField
                    label="Email"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '25ch' }}
                    onChange={()=>setEmail(email)}
                    value={email}
                    />
                <TextField
                    label="Pais del Cliente"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '25ch' }}
                    />

                <FormControl fullWidth>
                    <InputLabel htmlFor="outlined-adornment-amount">Moneda</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        sx={{ m: 1, width: '25ch' }}
                        // value={age}
                        label="Age"
                        value={moneda}
                        // onChange={handleChange}
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
                        label="Age"
                        // onChange={handleChange}
                        >
                        <MenuItem value={"efectivo"}>Efectivo</MenuItem>
                        <MenuItem value={"credito"}>Credito</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="outlined-adornment-amount">Monto</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        sx={{ m: 1, width: '25ch' }}
                        value={values.amount}
                        onChange={handleChange('amount')}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        label="Amount"
                        />
                </FormControl>
            <Button variant="contained">Finalizar Factura</Button>
            </div>

        </Box>
    );
}
