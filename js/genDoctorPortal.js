console.log('HELLO DOCTOR');

// MOULE TO HANDLE GETTING DATA FROM DATABASE
const Database = (function() {

    // PUBLIC METHOD
    return{

    };
})();

// MODULE TO HANDLE BUSINESS LOGIC
const Logic = (function() {

    // PUBLIC METHOD
    return{

    };
})();

// MODULE TO HANDLE THE USER INTERFACE
const UI = (function() {
    // OBJECT TO HOLD ALL CLASS AND ID SELECTORS FROM UI
    const UISelector = {
      notificationBell: '.fa-bell-o',
      notificationCircle: '.fa-circle',
      hiddenNotificationBoard: '.hidden-notification-board',
    };

    // PUBLIC METHOD
    return{
      getUiSelectors: function() {
          return UISelector;
      },

      closeNotificationBar: function(bar) {
        document.querySelector(bar).style.display = 'none';
      },

      openNotificationBar: function(circle, bar) {
        document.querySelector(circle).style.display = 'none';
        document.querySelector(bar).style.display = 'block';   
      },

    };
})();

// MODULE TO ACT AS CENTRAL CONTROL FOR OTHER MODULES
const Controller = (function(UI, Logic, Database) {
    let uiSelectors = UI.getUiSelectors();
    let log = Logic;
    let db = Database;

    // HOLDS ALL EVENT LISTNERS
    const loadEventLitners = function() {
        document.querySelector(uiSelectors.notificationBell).addEventListener('click', toggleNotifyBar);
    };

    // notify function
    const toggleNotifyBar = function(e) {
        let pin = e.target.classList;
        // console.log(pin);

        if(pin.contains('active')) {
            UI.openNotificationBar(uiSelectors.notificationCircle, uiSelectors.hiddenNotificationBoard);
            pin.remove('active');
        } else {
            UI.closeNotificationBar(uiSelectors.hiddenNotificationBoard);
            pin.add('active');
        }
    
    };

    // PUBLIC METHOD
   return {
       init: function() {
        loadEventLitners();   
       }
   };
})(UI, Logic, Database);

// INITIALIZE APP CONTROLLER
Controller.init();