import { Injectable } from '@angular/core';
import { Contact } from './contact.model'
import { last } from '@angular/router/src/utils/collection';

@Injectable()
export class ContactService {

  private contacts: Contact[];

  constructor() { }

  getContacts() {
    return this.contacts;
  }

}
