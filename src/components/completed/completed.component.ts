
import { ConfigurationService } from 'src/services/configuration.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Recharge } from 'src/models/recharge';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  recharge: any =[];

  constructor(private configurationService: ConfigurationService, private cdRef: ChangeDetectorRef) { }




  getRecentDetections() {
    this.configurationService.getRechargeDone().subscribe(result => {this.recharge = result;
    this.cdRef.detectChanges();
      });

 }
ngOnInit() {
 this.getRecentDetections();
 const source = timer(1000, 2000);
 const subscribe = source.subscribe(() => this.getRecentDetections());
 }

ngOnDestroy() {

  this.configurationService.getRechargeDone()
  .subscribe(result => this.recharge = result);

}

onClick(){
  this.configurationService.updateRecharge(this.recharge._id)
}

}
