// Component to listen for environment menu clicks and notify state with an event.
AFRAME.registerComponent('environment-changer', {
  schema: {
    setBackground: {type: 'string', default: 'levant'}
  },
  
  init: function () {
    this.el.addEventListener('click', (evt) => {
      this.el.sceneEl.emit('environmentSet', this.data.setBackground);
    });
  }
});
