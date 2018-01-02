import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface UserResponse {
  login: string;
  bio: string;
 // company: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'app';
  login;

  constructor (private http: HttpClient) {
  }

  ngOnInit(): void {
     this.http.get<UserResponse>('https://api.github.com/users/zemlyansckygrigorij').subscribe(data => {
        this.login = data.login;
    }
      );
    const req = this.http.post('http://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        }
      );
// https://localhost:8080/customer/{id}
    /*
    Customer[] =   Promise<Customer[]> {
      return this.http.get(this.customersUrl)
        .toPromise()// (Promise): An ES6 compatible promise with the last value from the observable sequence.
        .then(response => response.json() as Customer[])
        .catch(this.handleError);
  }
  */
  }
}





























