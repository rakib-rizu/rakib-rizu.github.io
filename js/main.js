var scroll = new SmoothScroll('a[href*="#"]');

$.validator.setDefaults({
    highlight: function(element) {
        $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function(element) {
        $(element).addClass("is-valid").removeClass("is-invalid");
    },

    //add
    errorElement: 'span',
    errorClass: 'text-danger',
    errorPlacement: function(error, element) {
        if(element.parent('.form-control').length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }
    // end add
});

$('#sampleForm').validate();

function sampleFormSubmit(e, $this) {
    e.preventDefault();
    if ($this.valid()) {
        Swal.fire(
            'Success!',
            'Form successfully submitted!',
            'success'
        );
    }
}