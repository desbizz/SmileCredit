import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/services/authenticated.service';
import { Subscription } from 'rxjs';
import { Credentials } from 'src/models/user';




@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
  private subscription: Subscription;

  brandNew: boolean;
  error: string;
  isRequesting: boolean;
  submitted: boolean = false;
  credentials: Credentials = { email: '', password: '' };

    constructor(
      private router: Router,private activatedRoute: ActivatedRoute,
        private authenticationService: AuthenticationService
    ) { 
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
      this.subscription = this.activatedRoute.queryParams.subscribe(
        (param: any) => {
           this.brandNew = param['brandNew'];   
           this.credentials.email = param['email'];         
        });      
    }

    ngOnDestroy() {
      // prevent memory leak by unsubscribing
      this.subscription.unsubscribe();
    }

    login({ value, valid }: { value: Credentials, valid: boolean }) {
        this.submitted = true;

        // stop here if form is invalid
    
        this.authenticationService.login(value.email, value.password)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['/']);
                },
                error => {
                    this.error = error;
                    this.isRequesting = false;
                });
    }
}