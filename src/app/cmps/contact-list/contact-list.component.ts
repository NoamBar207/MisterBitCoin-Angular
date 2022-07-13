import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {

  constructor(
    private contactService: ContactService
  ) { }

  @Input() contacts!: Contact[];
  @Output() onRemove = new EventEmitter<Contact>()
  @Output() onSelect = new EventEmitter<string>()

}
