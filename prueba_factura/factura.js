$(document).ready(function() {
    // Evento clic en una celda de la tabla para habilitar la edición
    $("#productosAgregados tbody").on("click", "td", function(event) {
        // Evitar que se active la edición si se hace clic en el botón "Actualizar"
        if (!$(event.target).is("button")) {
            if (!$(this).hasClass("editando")) {
                // Obtener el valor actual de la celda
                var currentValue = $(this).text();

                // Crear un input para editar el valor
                var input = $("<input type='text'>");
                input.val(currentValue);

                // Reemplazar el texto con el input
                $(this).html(input);

                // Agregar la clase de edición a la celda
                $(this).addClass("editando");

                // Enfocar el campo de entrada
                input.focus();

                // Evento de presionar la tecla "Enter" para guardar los cambios
                input.keypress(function(event) {
                    if (event.which === 13) { // 13 es el código de la tecla "Enter"
                        // Obtener el nuevo valor del campo de entrada
                        var newValue = input.val();

                        // Actualizar el contenido de la celda
                        $(this).parent().text(newValue);

                        // Eliminar la clase de edición
                        $(this).parent().removeClass("editando");
                    }
                });
            }
        }
    });

    // Evento de clic en el botón de agregar producto
    $("#agregarProducto").click(function() {
        // Aquí puedes agregar la lógica para agregar un nuevo producto a la tabla
        var codigoProducto = $("#codigoProducto").val();
        var descripcionProducto = $("#descripcionProducto").val();
        var cantidad = $("#cantidad").val();
        var precio = $("#precio").val();
        var total = cantidad * precio;

        $("#productosAgregados tbody").append("<tr><td>" + codigoProducto + "</td><td>" + descripcionProducto + "</td><td>" + cantidad + "</td><td>" + precio + "</td><td>" + total + "</td></tr>");
    });

    // Evento de envío del formulario de factura
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
