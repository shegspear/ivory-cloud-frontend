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
      searchBtnType: '.search-type-btn',
      searchBtnTypeFilter: '.hidden-search-btn-type-filter',
      filterSearchBtn: '.search-filter-btn',
      hiddenFilterBoard: '.hidden-filter-search-board',
      genderFieldBtn: '.gender-field-btn',
      ageFieldBtn: '.age-field-btn',
      heightFieldBtn: '.height-field-btn',
      genderList: '.gender-list',
      ageList: '.age-list',
      heightList: '.height-list',
    };

    // PUBLIC METHOD
    return{
      // FUNCTION RETUNRS ALL AVAILABLE CLASSES AND ID'S
      getUiSelectors: function() {
          return UISelector;
      },

      openAccordion: function(field) {
        if(field === '.gender-list') {
            document.querySelector(field).style.height = `75px`;
        }
       
      },

      closeAccordion: function(field) {
          document.querySelector(field).style.height = `1px`;
      },

      // FUNCTION CLOSES DESIGNATED DIV'S
      closeBar: function(bar) {
        document.querySelector(bar).style.display = 'none';
      },

      // FUNCTION OPENS ANY DESIGNATED DIV'S
      openBar: function(bar, circle) {
          if( bar && !circle) {
            document.querySelector(bar).style.display = 'block'; 
          } else if (bar && circle) {
            document.querySelector(circle).style.display = 'none';
            document.querySelector(bar).style.display = 'block'; 
          }

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
        // LISTNER FOR NOTIFIICATION BELL
        document.querySelector(uiSelectors.notificationBell).addEventListener('click', toggleNotifyBar);
        // LISTNER FOR THE SEARCH TYPE BUTTON
        document.querySelector(uiSelectors.searchBtnType).addEventListener('click', toggleSearchBtnFilter);
        // LISTNER FOR THE FILTER SEARCH BUTTON
        document.querySelector(uiSelectors.filterSearchBtn).addEventListener('click', toggleFilterBoard);
        // LISTNER FOR GENDER FIELD ACCORDION BUTTON
        document.querySelector(uiSelectors.genderFieldBtn).addEventListener('click', toggleGenderField);
       
    };

    // toggleGenderField function
    const toggleGenderField = function(e) {
        e.preventDefault();
        let pin = e.target.classList;
        if(pin.contains('open')) {
            UI.openAccordion(uiSelectors.genderList);
            pin.remove('open');
        } else {
            UI.closeAccordion(uiSelectors.genderList);
            pin.add('open');
        }
    };

    // toggleFilterBoard function
    const toggleFilterBoard = function(e) {
        e.preventDefault();
        let pin = e.target.classList;

        if(pin.contains('active')) {
            UI.openBar(uiSelectors.hiddenFilterBoard);
            pin.add('text-info');
            pin.remove('active');
        } else {
            UI.closeBar(uiSelectors.hiddenFilterBoard);
            pin.remove('text-info');
            pin.add('active');
        }
    };

    // toggleSearchBtnFilter funtion
    const toggleSearchBtnFilter = function(e) {
        e.preventDefault();
        let pin = e.target.classList;
        let pin2 = e.target.children[0].classList;

        if(pin.contains('active')) {
            UI.openBar(uiSelectors.searchBtnTypeFilter);
            pin.remove('active');
            pin2.remove('fa-chevron-up');
            pin2.add('fa-chevron-down');
        } else {
            UI.closeBar(uiSelectors.searchBtnTypeFilter);
            pin.add('active');
            pin2.remove('fa-chevron-down');
            pin2.add('fa-chevron-up');
        }

    };

    // toggleNotifyBar function
    const toggleNotifyBar = function(e) {
        let pin = e.target.classList;
        // console.log(pin);

        if(pin.contains('active')) {
            UI.openBar(uiSelectors.hiddenNotificationBoard, uiSelectors.notificationCircle);
            pin.add('text-info');
            pin.remove('active');
        } else {
            UI.closeBar(uiSelectors.hiddenNotificationBoard);
            pin.remove('text-info');
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