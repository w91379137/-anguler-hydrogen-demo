import { Component, OnInit } from '@angular/core';
import { IgnoreBeforeFinish } from 'src/app/module/anguler-hydrogen/decorator/ignore-before-finish/ignore-before-finish-decorator';
import { delay } from 'src/app/module/anguler-hydrogen/util/std-tool';

@Component({
  selector: 'app-decorator-ignore-before-finish',
  templateUrl: './decorator-ignore-before-finish.component.html',
  styleUrls: ['./decorator-ignore-before-finish.component.scss']
})
export class DecoratorIgnoreBeforeFinishComponent implements OnInit {

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

  constructor() { }

  ngOnInit(): void {
  }

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

  @IgnoreBeforeFinish({uuid: 'Test', timeoutms: 90000})
  async testClick() {
    console.log('testClick start')
    await delay(10000)
    console.log('testClick end')
  }

  @IgnoreBeforeFinish({uuid: 'Test', timeoutms: 90000})
  async testClick2() {
    console.log('testClick2 start')
    await delay(10000)
    console.log('testClick2 end')
  }
}
