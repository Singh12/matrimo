import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ListprofileComponent } from './profile/listprofile/listprofile.component';
import { PendingrequestComponent } from './profile/pendingrequest/pendingrequest.component';
import { SentrequestComponent } from './profile/sentrequest/sentrequest.component';

describe('AppComponent', () => {
  const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path: 'profile', component: ProfileComponent, children: [
      { path: '', redirectTo: "profilelist" , pathMatch: "full"},
      {path:'profilelist', component: ListprofileComponent},
      {path:'pendingrequest', component: PendingrequestComponent},
      {path:'sentrequest', component: SentrequestComponent},
    ]}
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HeaderComponent,
        FooterComponent
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'final'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('final');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to final!');
  });
});
