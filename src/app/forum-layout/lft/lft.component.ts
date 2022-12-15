import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { UserService } from 'src/app/user-tracking/user-service';
import { ForumPost } from './forum-generator/forum.post.module';

@Component({
  selector: 'app-lft',
  templateUrl: './lft.component.html',
  styleUrls: ['./lft.component.css']
})
export class LftComponent implements OnInit {

  constructor(private db: AngularFireDatabase, private backend: UserService) { 
    
  }

  ngOnInit(): void {
  }

  submitPost(){
    let newpost:ForumPost={name:'',post:''};
    newpost.name=(document.getElementById('Input1')as HTMLInputElement).value;
    newpost.post=(document.getElementById('Textareal')as HTMLInputElement).value;
    this.db.list('forum/general').push(newpost);
  }

}
