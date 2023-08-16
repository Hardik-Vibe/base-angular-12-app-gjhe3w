import { Component, Input } from '@angular/core';
import { MenuItem, Type } from '../../app.constant';

@Component({
  selector: 'menu-item',
  styleUrls: ['./menu-item.component.scss'],
  templateUrl: './menu-item.component.html',
})
export class MenuItemComponent {
  type = Type;
  @Input() item: MenuItem = null;

  public toggle(event: Event, item: MenuItem) {
    event.stopPropagation();
    item.isExpanded = !item.isExpanded;
  }
}
