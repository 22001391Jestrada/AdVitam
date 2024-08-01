create table solicitud(
	idSolicitud SERIAL PRIMARY KEY,
	nombre varchar(100),
	telefono integer,
	mensaje varchar(255)
)

CREATE TABLE Paciente (
    Expediente INT PRIMARY KEY,
    Fecha DATE,
    NombreCompleto VARCHAR(255),
    EstadoCivil VARCHAR(100),
    Profesion VARCHAR(100),
    FechaNacimiento DATE,
    Edad INT,
    Direccion VARCHAR(255),
    TelefonoCasa VARCHAR(20),
    Celular VARCHAR(20),
    CelularEsposo VARCHAR(20),
    ReferidoPor VARCHAR(255),
    Email VARCHAR(100),
    SeguroMedico VARCHAR(100),
    PolizaNumero VARCHAR(50),
    Certificado VARCHAR(50),
    TipoSangrePaciente VARCHAR(10),
    TipoSangreEsposo VARCHAR(10),
    DPI VARCHAR(50),
    NombreEsposo VARCHAR(255),
    DatosFacturacion VARCHAR(255),
    Nit VARCHAR(50)
);
