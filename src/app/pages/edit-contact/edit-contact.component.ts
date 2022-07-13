import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  currContact!: Contact

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.currContact = data['contact'] || this.contactService.getEmptyContact() as Contact
    })
  }

  async onSaveContact() {
    await lastValueFrom(this.contactService.saveContact(this.currContact))
    this.router.navigateByUrl('/contact')
  }
}
