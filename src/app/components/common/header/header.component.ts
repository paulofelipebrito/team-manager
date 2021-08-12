import { Component, OnInit } from '@angular/core';
import { homeRoute, peopleRoute, teamsRoute, studyRoute } from 'src/app/models/constants';

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

  constructor() { }

  ngOnInit(): void {
  }

}
