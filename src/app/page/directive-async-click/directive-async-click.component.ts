import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'src/app/module/anguler-hydrogen/util/std-tool';
import { changeColorDisabled } from './html-change';

@Component({
  selector: 'app-directive-async-click',
  templateUrl: './directive-async-click.component.html',
  styleUrls: ['./directive-async-click.component.scss']
})
export class DirectiveAsyncClickComponent implements OnInit {

  changeColorDisabled = changeColorDisabled
  changeBlueDisabled = function(...args) {
    this.changeColorDisabled(...args, 'blue')
  }.bind(this)
  changeGreenDisabled = function(...args) {
    this.changeColorDisabled(...args, 'green')
  }.bind(this)

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

  constructor() { }

  ngOnInit(): void {
  }

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====
  onClicked() {
    return 1
  }

  async onClickedAsync(ms = 1000) {
    console.log('onClickedAsync', ms)
    await delay(ms)
  }

  onClickedObservable(ms = 1000) {
    console.log('onClickedObservable', ms)
    let result = new Observable(function (observer) {
      setTimeout(() => {
        observer.complete()
      }, ms)
    })
    return result
  }

}
