import Stopwatch from './Stopwatch.js'

class StopwatchWithResults extends Stopwatch {
  
  results: string[] = [];

  constructor(element:HTMLDivElement) {
    super(element)
    this.prepareElements(element)
    this.prepareActions()
  }

  private prepareElements(element:HTMLDivElement) {
    this.dom.resultsList = element.querySelector('.stopwatch__results__list') as HTMLUListElement;
    this.dom.addToListBtn = element.querySelector('.stopwatch__add-to-list-btn') as HTMLButtonElement;
    this.dom.resetListBtn = element.querySelector('.stopwatch__reset-list-btn') as HTMLButtonElement;
  }

  private prepareActions():void {
    const StopwatchWithResults = this;
    this.dom.addToListBtn.addEventListener('click', function(){
      StopwatchWithResults.addToList();
    })
    this.dom.resetListBtn.addEventListener('click', function(){
      StopwatchWithResults.resetList();
    })
  }

  private renderList():void {
    this.dom.resultsList.innerHTML = '';
    for(let item of this.results){
      this.dom.resultsList.innerHTML = this.dom.resultsList.innerHTML + `<li>${item}</li>`;
    }
  }

  private addToList():void {
    this.results.push(this.formatTime(this.currentTime));
    this.renderList();
  }

  private resetList():void {
    this.results = [];
    this.dom.resultsList.innerHTML = '<li><p>No results :(</p></li>';
  }

}

export default StopwatchWithResults