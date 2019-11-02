

import { Component, OnInit } from '@angular/core';
import { Recharge } from 'src/models/recharge';
import { ConfigurationService } from 'src/services/configuration.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {
  recharge: Recharge = {
    smileAccount:'',
    smileNumber:'',
    amount:0
  };

  constructor(private configurationService: ConfigurationService,  private toastr: ToastrService) { }

  ngOnInit() {

  }

  submit() {

    if (this.recharge.amount == 2000) {
    this.recharge.amount = 2500;
    }

    if (this.recharge.amount == 4000) {
    this.recharge.amount = 5000;
    }

  

    this.configurationService.createPayment(this.recharge)  .subscribe(x => {
    });
    this.toastr.success(this.recharge.smileNumber, ' is Added');
  }


}
