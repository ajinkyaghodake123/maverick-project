import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MasonryModule } from './masonry/masonry.module';
import { Masonry } from './masonry/masonry-token';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CategoryUrlsService } from './category-urls.service';
import { GameCardComponent } from './game-card/game-card.component';
import { RouterModule, Routes } from '@angular/router';
import { PlayComponent } from './play/play.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { RoutingModule } from './routing/routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AdvancedModeComponent } from "./advanced-mode/advanced-mode.component";

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCardTitle,
  MatToolbarModule,
  MatCheckboxModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatIconModule,
  MatChipsModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NguCarouselModule } from './carousel/ngu-carousel.module';
import { CarouselCardComponent } from './carousel-card/carousel-card.component';
import { RecommendationService } from './recommendation.service';
import { MatModule } from './/mat.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { RegDialogComponent } from './reg-dialog/reg-dialog.component';
import { LoginUserService } from './services/login-user.service';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, AuthService } from "angular5-social-login";
// import { GameManagerService } from '../services/game-manager.service';
import { GameService } from './services/game.service';

import { MultiplayerPopupComponent } from './multiplayer-popup/multiplayer-popup.component';
import { UserService } from './services/user.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AllTopicsInCategoryComponent } from "./all-topics-in-category/all-topics-in-category.component";
import { QuestionsComponent } from "./questions/questions.component";
import { QuestionService } from "./services/questionservice.service";
import { QuestionCategoryComponent } from './question-category/question-category.component';
import { QuizService } from './services/quiz.service';
import { ContentComponent } from './content/content.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { GameManagerPopupComponent } from './game-manager-popup/game-manager-popup.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
//import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { RecentGameComponent } from './recent-game/recent-game.component';
//import { UserComponent } from './profile-user/profile-user.component';
import { UserProfileService } from './services/user-profile.service';
//import { ProfileGameCardComponent } from './profile-game-card/profile-game-card.component';
import { CategorySuggetionsComponent } from './category-suggetions/category-suggetions.component';
import { LoginAuthService } from './LoginAuth/login-auth.service';
import { AuthGuard } from './LoginAuth/auth.guard';
import { TopicDialogComponent } from './topic-dialog/topic-dialog.component';
import { QuestionDialogComponent } from './question-dialog/question-dialog.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { UserProfileComponent } from './UserProfile/user-profile/user-profile.component';
import { UserupdateprofileComponent } from './UserProfile/userupdateprofile/userupdateprofile.component';
import { GameCreateComponent } from './game-create/game-create.component';
import { AdministrationComponent } from './administration/administration.component';
const masonryProviders = [
  { provide: Masonry, useFactory: () => window['Masonry'] }
];
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("Your-Facebook-app-id")
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("1053365211731-eaftr0lsg378ut9sn33fb00u11is59mn.apps.googleusercontent.com")
      },
    ]);
  return config;
}
@NgModule({
  declarations: [
    // UserComponent,
    RecentGameComponent,
    AppComponent,
    GameCardComponent,
    ContentComponent,
    SideNavComponent,
    LandingPageComponent,
    LoginDialogComponent,
    AdvancedModeComponent,
    RegDialogComponent,
    PlayComponent,
    AllTopicsInCategoryComponent,
    QuestionsComponent,
    QuestionCategoryComponent,
    QuizComponent,
    ResultComponent,
    CarouselCardComponent,
    MultiplayerPopupComponent,
    GameManagerPopupComponent,
    RegistrationComponent,
    CategorySuggetionsComponent,
    TopicDialogComponent,
    QuestionDialogComponent,
    QuestionDetailComponent,
    DialogboxComponent,
    UserProfileComponent,
    UserupdateprofileComponent,
    GameCreateComponent,
    AdministrationComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatAutocompleteModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MasonryModule.forRoot(masonryProviders),
    HttpClientModule,
    MatDialogModule,
    RouterModule,
    RoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NguCarouselModule,
    FlexLayoutModule,
    MatModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    })

  ],
  entryComponents: [
    RegDialogComponent,
    LoginDialogComponent,
    DialogboxComponent,
    AdvancedModeComponent
  ],
  providers: [
    CategoryUrlsService,
    RecommendationService,
    GameService,
    QuizService,
    AuthService, LoginUserService,
    UserService,
    UserProfileService,
    QuestionService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    LoginAuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }