import { Injectable } from '@angular/core';
import { Contact } from './contact.model'
import { last } from '@angular/router/src/utils/collection';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ContactService {


      private  contacts: Contact[] = [
    new Contact(
        1,
    'Ant',
    'Pat',
    69,
    'email',
    'addresss'
        ),

];

  constructor() { }

  getContacts(){
    return this.contacts;
  }

  getContact(index: number) {
    return this.contacts[index];
  }

  editContact(index:number){
    return this.contacts[index];
  }

  addContact(contact: Contact){
    this.contacts.push(contact);

  }

  updateContact(index:number,newContact: Contact){
    this.contacts[index]= newContact;

  }

  deleteContact(index:number) {
    this.contacts.splice(index,1);
  }
}
