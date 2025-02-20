/***
sine-waves.js
https://github.com/isuttell/sine-waves
 ***/

// var waveColor = 'rgba(0,134,141,1)';

var waveColor = 'rgba(216,35,47,1)';

var waves = new SineWaves({
  el: document.getElementById('waves'),
  
  speed: 10,
  
  width: function() {
    return $(window).width();
  },
  
  height: function() {
    return $(window).height();
  },
  
  ease: 'SineInOut',
  
  wavesWidth: '100%',
  
  waves: [
    {
      timeModifier: 4,
      lineWidth: 3,
      amplitude: 0,
      wavelength: 4
    }
  ],
 
  // Resize
  resizeEvent: function() {
    var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
    gradient.addColorStop(0, waveColor);
    
    var index = -1;
    var length = this.waves.length;
	  while(++index < length){
      this.waves[index].strokeStyle = gradient;
    }
    
    // Clean Up
    index = void 0;
    length = void 0;
    gradient = void 0;
  }
});


// Custom Code
var lineAnimationDelay = 1000,
    increaseDelay      = 1000,
    decreaseDelay      = 1000,
    increaseInterval   = 3,
    decreaseInterval   = 1,
    maxWaveHeight      = 50;

setTimeout('lineAnimation()', lineAnimationDelay);

var lineAnimation = function() {
  
  $( ".overlay-bg" ).animate({
    width: "100%"
  }, {
    duration: 1000,
    specialEasing: {
      width: "linear"
    },
    complete: function() {
      setTimeout('increaseWave()', increaseDelay);
    }
  });
}

var increaseWave = function() {
  $('.overlay').removeClass('show');
  $('.canvas-container').removeClass('hide');
  var increaseWaveSize = setInterval( function() {
    if( waves.waves[0].amplitude < maxWaveHeight ) {
      waves.waves[0].amplitude += 1;
    } else {
      clearInterval(increaseWaveSize);
      setTimeout('decreaseWave()', decreaseDelay);
    }
  }, increaseInterval );
}

var decreaseWave = function() {
  var decreaseWaveSize = setInterval( function() {
    if( waves.waves[0].amplitude > 0 ) {
      waves.waves[0].amplitude -= 1;
    } else {
      clearInterval(decreaseWaveSize);
      $('.overlay').addClass('show');
      $('.canvas-container').addClass('hide');
      setTimeout(function() {
        $('.overlay-bg').addClass('fill');
        $('form').addClass('show');
      }, 100);
    }
  }, decreaseInterval );
}