import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { ContactService } from 'src/app/services/contact.service';
import { StorageService } from 'src/app/services/storage.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-contact-deatails',
  templateUrl: './contact-deatails.component.html',
  styleUrls: ['./contact-deatails.component.scss']
})
export class ContactDeatailsComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserServiceService,
    private storageService: StorageService
  ) { }
  subscription!: Subscription
  currContact!: Contact
  user!: User
  user$!: Observable<User>


  ngOnInit() {
    this.route.data.subscribe(data => {
      this.currContact = data['contact']
    })
    this.subscription = this.userService.user$.subscribe(user => {
      this.user = user!
    })
  }

  onBack() {
    this.router.navigateByUrl('/contact')
  }

}
