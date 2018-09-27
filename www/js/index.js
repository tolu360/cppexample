var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        this.chargeAccess();
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    chargeAccess: function() {
        window.PaystackPlugin.chargeCardWithAccessCode(
            function(resp) {
              // A txn ref is obtained, do your thang!
              console.log('charge successful: ', JSON.stringify(resp));
            },
            function(resp) {
              // Something went wrong, oops - perhaps an invalid card.
              console.log('charge failed: ', JSON.stringify(resp));
            },
            {
              cardNumber: '4123450131001381', 
              expiryMonth: '12', 
              expiryYear: '19', 
              cvc: '883',
              accessCode: 'udpg4phkd0w4lc8'
          });
    },

    chargeDirect: function() {
        window.PaystackPlugin.chargeCard(
            function(resp) {
              // A txn ref is obtained, do your thang!
              console.log('charge successful: ', JSON.stringify(resp));
            },
            function(resp) {
              // Something went wrong, oops - perhaps an invalid card.
              console.log('charge failed: ', JSON.stringify(resp));
            },
            {
              cardNumber: '4123450131001381', 
              expiryMonth: '12', 
              expiryYear: '19', 
              cvc: '883',
              email: 'iOS@postman.io',
              amountInKobo: 150000,
          });
    }
};

app.initialize();