import { Component } from '@angular/core';
import { MenuItem, Type } from './app.constant';

const tree: MenuItem[] = [
  {
    id: '1',
    name: 'Folder-1',
    type: Type.folder,
    isExpanded: false,
    children: [
      {
        id: '11',
        name: 'Folder-1-1',
        type: Type.folder,
        children: [
          {
            id: '111',
            name: 'Folder-1-1-1',
            type: Type.folder,
            children: [
              {
                id: '1111',
                name: 'Folder-1-1-1-1',
                type: Type.folder,
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: '12',
        name: 'Folder-1-2',
        type: Type.folder,
        children: [],
      },
      {
        id: '13',
        name: 'Folder-1-3',
        type: Type.folder,
        children: [],
      },
      {
        id: '14',
        name: 'File',
        type: Type.file,
      },
    ],
  },
  {
    id: '2',
    name: 'Folder-2',
    type: Type.folder,
    children: [],
  },
  {
    id: '3',
    name: 'Folder-3',
    type: Type.folder,
    children: [],
  },
  {
    id: '4',
    name: 'File',
    type: Type.file,
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public items = tree;
}
