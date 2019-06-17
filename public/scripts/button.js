/** Button Component
 * javascript interpretation of Unity's button as part of
 * their ui system
 * 
 */

AFRAME.registerComponent('button', {
  
  dependencies: ['raycaster'],
  
  schema: {
    onClick: [{type: 'string'}],
    onDown: [{type: 'string'}],
    onUp: [{type: 'string'}]
  },

  init: function() {
    this.parseString();
  },
  
  update: function() {
    this.parseString();
  },
  
  onClick: function() {
    var click = this.click;
    var i, len;
    for(i = 0, len = click.length; i < len; ++i) {
      var {
        object,
        component,
        func,
        param
      } = click[i];
      
      object.components[component][func](param);
      
    }
  
  },
  
  onDown: function() {
    var down = this.down;
    var i, len;
    console.log(down);
    for(i = 0, len = down.length; i < len; ++i) {
      var {
        object,
        component,
        func,
        param
      } = down[i];
      
      if(param == undefined) {
        object.components[component][func]();
      } else {
        object.components[component][func](param);
      }
      
    }
  },
  
  onUp: function() {
    var up = this.up;
    var i, len;
    
    for(i = 0, len = up.length; i < len; ++i) {
      var {
        object,
        component,
        func,
        param
      } = up[i];
      
      if(param == undefined) {
        object.components[component][func]();
      } else {
        object.components[component][func](param);
      }
      
    }
  },
  
  parseString: function() {
    
    var data = this.data;
    var i, len;
    
    this.click = [];
    this.down = [];
    this.up = [];
    
    for(i = 0, len = data.onClick.length; i < len; ++i) {
      var parsed = data.onClick[i].split(" ");
      
      if(parsed.length < 3) {
        console.warn('malformed input');
        continue;
      }
      
      this.click.push({});
      this.click[i]['object'] = document.querySelector(parsed[0]);
      this.click[i]['component'] = parsed[1];
      this.click[i]['func'] = parsed[2];
      this.click[i]['param'] = parsed[3];
    }
    
    for(i = 0, len = data.onDown.length; i < len; ++i) {
      var parsed = data.onDown[i].split(" ");
      
      if(parsed.length < 3) {
        console.warn('malformed input');
        continue;
      }
      
      this.down.push({});
      this.down[i]['object'] = document.querySelector(parsed[0]);
      this.down[i]['component'] = parsed[1];
      this.down[i]['func'] = parsed[2];
      this.down[i]['param'] = parsed[3];
    }
    
    for(i = 0, len = data.onUp.length; i < len; ++i) {
      var parsed = data.onUp[i].split(" ");
      
      if(parsed.length < 3) {
        console.warn('malformed input');
        continue;
      }
      
      this.up.push({});
      this.up[i]['object'] = document.querySelector(parsed[0]);
      this.up[i]['component'] = parsed[1];
      this.up[i]['func'] = parsed[2];
      this.up[i]['param'] = parsed[3];
    }
    
  
   
  }
  
})