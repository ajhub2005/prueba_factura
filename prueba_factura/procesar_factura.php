<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "prueba_facturacion";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener el último número de factura utilizado
$sql = "SELECT MAX(id_factura) AS max_factura FROM facturas";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $ultimoNumeroFactura = $row["max_factura"];
    $numeroFactura = $ultimoNumeroFactura + 1;
} else {
    // Si no hay facturas en la base de datos, comenzamos desde el número 1
    $numeroFactura = 1;
}

// Procesar otros datos del formulario...
// ...

// Cerrar conexión
$conn->close();

// Devolver el número de factura único
echo "Número de Factura: " . $numeroFactura;
?>
