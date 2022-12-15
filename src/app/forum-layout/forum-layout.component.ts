import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum-layout',
  templateUrl: './forum-layout.component.html',
  styleUrls: ['./forum-layout.component.css']
})
export class ForumLayoutComponent implements OnInit {
  @Input() img:string;
  @Input() cardTitle: string;
  constructor() { 
    this.img="";
    this.cardTitle="";
  }
  ngOnInit(): void {
  }

}
