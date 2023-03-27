import { Component, OnInit } from '@angular/core';
import { ComponentFloatingActionMenuCustomViewModel } from './component-floating-action-menu-custom.viewmodel';

@Component({
  selector: 'app-component-floating-action-menu-custom',
  templateUrl: './component-floating-action-menu-custom.component.html',
  styleUrls: ['./component-floating-action-menu-custom.component.scss']
})
export class ComponentFloatingActionMenuCustomComponent implements OnInit {

  viewModel = new ComponentFloatingActionMenuCustomViewModel()

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

  constructor() { }

  ngOnInit(): void {
  }

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

  async onMainButtonClicked() {
    this.viewModel.menu.isOpen = !this.viewModel.menu.isOpen
  }

  async onChildButtonClicked(item) {
    console.log('onChildButtonClicked', item)
  }

}
