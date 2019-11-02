import { ConfigurationService } from './../../services/configuration.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-createtransfer',
  templateUrl: './createtransfer.component.html',
  styleUrls: ['./createtransfer.component.css']
})
export class CreatetransferComponent implements OnInit {
  transfer :any= {}

  constructor(private configurationService: ConfigurationService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
  }

  submit(){
 
    this.configurationService.createTransfer(this.transfer).subscribe(x => {
    });
    this.toastr.success(this.transfer.accountName, 'Number added succesfully ');
}

}
