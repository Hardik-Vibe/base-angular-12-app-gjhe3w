import { Component, Input } from '@angular/core';
import { MenuItem } from '../app.constant';

@Component({
  selector: 'menu-list',
  styleUrls: ['./menu-list.component.scss'],
  templateUrl: './menu-list.component.html',
})
export class MenuListComponent {
  @Input() items: MenuItem[] = [];
}
