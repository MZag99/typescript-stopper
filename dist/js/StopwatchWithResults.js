import Stopwatch from './Stopwatch.js';
class StopwatchWithResults extends Stopwatch {
    constructor(element) {
        super(element);
        this.results = [];
        this.prepareElements(element);
        this.prepareActions();
    }
    prepareElements(element) {
        this.dom.resultsList = element.querySelector('.stopwatch__results__list');
        this.dom.addToListBtn = element.querySelector('.stopwatch__add-to-list-btn');
        this.dom.resetListBtn = element.querySelector('.stopwatch__reset-list-btn');
    }
    prepareActions() {
        const StopwatchWithResults = this;
        this.dom.addToListBtn.addEventListener('click', function () {
            StopwatchWithResults.addToList();
        });
        this.dom.resetListBtn.addEventListener('click', function () {
            StopwatchWithResults.resetList();
        });
    }
    renderList() {
        this.dom.resultsList.innerHTML = '';
        for (let item of this.results) {
            this.dom.resultsList.innerHTML += `<li>${item}</li>`;
        }
    }
    addToList() {
        this.results.push(this.formatTime(this.currentTime));
        this.renderList();
    }
    resetList() {
        this.results = [];
        this.dom.resultsList.innerHTML = '<li><p>No results :(</p></li>';
    }
}
export default StopwatchWithResults;
//# sourceMappingURL=StopwatchWithResults.js.map