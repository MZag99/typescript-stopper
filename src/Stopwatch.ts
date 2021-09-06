interface StopWatchDom {
  currentTime: HTMLDivElement;
  startButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
  resetButton: HTMLButtonElement;
  [x: string]: HTMLElement
}

abstract class Stopwatch {

  protected currentTime: number = 0;
  private timer: number | undefined;
  protected dom = <StopWatchDom>{};

  constructor(element: HTMLDivElement) {
    this.getElements(element);
    this.initActions()
    this.renderTime()
  }

  private getElements(element: HTMLDivElement): void {
    this.dom.currentTime = element.querySelector('.stopwatch__current-time') as HTMLDivElement;
    this.dom.startButton = element.querySelector('.stopwatch__start-btn') as HTMLButtonElement;
    this.dom.stopButton = element.querySelector('.stopwatch__stop-btn') as HTMLButtonElement;
    this.dom.resetButton = element.querySelector('.stopwatch__reset-btn') as HTMLButtonElement;
  }

  private initActions(): void {
    const thisStopWatch = this;

    //Used NodeList indexes instead of creating different selectors for every button.

    this.dom.startButton.addEventListener('click', function () {
      thisStopWatch.start();
    });
    this.dom.stopButton.addEventListener('click', function () {
      thisStopWatch.stop();
    });
    this.dom.resetButton.addEventListener('click', function () {
      thisStopWatch.reset();
    });
  }

  protected formatTime(time: number): string {
    const mm: number = Math.floor(time / 60000);
    const ss: number = Math.floor(time / 1000);
    const ms: number = Math.floor((time - mm * 60000 - ss*1000)/ 10);
  
    const pad0 = (number:number):string => {

      let result:string = '';

      (number < 10) ?  result = `0${number}` : result = `${number}`
      return result;
    }
    return `${pad0(mm)}:${pad0(ss)}:${pad0(ms)}`;
  }

  protected renderTime(): void {
    const stopwatchDiv = this.dom.currentTime as HTMLDivElement;
    stopwatchDiv.innerHTML = this.formatTime(this.currentTime);
  }

  private start():void {
    this.timer == undefined ? this.timer = window.setInterval(this.step.bind(this), 1) : null;
  }
  private step():void {
    this.currentTime++;
    this.renderTime();
  }
  private stop():void {
    window.clearInterval(this.timer);
    this.timer = undefined;
  }
  private reset():void {
    this.currentTime = 0;
    this.renderTime();
  }

}

export default Stopwatch