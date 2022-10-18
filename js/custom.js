$(document).ready(function() {
    $('.form-select').select2();
});
$( '#single-select-field' ).select2( {
    theme: "bootstrap-5",
    selectOnClose: true,
    width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
    placeholder: $( this ).data( 'placeholder' ),
} );
$("select").on("select2:open", function(event) {
    $('input.select2-search__field').attr('placeholder', 'Search Products');
    $(".select2-results:not(:has(a))").append('<i class="fa-solid fa-plus"></i><a href="#" style="padding: 6px;height: 20px;display: inline-table;  text-decoration: none; color:#7B7B7B;">Add new product</a>');
});

