import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../core/services/ws.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  ws:any;

  constructor(private wss: WebSocketService) {
  }

  ngOnInit() {
    this.ws = this.wss.getInstance();
  
    this.ws.onopen = () => {
      console.log('ws connected');
    }

    this.ws.onmessage = this.onMessage;
  }

  onMessage(event) {
    let Response = JSON.parse(event.data);

    if(Response.success) {
      localStorage.setItem('token', Response.token);
    }
  }

  login(form:NgForm) {
    
    let body = {
      alias: 'login',
      body: form.value
    }

    this.wss.send(body);
  }

}
