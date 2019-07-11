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

// Component to activate the Spectator Camera on keyboard clicks
        AFRAME.registerComponent('spectator', {
          init: function () {
          var observer = document.querySelector('#observerCamera');
          // var mainCam = document.querySelector('#mainCamera');

        window.addEventListener('keydown', function (evt) {
          // Alt + Ctrl + O: Shorcut to toggle the spectator camera
          var SpectatorOn = evt.keyCode === 79 && evt.ctrlKey && evt.altKey;
          var SpectatorOff = evt.keyCode === 80 && evt.ctrlKey && evt.altKey;

          if (SpectatorOn) {
            observer.setAttribute('camera', 'active', true);
           // mainCam.setAttribute('camera', 'active', false);
          } else if (SpectatorOff) {
            observer.setAttribute('camera', 'active', false);
           // mainCam.setAttribute('camera', 'active', true);
          }
        });
        }
        });

// Component used to play/pause videos on click
      AFRAME.registerComponent('videohandler',{
         schema: {
            src: {type: 'string', default: '#jericho_vid'}
          },
        
         init: function(){
         let el = this.el;
         let vid = document.querySelector(this.data.src);
         let playing = false;
         vid.pause();
         el.addEventListener('click', function(){
           if(!playing) {
            vid.play();
         } else {
            vid.pause();
         }
         playing = !playing;
         });
        }
      });
    
// Component used to play/pause audio on click
      AFRAME.registerComponent('audiohandler', {
         init:function() {
         let playing = false;
         let audio = this.el.components.sound;


         this.el.addEventListener('click', () => {

         if(!playing) {
            audio.playSound();
         } else {
            audio.pauseSound();

         }
         playing = !playing;
         });
         }
         });

// Component used to activate the 360 video when we are in the video's environment
        AFRAME.registerComponent('kafr-video',{
        init:function(){

        document.querySelector('#kafr-qaddam_vid').pause();

        this.el.addEventListener('click', () => {
          if (state.background === 'kafr'){
          document.querySelector('#kafr-qaddam_vid').play();
        } else {
          document.querySelector('#kafr-qaddam_vid').pause();
        }
        });

        }
        });


// Component used to make entities visible based on mouse entry/ exit
        AFRAME.registerComponent('listener', {
          init: function() {
            this.el.addEventListener('mouseenter', (e) => {
              this.el.setAttribute('visible', true);
            })
            this.el.addEventListener('mouseleave', (e) => {
              this.el.setAttribute('visible', false);
            })
          }
        });

// Component used to make new users spawn in a circle radius
        AFRAME.registerComponent('spawn-in-circle', {
          schema: {
            radius: {type: 'number', default: 1}
          },

          init: function() {
            var el = this.el;
            var center = el.getAttribute('position');

            var angleRad = this.getRandomAngleInRadians();
            var circlePoint = this.randomPointOnCircle(this.data.radius, angleRad);
            var worldPoint = {x: circlePoint.x + center.x, y: center.y, z: circlePoint.y + center.z};
            el.setAttribute('position', worldPoint);
            console.log('world point', worldPoint);

            var angleDeg = angleRad * 180 / Math.PI;
            var angleToCenter = -1 * angleDeg + 90;
            var angleRad = THREE.Math.degToRad(angleToCenter);
            el.object3D.rotation.set(0, angleRad, 0);
            console.log('angle deg', angleDeg);
          },

          getRandomAngleInRadians: function() {
            return Math.random()*Math.PI*2;
          },

          randomPointOnCircle: function (radius, angleRad) {
            var x = Math.cos(angleRad)*radius;
            var y = Math.sin(angleRad)*radius;
            return {x: x, y: y};
          }
        });

// Component used to link somebody to a website
        AFRAME.registerComponent('website-link', {
          schema: {
            url: {default: ''}
          },

          init: function () {
            var data = this.data;
            var el = this.el;

            el.addEventListener('click', function () {
              window.open(data.url, '_blank');
            });
          }
        });        


// Component to activate the Sharing Links on keyboard clicks
        AFRAME.registerComponent('share-to', {
          init: function () {
          var screenshot = document.querySelector('#Screenshot');
          screenshot.setAttribute('visible', false);
          
        window.addEventListener('keydown', function (evt) {
          // Alt + Ctrl + O: Shortcut to toggle the spectator camera
          var ShareOn1 = evt.keyCode === 83 && evt.ctrlKey && evt.altKey;
          var ShareOn2 = evt.keyCode === 83 && evt.ctrlKey && evt.altKey && evt.shiftKey;
          var ShareOff = evt.keyCode === 27 && evt.ctrlKey && evt.altKey;

          if (ShareOn1 || ShareOn2) {
            screenshot.setAttribute('visible', true);
           // mainCam.setAttribute('camera', 'active', false);
          } else if (ShareOff) {
            screenshot.setAttribute('visible', false);
           // mainCam.setAttribute('camera', 'active', true);
          }
        });
        }
        });
