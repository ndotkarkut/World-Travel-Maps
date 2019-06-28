
// aframe-state-component definition.
AFRAME.registerState({
  // Initial state of our application. We have the current environment and the active menu.
  initialState: {
    background: 'main',
    menu: 'main',
        
  },
  
  // State cahnges are done via events and are handled here.
  handlers: {
    
    
    // This is emitted by the environment-changer component.
    // The environment to cahnge to is passed by the event detail.
    environmentSet: function (state, setBackground) {
      state.background = setBackground;
      
      // Change back to main menu after environment set just back changing this state variable!
      // state.menu = 'main';
    },
    menuBack: function (state) {
     state.menu = 'main';  
      
     state.background = 'main';
    },
    // This is emitted and proxie from the main menu "Change environment" button.
    // Once the state is changed, the application will react via the binds, swapping the active menu, and toggling buttons.
    menuBethlehem: function (state) {
      state.menu = 'bethlehem';
    },
    menuRamallah: function (state) {
      state.menu = 'ramallah';
    },
    menuJericho: function (state) {
      state.menu = 'jericho';
    },
    menuDeadsea: function (state) {
      state.menu = 'deadsea';
    },
    menuHebron: function (state) {
      state.menu = 'hebron';
    },
    menuQalqilya: function (state) {
      state.menu = 'qalqilya';
    },
    menuQalandia: function (state) {
      state.menu = 'qalandia';
    },
    menuTelaviv: function (state) {
      state.menu = 'telaviv';
    },
    menuKafr: function (state) {
      state.menu = 'kafrqaddam';
    },
    menuJerusalem: function (state) {
      state.menu = 'jerusalem';
    },
    menuBirzeit: function (state) {
      state.menu = 'birzeit';
    }
  }
})
