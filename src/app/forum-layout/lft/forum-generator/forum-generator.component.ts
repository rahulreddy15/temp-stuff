import { Component, Input, OnInit } from '@angular/core';
import { ForumModel } from './forum-model';
import { Forumservice } from './forum-service';

@Component({
  selector: 'app-forum-generator',
  templateUrl: './forum-generator.component.html',
  styleUrls: ['./forum-generator.component.css']
})
export class ForumGeneratorComponent{

  @Input() name: string;
  @Input() post: string;
  public posts:ForumModel[] = [];

  constructor(private backend:Forumservice){
    this.name="";
    this.post="";

  }

  ngOnInit(){
    this.posts=this.backend.getForumGroup();
  }

}
