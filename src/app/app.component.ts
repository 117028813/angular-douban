import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items;

  constructor(private http: HttpClient) {
    
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/list').subscribe(data => {
      this.items = data;
    })
  }
}
