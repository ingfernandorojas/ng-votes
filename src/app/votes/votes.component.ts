import { Component, OnInit } from '@angular/core';
import { Article } from './Article';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  title: string = "Votes App";
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular','http://angular.io',30),
      new Article('FSF','http://fsf.org',20),
      new Article('Linux Kernel','http://kernel.org',0)
    ]
  }

  ngOnInit() {
  }

   addArticle(title: HTMLInputElement, link: HTMLInputElement){
     this.articles.push(
       new Article(title.value,link.value)
     );
     title.value = '';
     link.value = '';
     return false;
   }

   sortedArticles(){
     return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
   }
}
