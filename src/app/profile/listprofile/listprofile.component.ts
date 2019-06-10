import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-listprofile',
  templateUrl: './listprofile.component.html',
  styleUrls: ['./listprofile.component.css']
})
export class ListprofileComponent implements OnInit {
profile: [];
profileId: string;
  constructor(private authService: AuthService) { }
  userId = "";
  ngOnInit() {
    console.log('I am in pending', this.authService.getauthTokenData(), this.authService.getUserId());
    
    this.authService.getauthTokenData();
    this.authService.getauthUserDetails().subscribe(
      id => {
        console.log(id.id);
        this.authService.listOfProfile(id.id);
      }
    );
    this.userId = this.authService.getUserId();
    this.authService.listOfProfile(this.userId);
    this.authService.getProfileOfUser().subscribe(
      profile => this.profile = profile
    )
  }

  dislike(profile) {
    console.log(profile);
    alert('Profile Disliked');
  }

  like(profile) {
   const likeProfile =   {
      "receiverAge": profile.age,
    
      "receiverFirstName": profile.firstName,
    
      "receiverLastName": profile.lastName,
    
      "receiverSalary": profile.monthlyIncome,
    
      "receiverUserId": profile.id,
    
     "receiverEmail":profile.emailId,
    
      "senderUserId": this.userId
    }
    console.log(likeProfile);
    this.authService.likeProfile(likeProfile
    );
  }
}
