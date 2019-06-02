import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { NewsApiService } from '../news-api.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    title = 'THE TREE';
  mArticles:Array<any>;
  mSources:Array<any>;
  mCategories:Array<any>;
  mCountries:Array<any>;
  mSearches:Array<any>;
  mLanguages:Array<any>;
  query:String;
    constructor(private newsapi:NewsApiService,private router: Router){
    console.log('app component constructor called');         
  }
  ngOnInit() {
        //load articles
      this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    //load news sources
    this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);  
    //LOAD NEWS CATEGORIES
    this.newsapi.initCategories().subscribe(data=> this.mCategories = data['categories']); 
   //load news countries
    this.newsapi.initCountries().subscribe(data=> this.mCountries= data['countries']);
    this.newsapi.initLanguages().subscribe(data=> this.mLanguages= data['Languages']);
   
  }
  searchArticles(source){
    console.log("selected source is: "+source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }
  searchArt(){
    console.log("selected source is: ");
    this.newsapi.getArticleByCountry().subscribe(data => this.mArticles = data['articles']);
  }
  searchArt1(){
    console.log("selected source is: ");
    this.newsapi.getArticleByCountry1().subscribe(data => this.mArticles = data['articles']);
  }
  searchArt2(){
    console.log("selected source is: ");
    this.newsapi.getArticleByCountry2().subscribe(data => this.mArticles = data['articles']);
  }
  searchArt3(){
    console.log("selected source is: ");
    this.newsapi.getArticleByCountry3().subscribe(data => this.mArticles = data['articles']);
  }
  searchArt4(){
    console.log("selected source is: ");
    this.newsapi.getArticleByCountry4().subscribe(data => this.mArticles = data['articles']);
  }
   searchArt5(){
    console.log("selected source is: ");
    this.newsapi.getArticleByCountry5().subscribe(data => this.mArticles = data['articles']);
  }
  searchArt6(){
    console.log("selected source is: ");
    this.newsapi.getArticleByCountry6().subscribe(data => this.mArticles = data['articles']);
  }
  searchArt7(){
    console.log("selected source is: ");
    this.newsapi.getArticleByCountry7().subscribe(data => this.mArticles = data['articles']);
  }

  searchArt8(){
    console.log("selected source is: ");
    this.newsapi.getArticleByCountry8().subscribe(data => this.mArticles = data['articles']);
  }
  searchArt9(){
    console.log("selected source is: ");
    this.newsapi.getArticleByCountry9().subscribe(data => this.mArticles = data['articles']);
  }
  searchArt10(){
    console.log("selected source is: ");
    this.newsapi.getArticleByCountry10().subscribe(data => this.mArticles = data['articles']);
  }
  searchArt11(){
    console.log("selected source is: ");
    this.newsapi.getArticleByCountry11().subscribe(data => this.mArticles = data['articles']);
  }
  searchArt12(){
    console.log("selected source is: ");
    this.newsapi.getArticleByCountry12().subscribe(data => this.mArticles = data['articles']);
  }
  searchArt13(){
    console.log("selected source is: ");
    this.newsapi.getArticleByCountry13().subscribe(data => this.mArticles = data['articles']);
  }
  searchArt14(){
    console.log("selected source is: ");
    this.newsapi.getArticleByCountry14().subscribe(data => this.mArticles = data['articles']);
  }
  searchArt15(){
    console.log("selected source is: ");
    this.newsapi.getArticleByCountry15().subscribe(data => this.mArticles = data['articles']);
  }
  searchArt16(){
    console.log("selected source is: ");
    this.newsapi.getArticleByCountry16().subscribe(data => this.mArticles = data['articles']);
  }
  searchArt17(){
    console.log("selected source is: ");
    this.newsapi.getArticleByCountry17().subscribe(data => this.mArticles = data['articles']);
  }
  searchArt18(){
    console.log("selected source is: ");
    this.newsapi.getArticleByCountry18().subscribe(data => this.mArticles = data['articles']);
  }
  searchArt19(){
    console.log("selected source is: ");
    this.newsapi.getArticleByCountry19().subscribe(data => this.mArticles = data['articles']);
  }
  searchArt20(){
    console.log("selected source is: ");
    this.newsapi.getArticleByCountry20().subscribe(data => this.mArticles = data['articles']);
  }
  searchArt21(){
    console.log("selected source is: ");
    this.newsapi.getArticleByCountry21().subscribe(data => this.mArticles = data['articles']);
  }
  searchArt22(){
    console.log("selected source is: ");
    this.newsapi.getArticleByCountry22().subscribe(data => this.mArticles = data['articles']);
  }
  searchArti(){
    console.log("selected category is: ");
    this.newsapi.getArticlesByCategory().subscribe(data => this.mArticles = data['articles']);
  }
  searchArti1(){
    console.log("selected category is: ");
    this.newsapi.getArticlesByCategory1().subscribe(data => this.mArticles = data['articles']);
  }
  searchArti2(){
    console.log("selected category is: ");
    this.newsapi.getArticlesByCategory2().subscribe(data => this.mArticles = data['articles']);
  }
  searchArti3(){
    console.log("selected category is: ");
    this.newsapi.getArticlesByCategory3().subscribe(data => this.mArticles = data['articles']);
  }
  searchArti4(){
    console.log("selected category is: ");
    this.newsapi.getArticlesByCategory4().subscribe(data => this.mArticles = data['articles']);
  }
  searchArti5(){
    console.log("selected category is: ");
    this.newsapi.getArticlesByCategory5().subscribe(data => this.mArticles = data['articles']);
  }
  searchArti6(){
    console.log("selected category is: ");
    this.newsapi.getArticlesByCategory6().subscribe(data => this.mArticles = data['articles']);
  }
  searchAr(){
    console.log("selected ctegory is: ");
    this.newsapi.getArticleByLanguage().subscribe(data => this.mArticles = data['articles']);
  }
  searchAr1(){
    console.log("selected category is: ");
    this.newsapi.getArticleByLanguage1().subscribe(data => this.mArticles = data['articles']);
  }
  searchAr2(){
    console.log("selected category is: ");
    this.newsapi.getArticleByLanguage2().subscribe(data => this.mArticles = data['articles']);
  }
  searchAr3(){
    console.log("selected category is: ");
    this.newsapi.getArticleByLanguage3().subscribe(data => this.mArticles = data['articles']);
  }
  searchAr4(){
    console.log("selected category is: ");
    this.newsapi.getArticleByLanguage4().subscribe(data => this.mArticles = data['articles']);
  }
  searchAr5(){
    console.log("selected category is: ");
    this.newsapi.getArticleByLanguage5().subscribe(data => this.mArticles = data['articles']);
  }
  searchAr6(){
    console.log("selected category is: ");
    this.newsapi.getArticleByLanguage6().subscribe(data => this.mArticles = data['articles']);
  }
  searchAr7(){
    console.log("selected category is: ");
    this.newsapi.getArticleByLanguage7().subscribe(data => this.mArticles = data['articles']);
  }
  searchAr8(){
    console.log("selected category is: ");
    this.newsapi.getArticleByLanguage8().subscribe(data => this.mArticles = data['articles']);
  }
  searchAr9(){
    console.log("selected category is: ");
    this.newsapi.getArticleByLanguage9().subscribe(data => this.mArticles = data['articles']);
  }
  searchAr10(){
    console.log("selected category is: ");
    this.newsapi.getArticleByLanguage10().subscribe(data => this.mArticles = data['articles']);
  }
  search(query){
     this.newsapi.getArticleBySearch(query).subscribe(data => this.mArticles = data['articles']);

  }
}
