import { Component, OnInit } from '@angular/core';
import{HeroesService} from 'src/app/service/heroes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'practicaTourHeroes';
  heroes: import("c:/Users/victo/practicaTourHeroes/src/app/service/heroes.service").Heroes[];
  

  constructor(private servicioHeroes: HeroesService) { 
this.heroes  =  servicioHeroes.getHeroes();
console.log();

  }

  ngOnInit(): void {
  }
}
