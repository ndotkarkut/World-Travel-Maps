

AFRAME.registerComponent('lightcontroller', {

  
  init: function(){
  },
  update: function() {},
  
  
  setIntensity: function(intensity) {
    AFRAME.utils.entity.setComponentProperty(this.el, 'light.intensity', intensity);
  },

  
  

})