import { SpinnerComponent } from 'src/components/spinner/spinner.component';
import { LoginComponent } from 'src/components/login/login.component';

import { CompletedComponent } from './../components/completed/completed.component';
import { BalanceComponent } from './../components/balance/balance.component';
import { CreatetransferComponent } from './../components/createtransfer/createtransfer.component';
import { ListtransferComponent } from './../components/listtransfer/listtransfer.component';
import { HeaderComponent } from './../components/header/header.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RechargeComponent } from 'src/components/recharge/recharge.component';
import { ListrechargeComponent } from 'src/components/listrecharge/listrecharge.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { NotCompletedComponent } from 'src/components/not-completed/not-completed.component';
import { BasicAuthInterceptor } from 'src/services/basic-auth.interceptor.service';
import { ErrorInterceptor } from 'src/services/error.interceptor.service';
import { AuthGuard } from 'src/services/auth-gaurd.service';



@NgModule({
  declarations: [
    AppComponent,
    RechargeComponent,
    ListrechargeComponent,
    HeaderComponent,
    ListtransferComponent,
    CreatetransferComponent,
    BalanceComponent,
    NotCompletedComponent,
    CompletedComponent,
    LoginComponent,
    SpinnerComponent,
    
  //  LoginFormComponent,
 //   RegisterFormComponent,
  //  UserService
 
],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() ,// ToastrModule added
    RouterModule.forRoot([
      { path: '', component: ListrechargeComponent, pathMatch: 'full' },
     { path: 'recharge/new', component: RechargeComponent , canActivate: [AuthGuard] },
     { path: 'rechargelist', component: ListrechargeComponent, canActivate: [AuthGuard] },
     { path: 'send', component: ListtransferComponent, canActivate: [AuthGuard] },
    // { path: '',component: ListrechargeComponent, canActivate: [AuthGuard] },
     { path: 'login', component: LoginComponent },
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
