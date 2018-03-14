import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Post } from '../post';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/of';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {


    readonly ROOT_URL = 'https://angular-decoupled-blog-backend.herokuapp.com'


    posts: Observable<any>;
    newPost: Observable<any>;

    constructor(private http: HttpClient){}

    // create get
    getPosts() {
      this.posts = this.http.get(this.ROOT_URL);
    }

    ngOnInit() {
    }

    // create post
    createPost() {
        let data: Post = {
        id: 21,
        title: 'My New Post9189281',
        author: 'jason Pizzahead',
        content: 'Hello 111World!!'
      }
      this.newPost = this.http.post<Post>(this.ROOT_URL+ '/posts', data);
    }



}
