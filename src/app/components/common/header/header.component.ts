import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { homeRoute, peopleRoute, teamsRoute, studyRoute } from 'src/app/models/constants';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  hideOptions!: boolean;
  isHome!: boolean;
  homeRoute = homeRoute;
  peopleRoute = peopleRoute;
  teamsRoute = teamsRoute;
  studyRout= studyRoute;

  sideBarVisible = false;

  constructor(public config: ConfigService, public router : Router) { }

  ngOnInit(): void {
    this.isHome = this.router.url === this.homeRoute;
    this.hideOptions = this.config.mobile || this.config.smallDesktop;
  }

}
