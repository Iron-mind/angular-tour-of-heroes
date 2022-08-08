import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { messageState, setEnglish, setSpanish } from './app.reducer';
import { HeroesService } from './heroes.service';
import { appState } from './state/app.state';

import { loadHeroes, loadHeroesSuccess } from './state/hero.actions';
import { selectHeroes, selectLoading } from './state/selectors/heroes.selector';
import { selectMessage } from './state/selectors/message.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp-ngrx';
  //recuerda asignar biene el tipo de dato que quieres recibir
  dato$: Observable<any>;
  loading$: Observable<boolean> = new Observable();
  heroes$: Observable<any>= new Observable();
  constructor(private store: Store<appState>, private heroesService: HeroesService) {

    this.dato$ = store.select(selectMessage);

  }

  toSpanish() {
    this.store.dispatch(setSpanish())
  }
  toEnglish() {
    this.store.dispatch(setEnglish())
  }

  ngOnInit() {
    this.loading$ = this.store.select(selectLoading);
    this.heroes$ = this.store.select(selectHeroes);
    this.heroesService.getHeroes().subscribe(heroes => {
      this.store.dispatch(loadHeroesSuccess({ heroes }))

    }
    
    )
    this.store.dispatch(loadHeroes())
    console.log(this.dato$);

  }
  stopLoading() {
    this.store.dispatch(loadHeroes())
  }

}
