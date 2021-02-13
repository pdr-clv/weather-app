export class LocalTime {
  private nowUTCMilliseconds: number;
  private timeZone: number;
  private getUTCMilliseconds = (timeTarget?: number): number => {
    let time: Date;
    timeTarget ? (time = new Date(timeTarget)) : (time = new Date());
    return (
      time.getUTCHours() * 60 * 60 * 1000 +
      time.getUTCMinutes() * 60 * 1000 +
      time.getUTCSeconds() * 1000 +
      time.getUTCMilliseconds()
    );
  };

  //function to add zeros if time or seconds are less than 10.
  private pad = (n: number): string => {
    return ('00' + n).slice(-2);
  };

  private getTimeFormatted = (_targetTime: number): string => {
    let timeTarget: number = _targetTime;

    const ms: number = timeTarget % 1000;
    timeTarget = (timeTarget - ms) / 1000;
    const secs: number = timeTarget % 60;
    timeTarget = (timeTarget - secs) / 60;
    const mins: number = timeTarget % 60;
    let hrs: number = (timeTarget - mins) / 60;

    if (hrs > 23) {
      hrs = hrs - 24;
    } else if (hrs < 0) {
      hrs = hrs + 24;
    }
    return this.pad(hrs) + ':' + this.pad(mins);
  };

  constructor(_timeZone: number) {
    this.nowUTCMilliseconds = this.getUTCMilliseconds();
    this.timeZone = _timeZone * 1000;
  }

  getTimeMilliseconds() {
    return this.nowUTCMilliseconds;
  }

  getLocalTime() {
    const localTimeMiliseconds = this.nowUTCMilliseconds + this.timeZone;
    return this.getTimeFormatted(localTimeMiliseconds);
  }

  getTargetTime(_targettedTime: number) {
    const targettedUTCMilliseconds =
      this.getUTCMilliseconds(_targettedTime * 1000) + this.timeZone;
    return this.getTimeFormatted(targettedUTCMilliseconds);
  }
}
