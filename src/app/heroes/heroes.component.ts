import { Component, OnInit, ɵConsole } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

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
  heroes: Hero[];

  selectedHero: Hero;
  
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    console.log(this.heroes);
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    console.log(hero.id)
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

}
