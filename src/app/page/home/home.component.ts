import { Component, OnInit } from '@angular/core';
import { CheckWait } from 'src/app/module/anguler-hydrogen/decorator/ignore-before-finish/ignore-before-finish-decorator';
import { delay } from 'src/app/module/anguler-hydrogen/util/std-tool';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

  constructor() { }

  ngOnInit(): void {
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
