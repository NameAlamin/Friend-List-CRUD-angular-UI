import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export class Friend {
  constructor(
    public id: BigInt,
    public name: String,
    public department: String,
    public email: String,
    public country: String
  ) {
  }
}

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})

export class FriendsComponent implements OnInit {

  friends: Friend[] | undefined;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getFriends();
  }

  getFriends(){
    this.httpClient.get<any>('http://localhost:9001/friends').subscribe(
      response => {
        console.log(response);
        this.friends = response;
      }
    );
  }


}
