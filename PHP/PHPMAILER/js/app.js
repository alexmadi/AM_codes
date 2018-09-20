

var editor = null;

initCodeMirror();
initializeEvents();

function initCodeMirror() {
    editor = CodeMirror.fromTextArea($('.js-textarea')[0], {
        lineNumbers: true,
        mode : "xml",
        htmlMode: true
    });
    
    editor.setSize(1700, 550);
}

function initializeEvents() {
    $('.js-form__submit').click(function(event) {
        var $form = $(this).closest('.js-form');

        if (editor) {
            if ($('.js-email-field').val().length === 0 || editor.getValue().length === 0) {
                return;
            }
        } else {
            if (!$form[0].checkValidity()) {
                return;
            }
        }

        event.preventDefault();

        // $form.serialize(),

        // data:  {
        //     'fieldEmail': $('.js-email-field').val(),
        //     'fieldHTML': editor.getValue()
        // },

        $.ajax({
            method: "POST",
            dataType: 'html',
            url: $form[0].action,
            type: 'POST',
            data:  {
                'fieldEmail': $('.js-email-field').val(),
                'fieldHTML': editor.getValue()
            },
            success: function(response) {
                //console.log('success message' + response);
            },
            error: function(req, err) {
                //console.log('error message' + err);
            }
        })
        .done(function (response) {
            var responseJSON = {};

            try {
                responseJSON = JSON.parse(response);
            } catch(e) {
                console.log(e); // error in the above string (in this case, yes)!
            }

            if (responseJSON.success) {
                $form.find('.js-form__success').empty().html(responseJSON.response);
            } else {
                $form.find('.js-form__error').empty().html(responseJSON.response);
            }

            setTimeout(() => {
                $form.find('.js-form__success .js-message').addClass('h-invisible');
             }, 5000);
        });
    });

    $('.js-clear-email').click(function(event) {
        $('.js-email-field').val('');
    });

    $('.js-clear-html').click(function(event) {
        editor.setValue('');
    });
}