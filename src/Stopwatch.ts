abstract class Stopwatch {

  currentTime = 0
  timer = null
  dom = {}

  constructor(element:HTMLElement) {
    this.getElements(element);
    this.initActions()
    this.renderTime()
  }

  private getElements(element:HTMLElement) {

    this.dom.time = element.querySelector('.stopwatch__current-time') as HTMLElement;
    this.dom.buttons = element.querySelectorAll('.stopwatch__actions') as NodeListOf<HTMLElement>;
  }

  initActions() {
    /*
    Funkcja ta powinna nadać buttonom z buttonów stopwatch__actions odpowiednie nasłuchiwacze na event click. 
    Kliknięcie na każdy z buttonów powinno uruchamiać odpowiednie funkcje.

    Start -> start()
    Stop -> stop()
    Reset -> reset()

    Aby dostać się do tych elementów, wykorzystaj referencję przygotowane wcześniej w funkcji this.getElements.
    */
  }

  formatTime(time) {
    /*
    Funkcja ta powinna przyjmować czas w milisekundach a następnie zwracać go w formacie mm:ss:ms (np. 02:23:12).
    */
  } 

  renderTime() {
    /*
    Funkcja ta powinna renderować w stopwatch__current-time zawartość obiektu this.currentTime.
    Oczywiście wcześniej należy sformatować czas przy użyciu funkcji this.formatTime. 
    */
  }

  start() {
    /*
    Funkcja ta powinna wystartować interwał, który będzie wykonywał się co milisekundę.
    Powinien on każdorazowo włączać funkcję this.step

    Dla wygody przypisz ten interwał do this.timer
    */
  }

  step() {
    /*
    Funkcja ta powinna zwiększać liczbę sekund w this.currentTime o jeden, a następnie uruchamiać metodę
    renderującą aktualny czas w HTML-u (this.renderTime).
    */
  }

  stop() {
    /* 
    Funkcja ta powinna zatrzymywać interval przypisany do this.timer.
    */
  }

  reset() {
    /*
    Ta funkcja powinna resetować czas zapisany w this.currentTime, a więć zmieniać jego wartość na zero.
    Naturalnie powinno to wiązać się również z przerenderowaniem HTML-a (this.renderTime).
    */
  }

}

export default Stopwatch