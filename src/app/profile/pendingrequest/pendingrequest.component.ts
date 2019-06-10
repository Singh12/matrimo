import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-pendingrequest',
  templateUrl: './pendingrequest.component.html',
  styleUrls: ['./pendingrequest.component.css']
})
export class PendingrequestComponent implements OnInit {

  profile: [];
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.pendingRequestUser(1);
    this.authService.getpendingRequest().subscribe(
      profile => this.profile = profile
    )
  }

}
