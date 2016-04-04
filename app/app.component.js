(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'pet-app',
      template: '<div class="app">My First Angular 2 App</div>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));