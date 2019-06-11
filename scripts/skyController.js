
AFRAME.registerComponent('skycontroller', {

  init: function(){},

  update: function() {},
  
  
  setSrc: function(src) {
    AFRAME.utils.entity.setComponentProperty(this.el, 'material.src', src);
  },

})