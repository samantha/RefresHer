let pomodoro = {
  started : false,
  minutes : 0,
  seconds : 0,
  increment : 0,
  interval : null,
  minutesDom : null,
  secondsDom : null,
  init : function(){
    let self = this;
    this.minutesDom = document.querySelector('#minutes');
    this.secondsDom = document.querySelector('#seconds');
    this.interval = setInterval(function(){
      self.intervalCallback.apply(self);
    }, 1000);
    document.querySelector('#work').onclick = function(){
     self.startWork.apply(self);
    };
  },

  startWork: function() {
    this.resetVariables(25, 0, true);
    this.countdown();
  },

  resetVariables : function(mins, secs, started){
    this.minutes = mins;
    this.seconds = secs;
    this.started = started;
  },

  intervalCallback : function(){
    if(this.seconds == 0)
    {
      if(this.minutes == 0)
      {
        this.timerComplete();
        return;
      }
      this.seconds = 59;
      this.minutes--;
    }
    else
    {
      this.seconds--;
    }
    this.updateDom();
    console.log(this.minutes);
    console.log(this.seconds);
  },

  updateDom : function(){
    this.minutesDom.innerHTML = this.toDoubleDigit(this.minutes);
    this.secondsDom.innerHTML = this.toDoubleDigit(this.seconds);
  },

  // stopTimer : function(){
  //   this.resetVariables(25, 0, false);
  //   this.updateDom();
  // },

  toDoubleDigit : function(num){
    if(num < 10)
    {
      return "0" + parseInt(num, 10)
    }
    else
    {
      return num;
    }
  },

  timerComplete : function(){
    this.started = false;
  }
};

pomodoro.init();
