import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correction1',
  templateUrl: './correction1.component.html',
  styleUrls: ['./correction1.component.scss']
})
export class Correction1Component implements OnInit {

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

  // Exercice 6
  button1Disabled = false;

  // Exercice 7
  input7Value = '';

  // Exercice 9
  firstName = '';
  lastName = '';

  constructor() { }

  ngOnInit(): void {
  }

  // Exercice 4
  clickOnButton4() {
    alert('Bouton cliqué');
  }

  // Exercice 5
  i5Change(val :string) {
    console.log(val);
  }

  // Exercice 9
  validate9() {
    console.log(this.firstName, this.lastName);
  }

}
