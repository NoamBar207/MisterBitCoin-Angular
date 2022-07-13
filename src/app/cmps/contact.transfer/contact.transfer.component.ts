import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { StorageService } from 'src/app/services/storage.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-contact-transfer',
  templateUrl: './contact.transfer.component.html',
  styleUrls: ['./contact.transfer.component.scss']
})
export class ContactTransferComponent {

  constructor(
    private userService: UserServiceService,
    private storageService: StorageService
  ) { }

  @Input() currContact!: Contact
  amount: number = 0

  onTransfer() {
    this.userService.addMove(this.currContact, this.amount)
    this.amount = 0
  }
}
