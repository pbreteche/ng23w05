import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  collapsed = [true]

  toggle(index: number) {
    this.collapsed[index] = !this.collapsed[index];
  }
}
