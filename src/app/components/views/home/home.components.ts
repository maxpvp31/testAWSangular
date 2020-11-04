import { Component, OnInit,NgModule } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router, NavigationEnd } from '@angular/router';
import { AuthenticationService } from 'src/services/authentification.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(
    private router: Router,
      private authServices : AuthenticationService
  ) {
  }
async name() {
  await this.authServices.login( "dehka@gmail.com", "ezgf")
}
  async ngOnInit() {

  }


}
