AFRAME.registerComponent('ccontroller', {

  dependencies:['raycaster'],
  
  
  init: function() {  
    
    self = this;
    var el = this.el
    
    el.addEventListener('click', function(e) { 
      e.detail.intersectedEl.components.button.onClick();
    })
    
    
    
    el.addEventListener('mousedown', function(e) {
      e.detail.intersectedEl.components.button.onDown();
      this.previous = e.detail.intersectedEl;
    })
    
    el.addEventListener('mouseup', function(e) {
      this.previous.components.button.onUp();
    })
    
  }


})