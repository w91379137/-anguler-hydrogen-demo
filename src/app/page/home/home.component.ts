import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'src/app/module/anguler-hydrogen/util/std-tool';
import { CheckWait, DecoratorName } from 'src/app/test/decoratorName';
import { changeColorDisabled } from './red';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

  @CheckWait({uuid: 'gg', timeoutms: 90000})
  async testClick() {
    console.log('testClick')
    await delay(10000)
  }

  @CheckWait({uuid: 'gg', timeoutms: 90000})
  async testClick2() {
    console.log('testClick2')
    await delay(10000)
  }
}
