import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ConfigurationService } from 'src/services/configuration.service';
import { timer } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/authenticated.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent   {
 currentUser: User;
  balance:any={}
  constructor(private configurationService: ConfigurationService, private cdRef: ChangeDetectorRef,
    private router: Router,
    
    private authenticationService: AuthenticationService) 
      {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }


  getRecentDetections() {
    this.configurationService.getRechargebalancee().subscribe(result => {this.balance = result;
    this.cdRef.detectChanges();
      });
 }
ngOnInit() {
  if (this.currentUser){
    this.getRecentDetections();
 const source = timer(1000, 2000);
 const subscribe = source.subscribe(() => this.getRecentDetections());
  }
 
 }

ngOnDestroy() {
  if (this.currentUser)
  this.configurationService.getRechargebalancee()
  .subscribe(result => this.balance = result);

}

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}