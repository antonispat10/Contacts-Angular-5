import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class Contact { 

  public id: number;
  public name: string;
  public surname: string;
  public telephone: number;
  public email: string;
  public address: string;

  constructor(id:number,name: string, surname:string, telephone:number,email:string, address:string) {
      this.id = id;
      this.name = name;
      this.surname = surname;
      this.telephone = telephone;
      this.email = email;
      this.address = address;

  }

}
