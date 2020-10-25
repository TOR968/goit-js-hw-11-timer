class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = document.querySelector(selector);
    this.targetDate = new Date(targetDate);
  }

  startCountdown() {
    this.intervalId = setInterval(() => {
      this.currentTime = new Date();
      this.remainingTime = this.targetDate - this.currentTime;
      this.timeCounter(), this.insertTimeIntoMarckup();
      if (this.remainingTime < 0) {
        this.stopCountdown();
      }
    }, 1000);
  }

  timeCounter() {
    this.days = Math.floor(this.remainingTime / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((this.remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.mins = Math.floor((this.remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    this.secs = Math.floor((this.remainingTime % (1000 * 60)) / 1000);
  }

  insertTimeIntoMarckup() {
    this.refs = {
      days: document.querySelector(" [data-value=days]"),
      hours: document.querySelector(" [data-value=hours]"),
      minutes: document.querySelector(" [data-value=mins]"),
      seconds: document.querySelector(" [data-value=secs]")
    };
    this.refs.days.textContent = this.pad(this.days);
    this.refs.hours.textContent = this.pad(this.hours);
    this.refs.minutes.textContent = this.pad(this.mins);
    this.refs.seconds.textContent = this.pad(this.secs);
  }
  stopCountdown() {
    clearInterval(this.intervalId);
    this.remainingTime = 0;
    this.timeCounter(this.remainingTime);
    this.insertTimeIntoMarckup(this.remainingTime);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const countdownTimer = new CountdownTimer("#timer-1", "October 25, 2020, 16:01");
countdownTimer.startCountdown();