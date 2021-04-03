import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  // Exercice 1
  title = 'Escape'

  // Exercice 2
  user = {
    firstName: 'Jean',
    lastName: 'Valjean'
  }

  // Exercice 3
  website = {
    name: 'escape game',
    url: 'https://google.com'
  }

  // Exercice 8
  framework = {
    url: 'https://angular.io/',
    logo: 'http://les-combien.com/angular-logo.png',
    name: 'Angular'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
