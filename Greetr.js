
(function(global, $){
    
    let Greetr = function (firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    };
    
    let supportedLangs = ['en', 'es'];
    
    let greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    
    let formalGreetings = { 
        en: 'Greetings',
        es: 'Saludos'
    };
    
    let logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };
    
    Greetr.prototype = {
        fullName: function() {
            return this.firstname + ' ' + this.lastname;
        },
        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },
        greeting: function() { return greetings[this.language] + ' ' + this.firstname + '!'; },
        formalGreeting: function() { return formalGreetings[this.language] + ', ' + this.fullName(); },
        greet: function(formal) {
            let msg = formal ? this.formalGreeting() : this.greeting();
            if(console) console.log(msg);
            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }
            
            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },
        setLang: function(lang) {
            this.language = lang;
            this.validate();
            
            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },
        setGreetIn: function(element, formal) {
            if (!$) { throw "jQuery didn't load"; }
            if (!element) { throw "Missing element selector"; }
            
            let msg = formal ? this.formalGreeting() : this.greeting();
            $(element)[0].innerText = msg;
            
            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        }
    };
    
    Greetr.init = function(firstname, lastname, language) {
        let self = this;
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';
        
        self.validate();
    };
    
    Greetr.init.prototype = Greetr.prototype;
    
    global.greetr = global.G$ = Greetr;
}(window, jQuery));