


import { ConfigurationService } from 'src/services/configuration.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Recharge } from 'src/models/recharge';
import { Subscription, timer } from 'rxjs';


@Component({
  selector: 'app-not-completed',
  templateUrl: './not-completed.component.html',
  styleUrls: ['./not-completed.component.css']
})
export class NotCompletedComponent implements OnInit {

  recharge: any =[];

  constructor(private configurationService: ConfigurationService, private cdRef: ChangeDetectorRef) { }




  getRecentDetections() {
    this.configurationService.getRechargeUndone().subscribe(result => {this.recharge = result;
    this.cdRef.detectChanges();
      });
 }
ngOnInit() {
 this.getRecentDetections();
 const source = timer(1000, 2000);
 const subscribe = source.subscribe(() => this.getRecentDetections());
 }

ngOnDestroy() {

  this.configurationService.getRechargeUndone()
  .subscribe(result => this.recharge = result);

}


}

