import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];


  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
  // hero: Hero = {
  //   name: 'Windstorm',
  //   id: 1,
  // };
  // selectedHero: Hero={
  //   name:'',
  //   id:0
  // };
  // //Anido el servicio a mi componente
  // constructor(private heroService: HeroService,  private messageService: MessageService) {}

  // //NO OBSERVABLE
  // // getHeroes(): void {
  // //   this.heroes = this.heroService.getHeroes();
  // // }

  // //OBSERVABLE
  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //       .subscribe(heroes => this.heroes = heroes);
  // }
  // ngOnInit(): void {
  //   //this.heroes = this.heroService.getHeroes() NO

  //   //recomendable para iniciar la app (sirve para codigo asincoro)
  //   this.getHeroes() //traigo los heros al montarse el componente
  // }

  // onSelect(hero: Hero): void {

  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }
}
