import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'
import { error } from 'protractor';

@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.component.html',
  styleUrls: ['./myblogs.component.css']
})
export class MyblogsComponent implements OnInit {

  user : any = {};
  posts : any[] = [];


  constructor() { 
    this.user = firebase.auth().currentUser;
    this.getPosts();
  }

  ngOnInit() {
  }

  getPosts(){
    firebase.firestore().collection("posts")
    .orderBy("created" , "desc" ).get()
    .then((querySnapshot)=>{
      this.posts=querySnapshot.docs;
      console.log(querySnapshot.docs);
    }).catch((error)=>{
      console.log(error);
    })
  }

  onPostCreated(){
    this.getPosts();
    this.posts = [];
  }

  onDelete(){

  }
}