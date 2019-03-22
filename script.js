$(function () {
    var form = $('#formularioAjax');
    var mensagem = $('mensagem');

    $(form).submit(function (event) {
        {
            event.preventDefault();
            var formData = $(form).serialize();
            // Submit the form using AJAX.
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData,
                success: function (data) {
                    $('#resultado').html(data);
                }
            })
        }
    });
});



//$('.row') will select any element with class="row"
//
// $('#row') will select the element with id=row


