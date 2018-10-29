import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './core/services/ws.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor(private wss: WebSocketService) {
  }
  
  ngOnInit() {
  
  }

}
