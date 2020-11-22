import { HttpClient } from '@angular/common/http';
import { delay, take } from 'rxjs/operators';

export class CrudService<T> {
    
    constructor (
        protected httpClient: HttpClient,
        private API_URL
    ) {}
    list() {
        return this.httpClient.get<T[]>(this.API_URL).pipe(
          delay(2000),
          //tap(console.log)
        );
      }
    
      private post(record) {
        return this.httpClient.post(this.API_URL, record).pipe(
          take(1)
        );
      }
    
      private update(record) {
        return this.httpClient.put(`${this.API_URL}/${record.id}`, record).pipe(
          take(1)
        )
      }
    
      loadByID(id) {
        return this.httpClient.get<T>(`${this.API_URL}/${id}`).pipe(
          take(1)
        )
      }
    
      save(record) {
        if (!record.id) {
          return this.post(record);
        }
        return this.update(record);
      }
    
      remove(recordId) {
        return this.httpClient.delete(`${this.API_URL}/${recordId}`).pipe(
          take(1)
        )
      }
}