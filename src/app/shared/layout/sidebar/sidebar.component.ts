import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'layout-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent implements OnInit {
  menu = [
    {
      link: '/user',
      name: '管理者アカウント管理',
      collapsed: false,
    },
    {
      link: '/exam-main',
      name: '試験管理',
      collapsed: false,
      child: [
        {
          link: '/exam-master',
          name: 'マスタ管理',
        }
      ]
    },
    {
      link: '/question',
      name: '問題管理',
      collapsed: false,
      child: [
        {
          link: '/class',
          name: '出題範囲管理',
        },
        {
          link: '/category',
          name: 'カテゴリ管理'
        }
      ]
    }
  ];

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
  }
}
