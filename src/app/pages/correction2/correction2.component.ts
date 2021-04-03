import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correction2',
  templateUrl: './correction2.component.html',
  styleUrls: ['./correction2.component.scss']
})
export class Correction2Component implements OnInit {

  // Exercice 1
  showDiv1 = 3;

  // Exercice 4 et 5
  cities = ['Paris', 'Lyon', 'Marseille', 'Toulouse'];

  // Exercice 6
  animals = [
    { name: 'lion', canFly: false },
    { name: 'owl', canFly: true },
    { name: 'eagle', canFly: true },
    { name: 'wolf', canFly: false }
  ]

  // Exercice 7
  movies = [
    { 
      title: 'Retour vers le futur',
      imageUrl: 'http://les-combien.com/movies/bttf.jpg',
      director: 'Robert Zemeckis',
      isForAll: true,
      rating: 3.6,
      actors: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
      link: 'https://www.allocine.fr/film/fichefilm_gen_cfilm=448.html'
    },
    { 
      title: 'Alien',
      imageUrl: 'http://les-combien.com/movies/alien.jpg',
      director: 'Ridley Scott',
      isForAll: false,
      rating: 4.4,
      actors: ['Sigourney Weaver', 'Tom Skerritt', 'Veronica Cartwright'],
      link: 'https://www.allocine.fr/film/fichefilm_gen_cfilm=62.html'
    },
    { 
      title: 'La reine des neiges',
      imageUrl: 'http://les-combien.com/movies/frozen.jpg',
      director: 'Disney',
      isForAll: true,
      rating: 3.5,
      actors: ['Emmylou Homs', 'Anaïs Delva', 'Donald Reignoux'],
      link: 'https://www.allocine.fr/film/fichefilm_gen_cfilm=203691.html'
    },
    { 
      title: 'Star wars',
      imageUrl: 'http://les-combien.com/movies/star-wars.jpg',
      director: 'George Lucas',
      isForAll: true,
      rating: 4.8,
      actors: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
      link: 'https://www.allocine.fr/film/fichefilm_gen_cfilm=25801.html'
    },
    { 
      title: 'Saw',
      imageUrl: 'http://les-combien.com/movies/saw.jpg',
      director: 'James Wan',
      isForAll: false,
      rating: 3.5,
      actors: ['Leigh Whannell', 'Cary Elwes', 'Danny Glover'],
      link: 'https://www.allocine.fr/film/fichefilm_gen_cfilm=57410.html'
    },
  ]

  // Exercice 2
  showDiv2 = true;

  // Exercice 3
  div3Hover = false;

  constructor() { }

  ngOnInit(): void {
  }

}
