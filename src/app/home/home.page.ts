import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { HttpserviceService } from '../services/httpservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  productDetails : any
  showAddemployee :any
  showGetemployee :any
  productData : any
  updateItems : any



  constructor(private formGroup : FormBuilder,private service : HttpserviceService) {}

  ngOnInit(): void {
    this.productDetails = new FormGroup({
      Brand : new FormControl(''),
      color:new FormControl (''),
      cost : new FormControl(''),
      quantity :new FormControl('')
    })
  }



  showForm(){
    this.showAddemployee = true
    this.showGetemployee = false
  }
  showGet(){
    this.showGetemployee = true
    this.showAddemployee= false
    this.service.getProduct().subscribe({
      next :(data) =>{
        console.log("getdata",data.result)
        this.productData = data.result
        console.log("getdata22",this.productData)
      }
    })
  

  }

  onSubmit(){
    console.log('details',this.productDetails.value)
    this.service.addProduct(this.productDetails.value).subscribe({
      next : (data) =>{
        console.log("data",data)
      },
      error :(err) =>{
        console.log('err',err)
      }
    })
  }

  update(data){
   console.log("darda",data)
   this.showAddemployee = true
   this.showGetemployee = false
   this.updateItems = data
   console.log("darda",this.updateItems.Brand)
  }

  delete(data){
console.log(data.uuid)
this.service.Delete(data.uuid).subscribe({
  next : (res) =>{
    console.log('success')
  },
  error :(err)=>{
    console.log('err',err)
  }
})
  }

 


}
