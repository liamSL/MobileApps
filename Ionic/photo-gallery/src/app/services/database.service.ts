import { Injectable } from '@angular/core';
import * as firebase from "firebase/app"
import { Database, getDatabase, ref, push, onValue, query } from "firebase/database"


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  db: Database;
  logins: any[];

  writeLoginToDatabase(email: String) {
    let auditLogRef = ref(this.db, "logins");
    let dbData = {
    email: email,
    logInDate: new Date().getTime()
    }
    push(auditLogRef, dbData);
    this.loadLogins();
    }

    loadLogins() {
      let auditLogRef = ref(this.db, "logins");
      onValue(query(auditLogRef), snapshot => {
        if (snapshot.hasChildren()) {
          this.logins = [];
          snapshot.forEach((item) => {
            this.logins.push(item.val());
            })
          }
        })
      }
     
  constructor() {
    this.db = getDatabase(firebase.getApp());
   }
}
