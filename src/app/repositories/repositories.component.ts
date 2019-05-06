import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../repository-http/repository.service';
import { Repository } from '../repository';
import { Repos } from '../repos';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  providers: [RepositoryService],
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

    repo: Repository;
    userName: string;
    repoName: string;
    repos: Repos;


  constructor(private http:HttpClient, private repoRequestService: RepositoryService) {
    this.repo = new Repository("","","","");

   }

   repoRequest(){

         interface ApiResponse{
           html_url: any;
           name: string;
           description: any;
           license: any;
         }
         let promise = new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>("https://api.github.com/repos/" + this.userName + "/" + this.repoName + "?access_token=" + environment.access_token).toPromise().then(response=>{

          this.repo.link = response.html_url
           this.repo.name = response.name
           this.repo.description  = response.description
           this.repo.license = response.license

         resolve();

       },
       error=>{

      this.repo.link = ""
      this.repo.name = ""
      this.repo.description  = ""
      this.repo.license = ""

      reject(error);


      })
    })

    return promise

  }

  repoLookup(){
    this.repoRequestService.repoLookup(this.userName);
    this.repoRequestService.getRepoData();
    this.repos = this.repoRequestService.repos;
  }

  ngOnInit() {
  }

}
