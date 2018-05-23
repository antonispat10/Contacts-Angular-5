import { Component, OnInit } from '@angular/core';
import { ContactService } from '.././contact.service';
import {Contact} from '.././contact.model';
import { Router,ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  constructor(private contactService: ContactService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.contactService.getContacts();
  }


  onNewContact() {
    this.router.navigate(['new'], {relativeTo: this.route});

  }

}
