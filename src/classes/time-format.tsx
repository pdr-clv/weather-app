export interface LocalTimeType {
  _timeZone?: number;
  getTimeMilliseconds(): number;
  getLocalTime(): string;
  getForecastTime(targettedTime: number): string;
  getWeekDay(targettedTime: number): any;
}

export class LocalTime implements LocalTimeType {
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
    let mins: number = timeTarget % 60;
    let hrs: number = (timeTarget - mins) / 60;

    if (hrs > 23) {
      hrs = hrs - 24;
    } else if (hrs < 0) {
      hrs = hrs + 24;
    } else if (hrs === 0 && mins < 0) {
      hrs = 23;
      mins = mins + 60;
    }
    return this.pad(hrs) + ':' + this.pad(mins);
  };

  constructor(_timeZone?: number) {
    this.nowUTCMilliseconds = this.getUTCMilliseconds();
    if (_timeZone) {
      this.timeZone = _timeZone * 1000;
    } else {
      this.timeZone = 0;
    }
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

  private roundTimeForecast = (time: number): string => {
    const timeDevol = new Date(time);
    //time coming, must be converted in UTCHours to show the correct time for every timezone
    //we assing zero minutes to hour, because it is not relevant. This is the rounded trick in this function.
    return timeDevol.getUTCHours().toString() + ':00';
  };

  getForecastTime(targettedTime: number) {
    return this.roundTimeForecast(
      this.getUTCMilliseconds(targettedTime * 1000) + this.timeZone
    );
  }

  getWeekDay(targettedTime: number) {
    const weekDays: string[] = [
      'SUN',
      'MON',
      'TUE',
      'WED',
      'THU',
      'FRI',
      'SAT',
    ];
    const weekDayNumber: number = new Date(targettedTime * 1000).getDay();
    return weekDays[weekDayNumber];
  }
}
