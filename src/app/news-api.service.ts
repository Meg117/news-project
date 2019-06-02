
import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = 'a2ded0a195f84d2f9e035e9668eddfe7';
  api_key2='c76ea59efc3ebd965eba4626c54b35a8';
  api_key3='b3e7b036fa02446e88e92843190303';
  constructor(private http:HttpClient) { }
  initSources(){
     return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
  }
  initCountries(){
    return this.http.get('https://newsapi.org/v2/country?language=en&apiKey='+this.api_key);
 }
  initArticles(){
   return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
  }
  initItems(){
    return this.http.get('http://api.apixu.com/v1/current.json?key=b3e7b036fa02446e88e92843190303&q=Paris');
  }
  initItemsByCondition(){
    return this.http.get('http://api.apixu.com/v1/current.json?key=b3e7b036fa02446e88e92843190303&q=Paris');
  }
  initItemsByForecast(){
    return this.http.get('http://api.apixu.com/v1/forecast.json?key=b3e7b036fa02446e88e92843190303&q=Paris');
  }
  initLanguages(){
    return this.http.get('https://newsapi.org/v2/top-headlines?language=en&apiKey='+this.api_key);
   }
  getArticlesByID(source: String){
   return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
  }
  getArticlesByCategory(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey='+this.api_key);
   }
   getArticlesByCategory1(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey='+this.api_key);
   }
   getArticlesByCategory2(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey='+this.api_key);
   }
   getArticlesByCategory3(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey='+this.api_key);
   }
   getArticlesByCategory4(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey='+this.api_key);
   }
   getArticlesByCategory5(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey='+this.api_key);
   }
   getArticlesByCategory6(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey='+this.api_key);
   }
  getArticleByCountry(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey='+this.api_key);
  }
  getArticleByCountry1(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey='+this.api_key);
  }
  getArticleByCountry2(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=jp&apiKey='+this.api_key);
  }
  getArticleByCountry3(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=ar&apiKey='+this.api_key);
  }
  getArticleByCountry4(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=ch&apiKey='+this.api_key);
  }
  getArticleByCountry5(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=ae&apiKey='+this.api_key);
  }
  getArticleByCountry6(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=sa&apiKey='+this.api_key);
  }
  getArticleByCountry7(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=nz&apiKey='+this.api_key);
  }
  getArticleByCountry8(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=au&apiKey='+this.api_key);
  }
  getArticleByCountry9(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=eg&apiKey='+this.api_key);
  }
  getArticleByCountry10(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=rs&apiKey='+this.api_key);
  }
  getArticleByCountry11(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=at&apiKey='+this.api_key);
  }
  getArticleByCountry12(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=be&apiKey='+this.api_key);
  }
  getArticleByCountry13(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=bg&apiKey='+this.api_key);
  }
  getArticleByCountry14(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=br&apiKey='+this.api_key);
  }
  getArticleByCountry15(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=ca&apiKey='+this.api_key);
  }
  getArticleByCountry16(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=cn&apiKey='+this.api_key);
  }
  getArticleByCountry17(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=co&apiKey='+this.api_key);
  }
  getArticleByCountry18(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=cu&apiKey='+this.api_key);
  }
  getArticleByCountry19(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=de&apiKey='+this.api_key);
  }
  getArticleByCountry20(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=fr&apiKey='+this.api_key);
  }
  getArticleByCountry21(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=gb&apiKey='+this.api_key);
  }
  getArticleByCountry22(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=gr&apiKey='+this.api_key);
  }
  getArticleByLanguage(){
    return this.http.get('https://newsapi.org/v2/top-headlines?language=en&apiKey='+this.api_key);
  }
  getArticleByLanguage1(){
    return this.http.get('https://newsapi.org/v2/top-headlines?language=ar&apiKey='+this.api_key);
  }
  getArticleByLanguage2(){
    return this.http.get('https://newsapi.org/v2/top-headlines?language=de&apiKey='+this.api_key);
  }
  getArticleByLanguage3(){
    return this.http.get('https://newsapi.org/v2/top-headlines?language=fr&apiKey='+this.api_key);
  }
  getArticleByLanguage4(){
    return this.http.get('https://newsapi.org/v2/top-headlines?language=nl&apiKey='+this.api_key);
  }
  getArticleByLanguage5(){
    return this.http.get('https://newsapi.org/v2/top-headlines?language=he&apiKey='+this.api_key);
  }
  getArticleByLanguage6(){
    return this.http.get('https://newsapi.org/v2/top-headlines?language=it&apiKey='+this.api_key);
  }
  getArticleByLanguage7(){
    return this.http.get('https://newsapi.org/v2/top-headlines?language=no&apiKey='+this.api_key);
  }
  getArticleByLanguage8(){
    return this.http.get('https://newsapi.org/v2/top-headlines?language=pt&apiKey='+this.api_key);
  }
  getArticleByLanguage9(){
    return this.http.get('https://newsapi.org/v2/top-headlines?language=rs&apiKey='+this.api_key);
  }
  getArticleByLanguage10(){
    return this.http.get('https://newsapi.org/v2/top-headlines?language=zh&apiKey='+this.api_key);
  }
  initCategories(){
    return this.http.get('https://newsapi.org/v2/category?language=en&apiKey='+this.api_key);
  }
  getArticleBySearch(query:String){
    return this.http.get('https://newsapi.org/v2/everything?q='+query+'&apiKey='+this.api_key);
  
    
  }
  getArticleBySer(location:String){
    return this.http.get('http://api.apixu.com/v1/current.json?key=b3e7b036fa02446e88e92843190303&q='+location);
  
    
  }
  
} 
