import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/auth.guard';
import { GuestGuard } from './core/guest.guard';

const routes: Routes = [
    { path: '', component: DashboardComponent, canActivate:[AuthGuard] },
    { path:'login', component: LoginComponent, canActivate: [GuestGuard]}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutes {}