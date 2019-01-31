import { Component, OnInit } from '@angular/core';
import { Article } from '../Article';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  inputs: ['article']
})
export class ArticleComponent implements OnInit {

  article: Article;
  
  constructor() { 
    
  }

  ngOnInit() {
  }

  voteUp(){
    this.article.votesUp();
    return false;
  }

  voteDown(){
    this.article.votesDown();
    return false;
  }

}
