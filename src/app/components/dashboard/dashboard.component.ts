import { Component, OnInit } from '@angular/core';
import{HeroesService} from 'src/app/service/heroes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: import("c:/Users/victo/practicaTourHeroes/src/app/service/heroes.service").Heroes[];
  

  constructor(private servicioHeroes: HeroesService) { 
this.heroes  =  servicioHeroes.getHeroes();
console.log();

  }
  ngOnInit(): void {
  }

}
