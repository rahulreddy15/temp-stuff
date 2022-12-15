import { Component, OnInit } from '@angular/core';
import { FRIENDS } from './friends';
import { FirendsModel } from './friends-model';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends: FirendsModel[] = []

  constructor() {
    for (var x of FRIENDS) {
      console.log(x)
      this.friends.push(x)
    }
  }

  ngOnInit(): void {
  }

}