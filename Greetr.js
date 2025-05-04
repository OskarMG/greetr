
(function(global, $){
    
    let Greetr = function (firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    }
    
    Greetr.prototype = {};
    
    Greetr.init = function(firstname, lastname, language) {
        let self = this;
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';
    }

}(window, jQuery));