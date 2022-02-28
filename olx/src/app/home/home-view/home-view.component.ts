import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
})
export class HomeViewComponent implements OnInit {
  data = [
    {
      title: 'Help & Support',
      icon: 'file-tray-full-outline',
      discription: 'Help center and legal terms'
    },
    {
      title: 'Help & Support',
      icon: 'file-tray-full-outline',
      discription: 'Help center and legal terms'
    },
    {
      title: 'Help & Support',
      icon: 'file-tray-full-outline',
      discription: 'Help center and legal terms'
    },
    {
      title: 'Help & Support',
      icon: 'file-tray-full-outline',
      discription: 'Help center and legal terms'
    },
  ]

  constructor() { }

  ngOnInit() {}

}
