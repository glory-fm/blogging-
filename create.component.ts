import { Component, OnInit, Output } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  editorConfig: any;
  title: string;
  content: string;
  @Output('postCreated') postCreated = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }
  createPost(){
    


    
    firebase.firestore().collection("posts").add({
      title: this.title,
      content: this.content,
      owner: firebase.auth().currentUser.uid,
      created:firebase.firestore.FieldValue.serverTimestamp()

    }).then((data) =>{
      console.log(data);
      this.postCreated.emit();
    }).catch((error) => {
      console.log(error);

    })
    
  }

}
