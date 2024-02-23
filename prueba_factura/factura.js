$(document).ready(function() {
    $("#agregarProducto").click(function() {
        var codigoProducto = $("#codigoProducto").val();
        var descripcionProducto = $("#descripcionProducto").val();
        var cantidad = $("#cantidad").val();
        var precio = $("#precio").val();
        var total = cantidad * precio;
        
        $("#productosAgregados tbody").append("<tr><td>" + codigoProducto + "</td><td>" + descripcionProducto + "</td><td>" + cantidad + "</td><td>" + precio + "</td><td>" + total + "</td></tr>");
    });

    $("#facturaForm").submit(function(event) {
        event.preventDefault();

        var formData = $(this).serialize();

        $.ajax({
            type: "POST",
            url: "procesar_factura.php",
            data: formData,
            success: function(response) {
                $("#resumenFactura").html(response);
            }
        });
    });
});
