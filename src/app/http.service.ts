import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getData() {
    console.log('true');
    return this.http.get('data.json');

  }
}
