import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  
  constructor(private http: HttpClient) { }

  


  createPayment(product) {
   

    return this.http.post( '/api/recharge', product);
}
getRecharge() {

 


  return this.http.get('/api/recharge');
 ;

}
getRechargeDone() {

  return this.http.get('/api/recharge/admin');
 ;

}

getRechargeUndone() {


  return this.http.get('/api/recharge');
 ;

}
updateTransfer() {
  

  return this.http.get('/api/recharge');
 ;

}
updateRecharge(product){
  
  return this.http.patch('/api/completed/:id', product);
}

getRechargebalancee() {


  return this.http.get('/api/balance');
 ;

}

createTransfer(transfer) {
 
  return this.http.post('/transfer', transfer);

}
getTransfer() {


return this.http.get('/transfer');

}

}
