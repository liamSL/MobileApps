import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
    var firebaseConfig = {
    apiKey: "AIzaSyCY1DftJwSD_lkC_G5pJCOL_O8MGZuzObk",
    authDomain: "csd203lsl.firebaseapp.com",
    projectId: "csd203lsl",
    storageBucket: "csd203lsl.appspot.com",
    messagingSenderId: "309807875536",
    appId: "1:309807875536:web:166779502475ca5e5da5d5",
    measurementId: "G-KVVB22F47R"
    }
    firebase.initializeApp(firebaseConfig);
  });
}}
