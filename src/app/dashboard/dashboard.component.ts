import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../core/services/ws.service';
import * as jwt from 'jsonwebtoken';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  ws: WebSocket;
  user:any;
  constructor(private wss: WebSocketService) { }

  ngOnInit() {

    this.user = jwt.decode(localStorage.getItem('token'));
    this.ws = this.wss.getInstance();

    this.ws.onopen = () => {
     this.wss.send({alias:'online'})
    }

    this.ws.onmessage = this.onMessage;
  }
  
  onMessage(event) {
    let data = JSON.parse(event.data);
    console.log(data);
  }

  send(text) {
    console.log(text);
    let body = {
      alias: 'send',
      body: {
        message: text,
        receiver_id: 2
      },
    }

    this.wss.send(body);
  }
}
