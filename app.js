(function (){
    const loginButton = $('#login').on("click", function(e) {
        e.preventDefault();
        const lang = $('#lang').val();
        $('#logindiv').hide();
        G$("Oscar", "Martinez", lang).setGreetIn('#greeting', true).log();
    });
}());