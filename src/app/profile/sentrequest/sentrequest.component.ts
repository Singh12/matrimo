import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sentrequest',
  templateUrl: './sentrequest.component.html',
  styleUrls: ['./sentrequest.component.css']
})
export class SentrequestComponent implements OnInit {

  profile: [];
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.toRequestUser(1);
    this.authService.gettoRequest().subscribe(
      profile => this.profile = profile
    )
  }

}
