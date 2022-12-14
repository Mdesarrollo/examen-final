$(document).ready(function(){
    $(".formulario").validate({
        rules:{
            nombre:{required:true, minlength:6},
            password:{required:true, minlength:3},
            email:{required:true}
        },
        messages:{
            nombre:{
                required:"el campo es obligatorio",
                minlength:"la longitud del campo debe ser minimo de 6 caracteres"
            },
            password:{
                required:"el campo es obligatorio",
                minlength:"la longitud del campo debe de ser minimo de 3 cracteres "
            },
            email:{
                required:"el campo es obligatorio"

            }
        }
    });
});

function Inicia(){
    Swal.fire({
        icon: 'question',
        title: 'Bienvenido',
        showConfirmButton: false,
        text: 'Por favor seleccionar el enlace de la parte inferior!',
        footer: '<a href="https://youtu.be/BtLSaxRnIhc">Inicia sesion</a>'
    });
}