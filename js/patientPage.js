console.log('running patient page JS file');

// MODULE TO HANDLE ANY BUSINESS LOGIC
const Logic = (function() {

  return{
  
  };
})();

// MODULE TO HANDLEE THE 
const UI = (function() {
      // Variable holding all classnames and ids
      const UISelector = {
          newVisitBtn: '.new-visit-btn',
          rootHead: '#root-head',
          rootBody: '#root-body',
          dashBoardLink: '.dashboard-link',
          newVisitBtn: '.new-visit-btn',
          nurseStateBtn: '.nurse-state-btn',
          doctorStateBtn: '.doctor-state-btn',
      };

      // THE STATE PATTERN STARTS HERE
      // function to initialize the page state
      const PageState = function() {
          let currentState = new initialState(this);

          this.init = function() {
            this.change(new initialState);
          };

          this.change = function(state) {
            currentState = state;
          };
      };

      // HEAD TAB HOLDING PATIENT VISIT, APPOINTMENT and SURGERY
      const headTab = `
          <!-- CODES FOR CONTAINER TWO  -->
          <section class="cont-2 d-flex flex-row container my-3">
      
            <div class="cont-2-child-1 mr-3">
                <ul class="container-fluid mt-2 d-flex flex-row">
                    <li>
                      <i class="fa fa-user mt-4 ml-5"></i>
                    </li>
                    
                    <li class="mt-3 ml-4">
                      <p class="h5">Visits</p>
                      <p id="num-visit">104</p>
                    </li>
                </ul>
            </div>
      
            <div class="cont-2-child-2 mx-3">
              <ul class="container-fluid mt-2 d-flex flex-row">
                  <li>
                    <i class="fa fa-medkit mt-4 ml-3"></i>
                  </li>
                  
                  <li class="mt-3 ml-4">
                    <p class="h5">Appointment(s)</p>
                    <p id="num-visit">3</p>
                  </li>
              </ul>
            </div>
      
            <div class="cont-2-child-3 mx-3">
              <ul class="container-fluid mt-2 d-flex flex-row">
                  <li>
                    <i class="fa fa-heartbeat mt-4 ml-3"></i>
                  </li>
                  
                  <li class="mt-3 ml-4">
                    <p class="h5">Surgery</p>
                    <p id="num-visit">2</p>
                  </li>
              </ul>
            </div>
      
          </section>
      `;

      // Initial State
      const initialState = function(page) {
          document.querySelector(UISelector.rootHead).innerHTML = headTab;

          document.querySelector(UISelector.rootBody).innerHTML = `
              <!-- CODES FOR CONTAINER THREE -->
              <section class="cont-3 container my-5">
          
                  <div class="d-flex flex-row justify-content-between">
                      <p class="h5 mt-1 font-weight-bold">
                        Visit Activity
                      </p>
          
                      <button class="new-visit-btn btn btn-light text-info font-weight-bold">
                        NEW VISIT <i class="fa fa-plus-square-o ml-1"></i>
                      </button>
                  </div>
          
                  <table class="table table-hover">
          
                    <thead>
                      <tr>
                        <th scope="col">Doctor</th>
                        <th scope="col">Condition</th>
                        <th scope="col">Date</th>
                        <th scope="col">Visit Time</th>
                        <th scope="col">Email</th>
                      </tr>
                    </thead>
          
                    <tbody>
          
                      <tr>
                        <th scope="row" class="doctor-detail">
                          <img class="doctor-profile-picture" src="./assets/doctor-avatar/doc-avatar.jpg" alt="doctor profile picture">
                          <span class="doctor-name">Dr. Adeolu Kenny</span>
                        </th>
                        <td class="condition">Mumps Stage II</td>
                        <td class="date">Today</td>
                        <td class="visit-time">09:15am - 09:45am </td>
                        <td class="email">example@mail.com</td>
                      </tr>
          
                      <tr>
                        <th scope="row" class="doctor-detail">
                          <img class="doctor-profile-picture" src="./assets/doctor-avatar/doc-avatar.jpg" alt="doctor profile picture">
                          <span class="doctor-name">Dr. Adeolu Kenny</span>
                        </th>
                        <td class="condition">Mumps Stage II</td>
                        <td class="date">Today</td>
                        <td class="visit-time">09:15am - 09:45am </td>
                        <td class="email">example@mail.com</td>
                      </tr>
          
                      <tr>
                        <th scope="row" class="doctor-detail">
                          <img class="doctor-profile-picture" src="./assets/doctor-avatar/doc-avatar.jpg" alt="doctor profile picture">
                          <span class="doctor-name">Dr. Adeolu Kenny</span>
                        </th>
                        <td class="condition">Mumps Stage II</td>
                        <td class="date">Today</td>
                        <td class="visit-time">09:15am - 09:45am </td>
                        <td class="email">example@mail.com</td>
                      </tr>
          
                      <tr>
                        <th scope="row" class="doctor-detail">
                          <img class="doctor-profile-picture" src="./assets/doctor-avatar/doc-avatar.jpg" alt="doctor profile picture">
                          <span class="doctor-name">Dr. Adeolu Kenny</span>
                        </th>
                        <td class="condition">Mumps Stage II</td>
                        <td class="date">Today</td>
                        <td class="visit-time">09:15am - 09:45am </td>
                        <td class="email">example@mail.com</td>
                      </tr>
          
                      <tr>
                        <th scope="row" class="doctor-detail">
                          <img class="doctor-profile-picture" src="./assets/doctor-avatar/doc-avatar.jpg" alt="doctor profile picture">
                          <span class="doctor-name">Dr. Adeolu Kenny</span>
                        </th>
                        <td class="condition">Mumps Stage II</td>
                        <td class="date">Today</td>
                        <td class="visit-time">09:15am - 09:45am </td>
                        <td class="email">example@mail.com</td>
                      </tr>
          
                    </tbody>
          
                  </table>
          
                <div class="text-center mt-5">
                  <button class="btn btn-info px-5 view-all-btn">
                    VIEW ALL
                  </button>
                </div>
          
              </section>
          `;
      };

      // NEW VISIT NURSE STATE
      const nurseState = function() {
        document.querySelector(UISelector.rootHead).innerHTML = headTab;

        document.querySelector(UISelector.rootBody).innerHTML = `
            <!-- CODES FOR CONTAINER FOUR NEW VISIT NURSE STATE-->
            <section class="cont-4 container my-5">
        
                <div class="d-flex flex-row justify-content-evenly ml-5">
        
                    <button class="nurse-state-btn new-visit-state-btn-active btn  mr-2 px-4 py-2">
                      Nurse
                    </button>
        
                    <button class="doctor-state-btn btn  mx-2 px-4 py-2">
                      Doctor
                    </button>
        
                    <button class="lab-state-btn btn  mx-2 px-4 py-2">
                      Lab Scientist
                    </button>
        
                </div>
        
                <div class="nurse-note new-visit-state-note p-5 ">
                    <form>
                      <div class="form-group nurse-note-form">
                        <label for="nurse note type">NOTE TYPE</label>
                        <input type="text" class="form-control nurse-note-type" id="nurse-note-type" aria-describedby="noteType">
                      </div>
        
                      <div class="form-group">
                        <label for="nurse note description">ENTER NOTE ON PATIENT</label>
                        <textarea class="form-control nurse-note-description" name="nurse-note-description" id="nurse-note-desc" cols="30" rows="10"></textarea>
                      </div>
        
                      <button class="btn btn-info submit-nurse-note px-5">ADD NOTE</button>
                    </form>
                </div>
        
            </section>
        `;
      };

      // NEW VISIT DOCTOR STATE
      const doctorState = function(page) {
        document.querySelector(UISelector.rootHead).innerHTML = headTab;

        document.querySelector(UISelector.rootBody).innerHTML = `
            <!-- CODES FOR CONTAINER FIVE NEW VISIT DOCTOR STATE -->
            <section class="cont-5 container my-5">
        
                  <div class="d-flex flex-row justify-content-evenly ml-5">
                    
                    <button class="nurse-state-btn btn mr-2 px-4 py-2">
                      Nurse
                    </button>
        
                    <button class="doctor-state-btn new-visit-state-btn-active btn mx-2 px-4 py-2">
                      Doctor
                    </button>
        
                    <button class="lab-state-btn btn  mx-2 px-4 py-2">
                      Lab Scientist
                    </button>
        
                </div>
        
                <div class="doctor-note new-visit-state-note p-5 ">
                  <form>
                    <div class="form-group doctor-note-form">
                      <label for="doctor note type">NOTE TYPE</label>
                      <input type="text" class="form-control doctor-note-type" id="doctor-note-type" aria-describedby="doctorType">
                    </div>
        
                    <div class="form-group">
                      <label for="doctor note description">ENTER NOTE ON PATIENT</label>
                      <textarea class="form-control doctor-note-description" name="doctor-note-description" id="doctor-note-desc" cols="30" rows="10"></textarea>
                    </div>
        
                    <div class="form-group">
                      <label for="upload picture">Upload picture <i class="fa fa-upload ml-2 text-info"></i></label>
                      <input type="file" class="form-control-file upload-picture" id="upload-picture">
                    </div>
        
                    <div class="d-flex flex-row justify-content-between mt-5">
                      <button class="btn btn-info submit-nurse-note px-5">ADD NOTE</button>
                    </div>
        
                  </form>
              </div>
        
            </section>
        `;
      };

      // NEW VISIT LAB SCI STATE
      const labSciState = function(page) {
        document.querySelector(UISelector.rootHead).innerHTML = headTab;

        document.querySelector(UISelector.rootBody).innerHTML = `
            <!-- CODES FOR CONTAINER SIX NEW VISIT LAB SCIENTIST STATE -->
            <section class="cont-6 container my-5">
      
            <div class="d-flex flex-row justify-content-evenly ml-5">
                          
                <button class="nurse-state-btn btn mr-2 px-4 py-2">
                  Nurse
                </button>
      
                <button class="doctor-state-btn  btn mx-2 px-4 py-2">
                  Doctor
                </button>
      
                <button class="lab-state-btn btn new-visit-state-btn-active  mx-2 px-4 py-2">
                  Lab Scientist
                </button>
      
            </div>
      
            <div class="doctor-note new-visit-state-note p-5 ">
              <form>
                <div class="form-group doctor-note-form">
                  <label for="doctor note type">NOTE TYPE</label>
                  <input type="text" class="form-control doctor-note-type" id="doctor-note-type" aria-describedby="doctorType">
                </div>
      
                <div class="form-group">
                  <label for="doctor note description">TEST</label>
                  <textarea class="form-control doctor-note-description" name="doctor-note-description" id="doctor-note-desc" cols="30" rows="10"></textarea>
                </div>
      
                <div class="form-group">
                  <label for="upload picture">Upload picture <i class="fa fa-upload ml-2 text-info"></i> </label>
                  <input type="file" class="form-control-file upload-picture" id="upload-picture">
                </div>
      
                <div class="d-flex flex-row justify-content-between mt-5">
                  <button class="btn btn-info submit-nurse-note px-5">ADD NOTE</button>
                </div>
      
              </form>
            </div>
      
            </section>
        `;
      };

      // PUBLIC METHODS
      return{
        // function to get all class names and ids from the UI
        getUiSelectors: function() {
            return UISelector;
        },

        // This function sets up the needed in the UI DOM
        getMyState: function(state) {
           if(state === 'initialState') {
            // function to setup the initial state of the page
            const page = new PageState();
            page.change(new initialState);

           } else if (state === 'nurseState') {
            // function to setup new visit nurse state 
            const page = new PageState();
            page.change(new nurseState);

           } else if (state === 'doctorState') {
            // function to setup new visit doctor state
            const page = new PageState();
            page.change(new doctorState);

           } else if (state === 'labSciState') {
            // function to setup new visit doctor state
            const page = new PageState();
            page.change(new labSciState);
           }
        },

      };
})();

// MODULE TO CONTROLL UI AND LOGIC MODULE
const Controller = (function(UI, Logic) {
      // LOAD IN CODE MODULES
      const ui = UI;
      const logic = Logic;

      // LOAD IN UI SELECTORS
      const uiSelectors = ui.getUiSelectors();

      // EVENT LISTNERS
      const loadEventListners = function() {
         // EVENT LITNER FOR THE DASH BORAD LINK
         document.querySelector(uiSelectors.dashBoardLink).addEventListener('click', setDashBoardState);
         // HAD TOO SET UP THIS EVENT LISTNER IN THE ROOT BODY, CAUSE OF BUGS and in hind site DRY
         document.querySelector(uiSelectors.rootBody).addEventListener('click', getState);
      };

      //
      const getState = function(e) {
         let point = e.target;

         console.log(point);

         if(point.classList.contains('new-visit-btn') || point.classList.contains('nurse-state-btn')) {
            ui.getMyState('nurseState');
            
         } else if (point.classList.contains('doctor-state-btn')) {
            ui.getMyState('doctorState');
           
         } else if (point.classList.contains('lab-state-btn')) {
            ui.getMyState('labSciState');

         }
      };

      // set dash board state funtion
      const setDashBoardState = function() {
        ui.getMyState('initialState');
      };

      // PULIC METHODS
      return{
        init: function() {
            ui.getMyState('initialState');
            loadEventListners();
        }
  };
})(UI, Logic);

Controller.init();