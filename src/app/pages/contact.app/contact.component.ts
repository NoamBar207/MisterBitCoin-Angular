import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service'
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private bitCoinService: BitcoinService
  ) { }

  contacts!: Contact[]
  subscription!: Subscription
  currUser!: User
  currBitcoin$!: Observable<number>
  selectedContactId!: string
  msg!: string

  onRemoveContact(contact: Contact) {
    this.contactService.deleteContact(contact._id as string)
    this.msg = 'Deleted ' + contact.name + ' Sucssefully'
  }

  ngOnInit(): void {
    this.contactService.loadContacts();
    this.contactService.contacts$.subscribe((contacts) => this.contacts = contacts)
  }

}
