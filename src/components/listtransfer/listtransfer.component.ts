import { ConfigurationService } from 'src/services/configuration.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subscription, timer } from 'rxjs';
@Component({
  selector: 'app-listtransfer',
  templateUrl: './listtransfer.component.html',
  styleUrls: ['./listtransfer.component.css']
})
export class ListtransferComponent implements OnInit {
  transfer: any= []

  constructor(private configurationService: ConfigurationService, private cdRef: ChangeDetectorRef) { }

  getRecentDetections() {
    this.configurationService.getTransfer().subscribe(result => {this.transfer = result;
    this.cdRef.detectChanges();
      });
 }
ngOnInit() {
 this.getRecentDetections();
 const source = timer(1000, 2000);
 const subscribe = source.subscribe(() => this.getRecentDetections());
 }

ngOnDestroy() {

  this.configurationService.getTransfer()
  .subscribe(result => this.transfer = result);

}

}