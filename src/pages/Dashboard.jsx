import { Paper, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, TextField, Typography } from "@mui/material"
import React, { useState } from 'react';


export default function Dashboard(){
    return(
        <>
        <DoctorTable />
        </>
    )
}


function createPatientData(expediente, nombre, edad, contacto, poliza, sangre, dpi){
        return {expediente, nombre, edad, contacto, poliza, sangre, dpi};
}
const patientData = [
    createPatientData('6001','Juan Pérez', 44,'123456789','O+','1234567890123','1236554789090'),
    createPatientData('6002', 'Ana Gómez', 36, '987654321', 'A-', '3216549870123', '0987654321098'),
    createPatientData('6003', 'Luis Martínez', 52, '456789123', 'B+', '4567891234567', '4567891234567'),
    createPatientData('6004', 'María Rodríguez', 29, '654321987', 'AB-', '7894561234567', '6543219876543'),
    createPatientData('6005', 'Carlos Fernández', 41, '321456987', 'O-', '1237894567890', '3214569871234'),
    createPatientData('6006', 'Laura López', 33, '852741963', 'A+', '4561237894567', '8527419632587')
]

function DoctorTable() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = patientData.filter(row => {
        return (
            row.expediente.toString().includes(searchTerm) ||
            row.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            row.edad.toString().includes(searchTerm) ||
            row.contacto.includes(searchTerm) ||
            row.poliza.includes(searchTerm) ||
            row.sangre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            row.dpi.includes(searchTerm)
        );
    });

    return (
        <div>
            <TextField
                label="Buscar"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={handleSearchChange}
                value={searchTerm}
            />
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Expediente</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Edad</TableCell>
                            <TableCell>Contacto</TableCell>
                            <TableCell>Tipo de sangre</TableCell>
                            <TableCell>Póliza</TableCell>
                            <TableCell>DPI</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredData.map((row) => (
                            <TableRow
                                key={row.expediente}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component='th' scope="row">{row.expediente}</TableCell>
                                <TableCell>{row.nombre}</TableCell>
                                <TableCell>{row.edad}</TableCell>
                                <TableCell>{row.contacto}</TableCell>
                                <TableCell>{row.poliza}</TableCell>
                                <TableCell>{row.sangre}</TableCell>
                                <TableCell>{row.dpi}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}