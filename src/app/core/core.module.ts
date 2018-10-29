import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSocketService } from './services/ws.service';
import { GuestGuard } from './guest.guard';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    WebSocketService,
    GuestGuard,
    AuthGuard
  ],
  declarations: []
})
export class CoreModule { }
