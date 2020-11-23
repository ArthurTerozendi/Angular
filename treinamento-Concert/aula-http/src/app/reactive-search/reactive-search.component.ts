import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-search',
  templateUrl: './reactive-search.component.html',
  styleUrls: ['./reactive-search.component.scss'],
  preserveWhitespaces: true,
})
export class ReactiveSearchComponent implements OnInit {

  queryFild = new FormControl();
  readonly SEARCH_URL = 'https://api.cdnjs.com/libraries';
  resultados$: Observable<any>;
  total: number;
  fields = "name,version,description,homepage"

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.resultados$ = this.queryFild.valueChanges.pipe(
      tap(),
      map(value => value.trim()),
      filter(value => value.length > 1),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap( value => this.httpClient.get(this.SEARCH_URL, {
        params: {
          search: value,
          fields: this.fields
        }
      })),
      tap((res: any)=> this.total = res.total),
      map((res: any)=> res.result)
    )
  }

  onSearch() {
    
    let value = this.queryFild.value;
    if (value && value.trim() !== '') {
      value = value.trim()
      
     
      let params = new HttpParams();
      params = params.set('search', value);
      params = params.set('fields', this.fields);

      this.resultados$ = this.httpClient.get(this.SEARCH_URL, { params }).pipe(
        tap(
          (res: any) => this.total = res.total
        ),
        map((res: any) => res.results)
      );
    }
  }

}
