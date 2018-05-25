import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '.././contact.model';
import { ContactService } from '.././contact.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  id: number;

  constructor(private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params) => {
        this.id = +params['id'];
        this.contact = this.contactService.getContact(this.id);
      }
    )
  }

  onEditContact(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteContact(){
    this.contactService.deleteContact(this.id);

  }

}
