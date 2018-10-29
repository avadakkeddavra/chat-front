import { Injectable } from '@angular/core';

@Injectable()
export class WebSocketService {
 
  ws: any; 
  constructor() {
    if(!this.ws){
      this.ws = new WebSocket('ws://localhost:5544');
    }
  } 
  
  send(data) {
    
    let token = localStorage.getItem('token');
    console.log(token); 
    if(token) {
      data.token = token;
    }

    this.ws.send(JSON.stringify(data));
  }
  
  getInstance() {
    return this.ws;
  }
}
