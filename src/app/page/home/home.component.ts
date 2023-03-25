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

  async onClickedAsync() {
    await delay(1000)
  }

  onClickedObservable() {
    let result = Observable.create(function (observer) {
      setTimeout(() => {
        observer.complete()
      }, 1000)
    })
    return result
  }

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====
}
