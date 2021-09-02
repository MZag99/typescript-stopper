interface StopWatchDom {
  currentTime: HTMLDivElement;
  buttons: NodeListOf<HTMLButtonElement>;
  [x: string]: HTMLElement
}

abstract class Stopwatch {

  protected currentTime: number = 0;
  private timer: number | null = null;
  protected dom = <StopWatchDom>{};

  constructor(element: HTMLDivElement) {
    this.getElements(element);
    this.initActions()
    this.renderTime()
  }

  private getElements(element: HTMLDivElement): void {
    this.dom.currentTime = element.querySelector('.stopwatch__current-time') as HTMLDivElement;
    this.dom.buttons = element.querySelectorAll('.stopwatch__button') as NodeListOf<HTMLButtonElement>;
  }

  private initActions(): void {
    const thisStopWatch = this;

    //Used NodeList indexes instead of creating different selectors for every button.

    this.dom.buttons[0].addEventListener('click', function () {
      thisStopWatch.start();
    });
    this.dom.buttons[1].addEventListener('click', function () {
      thisStopWatch.stop();
    });
    this.dom.buttons[2].addEventListener('click', function () {
      thisStopWatch.reset();
    });
  }

  protected formatTime(time: number): string {
    const mm: number = Math.floor(time / 60000);
    const ss: number = Math.floor(time / 1000);
    const ms: number = Math.floor((time - mm * 60000 - ss*1000)/ 10);

    if (mm < 10 && ss < 10 && ms < 10) {
      return `0${mm}:0${ss}:0${ms}`;
    }
    else if (mm < 10 && ss < 10) {
      return `0${mm}:0${ss}:${ms}`;
    }
    else if (mm < 10) {
      return `0${mm}:${ss}:${ms}`;
    }
  }

  protected renderTime(): void {
    const stopwatchDiv = this.dom.currentTime as HTMLDivElement;
    stopwatchDiv.innerHTML = this.formatTime(this.currentTime);
  }

  private start():void {
    this.timer ? null :
      this.timer = window.setInterval(this.step.bind(this), 1);
  }
  private step():void {
    this.currentTime++;
    this.renderTime();
  }
  private stop():void {
    window.clearInterval(this.timer);
    this.timer = null;
  }
  private reset():void {
    this.currentTime = 0;
    this.renderTime();
  }

}

export default Stopwatch