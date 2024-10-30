function StopWatch() {
  let hasStarted = false;
  let startTime, endTime;
  let lastSessionDuration = new Date();

  // Method to Start the stopwatch
  this.start = function () {
    try {
      if (!hasStarted) {
        hasStarted = true;
        startTime = Date.now();
      } else {
        throw new Error(`Stopwatch has already started`);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Method to End the stopwatch
  this.stop = function () {
    try {
      if (hasStarted) {
        hasStarted = false;
        endTime = Date.now();
        lastSessionDuration = (endTime - startTime) / 1000;
      } else {
        throw new Error(`Stopwatch is not started`);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Property to get the duration
  Object.defineProperty(this, "duration", {
    get: function () {
      if (hasStarted) {
        let elapsedTime = new Date(Date.now() - startTime);
        return `${elapsedTime.getMinutes()}: ${elapsedTime.getSeconds()}`;
      } 
      else {
        let savedDuration = new Date(lastSessionDuration);
        return `${savedDuration.getMinutes()}: ${savedDuration.getSeconds()}`;
      }
    },
  });

  
}
