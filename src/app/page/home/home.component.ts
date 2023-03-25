import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'src/app/module/anguler-hydrogen/util/std-tool';
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
}
