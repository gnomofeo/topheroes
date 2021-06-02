import { Component, OnInit } from '@angular/core';
import {Observable,Subject}from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import{Heroes, HeroesService} from 'src/app/service/heroes.service';
@Component({
  selector: 'app-herosearch',
  templateUrl: './herosearch.component.html',
  styleUrls: ['./herosearch.component.css']
})
export class HerosearchComponent implements OnInit {
  heroes$!: Observable<Heroes[]>;
  private searchTerms = new Subject<string>();
  constructor(private heroService: HeroesService) { }
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
 
  }

}
