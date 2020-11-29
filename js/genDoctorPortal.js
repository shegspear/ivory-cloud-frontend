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
      weightFieldBtn: '.weight-field-btn',
      bloodFieldBtn: '.blood-field-btn',
      genotypeFieldBtn: '.genotype-field-btn',
      genderList: '.gender-list',
      ageList: '.age-list',
      heightList: '.height-list',
      weightList: '.weight-list',
      bloodList: '.blood-list',
      genotypelist: '.genotype-list',
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
        } else if (field === '.age-list') {
            document.querySelector(field).style.height = `150px`; 
        } else if (field === '.height-list') {
            document.querySelector(field).style.height = `220px`; 
        } else if (field === '.weight-list') {
            document.querySelector(field).style.height = `220px`;  
        } else if (field === '.blood-list') {
            document.querySelector(field).style.height = `150px`;
        } else if (field === '.genotype-list') {
            document.querySelector(field).style.height = `110px`; 
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
        // LISTNER FOR AGE FIELD ACCORDION BUTTON
        document.querySelector(uiSelectors.ageFieldBtn).addEventListener('click', toggleAgeField);
        // LISTNER FOR HEIGHT FIELD ACCORDION BUTTON
        document.querySelector(uiSelectors.heightFieldBtn).addEventListener('click', toggleHeightField);
        // LISTNER FOR WEIGHT FIELD ACCORDION BUTTON
        document.querySelector(uiSelectors.weightFieldBtn).addEventListener('click', toggleWeightField);
        // LISTNER FOR BLOOD FIELD ACCORDION BUTTON
        document.querySelector(uiSelectors.bloodFieldBtn).addEventListener('click', toggleBloodField);
        // LISTNER FOR GENOTYPE FIELD ACCORDION BUTTON
        document.querySelector(uiSelectors.genotypeFieldBtn).addEventListener('click', toggleGenotypeField);
    };

    // filter field control function
    const filterFieldControl = function(pin, selector) {
        if(pin.contains('open')) {
            UI.openAccordion(selector);
            pin.remove('open');
        } else {
            UI.closeAccordion(selector);
            pin.add('open');
        }
    };

    // toggle genotype field funtion
    const toggleGenotypeField = function(e) {
        e.preventDefault;
        let pin = e.target.classList;
        filterFieldControl(pin, uiSelectors.genotypelist);
    }

    // toggle blood field funtion 
    const toggleBloodField = function(e) {
        e.preventDefault();
        let pin = e.target.classList;
        filterFieldControl(pin, uiSelectors.bloodList);
    };

    // toggle weight field function 
    const toggleWeightField = function(e) {
        e.preventDefault();
        let pin = e.target.classList;
        filterFieldControl(pin, uiSelectors.weightList);
    };

    // toggle height field function
    const toggleHeightField = function(e) {
        e.preventDefault();
        let pin = e.target.classList;
        filterFieldControl(pin, uiSelectors.heightList);
    };

    // toggle Age field function 
    const toggleAgeField = function(e) {
        e.preventDefault();
        let pin = e.target.classList;
        filterFieldControl(pin, uiSelectors.ageList);
    };

    // toggle Gender Field function
    const toggleGenderField = function(e) {
        e.preventDefault();
        let pin = e.target.classList;
        filterFieldControl(pin, uiSelectors.genderList);
    };

    // toggle Filter Board function
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

    // toggle Search Btn Filter funtion
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

    // toggle Notify Bar function
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