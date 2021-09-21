import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@hello-nx/api-interfaces';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'hello-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  iconOpts: AnimationOptions = {
    path: '/assets/77378-sunset.json',
    autoplay: true,
    loop: true,
    initialSegment: [10, 88]
  };
  constructor(private http: HttpClient) {}
}
