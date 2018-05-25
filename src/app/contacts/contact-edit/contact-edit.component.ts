import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Params, Router,ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  id: number;
  editMode = false;
  contactForm: FormGroup;


  constructor(private route:ActivatedRoute, private router:Router,private contactService:ContactService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.contactService.updateContact(this.id, this.contactForm.value);
    } else {
      this.contactService.addContact(this.contactForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let contactName = '';
    let contactSurname = '';
    let contactEmail = '';
    let contactTelephone ;
    let contactAddress = '';

    if (this.editMode) {
      const contact = this.contactService.getContact(this.id);
      contactName = contact.name;
      contactSurname = contact.surname;
      contactEmail = contact.email;
      contactTelephone = contact.telephone;
      contactAddress = contact.address;
      
    }

    this.contactForm = new FormGroup({
      'name': new FormControl(contactName, Validators.required),
      'surname': new FormControl(contactSurname, Validators.required),
      'email': new FormControl(contactEmail, Validators.required),
      'telephone': new FormControl(contactTelephone, Validators.required),
      'address': new FormControl(contactAddress, Validators.required),
    });
  }

}
