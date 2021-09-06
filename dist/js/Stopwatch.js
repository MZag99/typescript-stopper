class Stopwatch {
    constructor(element) {
        this.currentTime = 0;
        this.dom = {};
        this.getElements(element);
        this.initActions();
        this.renderTime();
    }
    getElements(element) {
        this.dom.currentTime = element.querySelector('.stopwatch__current-time');
        this.dom.startButton = element.querySelector('.stopwatch__start-btn');
        this.dom.stopButton = element.querySelector('.stopwatch__stop-btn');
        this.dom.resetButton = element.querySelector('.stopwatch__reset-btn');
    }
    initActions() {
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
    formatTime(time) {
        const mm = Math.floor(time / 60000);
        const ss = Math.floor(time / 1000);
        const ms = Math.floor((time - mm * 60000 - ss * 1000) / 10);
        const pad0 = (number) => {
            let result = '';
            (number < 10) ? result = `0${number}` : result = `${number}`;
            return result;
        };
        return `${pad0(mm)}:${pad0(ss)}:${pad0(ms)}`;
    }
    renderTime() {
        const stopwatchDiv = this.dom.currentTime;
        stopwatchDiv.innerHTML = this.formatTime(this.currentTime);
    }
    start() {
        this.timer == undefined ? this.timer = window.setInterval(this.step.bind(this), 1) : null;
    }
    step() {
        this.currentTime++;
        this.renderTime();
    }
    stop() {
        window.clearInterval(this.timer);
        this.timer = undefined;
    }
    reset() {
        this.currentTime = 0;
        this.renderTime();
    }
}
export default Stopwatch;
//# sourceMappingURL=Stopwatch.js.map