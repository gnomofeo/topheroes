import { Component, OnInit } from '@angular/core';
import{HeroesService} from 'src/app/service/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: import("c:/Users/victo/practicaTourHeroes/src/app/service/heroes.service").Heroes[];
  

  constructor(private servicioHeroes: HeroesService) { 
this.heroes  =  servicioHeroes.getHeroes();
console.log();

  }

  ngOnInit(): void {
  }

}
