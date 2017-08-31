import { Injectable } from '@angular/core';

import {Author} from './author';

import {Http,Headers} from '@angular/http'

@Injectable()
export class AuthorService {

  authorList:Array<Author>=[];


  URl:string="http://localhost:8181/author";

  constructor(private http:Http) { }

  getAuthors(){
  
    return this.http.get(this.URl);
  }
  
  getAuthor(authorId:number){
    return this.http.get(this.URl+"/"+authorId);

  }
    deleteAuthor(authorId:number){
      return this.http.delete(this.URl+"/"+authorId);
    }
    saveAuthor(author:Author){
      let rheader=new Headers();
      rheader.set("content-type","application/json");
      if(author.authorId===undefined){
        return this.http.post(this.URl,JSON.stringify(author),{headers:rheader})
      }
      else{
        return this.http.put(this.URl,JSON.stringify(author),{headers:rheader});
      }
    }
}
