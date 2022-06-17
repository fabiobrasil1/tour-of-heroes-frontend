import { Component } from '@angular/core';
import { Hero } from '../hero.model';
import { HEROES } from '../mock-heros'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {

  hero: Hero = {
    id:1,
    name: 'Wolverine',
  };

  heroes = HEROES;

  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
