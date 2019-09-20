import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {

  contact = {email: "", message: ""}

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.contact.email = form.value.email;
    this.contact.message = form.value.message;
    alert("e-mail: "+this.contact.email+"\n\n"+this.contact.message);

    form.resetForm();
  }

}
