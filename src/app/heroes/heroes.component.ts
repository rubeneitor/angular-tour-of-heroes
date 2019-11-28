import { Component, OnInit, ɵConsole } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes = HEROES;

  selectedHero: Hero;
  
  constructor() { }

  ngOnInit() {
    console.log(this.heroes);
  }

  onSelect(hero: Hero): void {
    console.log(hero.id)
    this.selectedHero = hero;
  }

}
