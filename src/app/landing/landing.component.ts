import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../repository-http/repository.service';
import { UserService } from '../user-http/user.service';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  providers: [RepositoryService, UserService],
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  user: User;
  userName: string;


  constructor(private userRequestService: UserService) {
    this.userRequestService.userName = "IanBTrey";
    this.userRequestService.userRequest();
    this.user = this.userRequestService.user;

  }

  userLookup(){
  this.userRequestService.userLookup(this.userName);
  this.userRequestService.userRequest();
  this.user = this.userRequestService.user;
}


  ngOnInit() {
  }

}
