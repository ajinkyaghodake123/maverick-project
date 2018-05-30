import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { AppComponent } from '../app.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { GameCardComponent } from '../game-card/game-card.component';
import { CarouselCardComponent } from '../carousel-card/carousel-card.component';
import { QuizComponent } from '../quiz/quiz.component';
import { ResultComponent } from '../result/result.component';
import { PlayComponent } from '../play/play.component';
import { RegistrationComponent } from '../registration/registration.component';
import { AllTopicsInCategoryComponent } from "../all-topics-in-category/all-topics-in-category.component";
import { QuestionsComponent } from "../questions/questions.component";
import { QuestionDetailComponent } from "../question-detail/question-detail.component";
import { TopicDialogComponent } from "../topic-dialog/topic-dialog.component";
import { QuestionDialogComponent } from "../question-dialog/question-dialog.component";
import { GameCreateComponent } from "../game-create/game-create.component";
import { QuestionService } from "../services/questionservice.service";
import { RecentGameComponent } from '../recent-game/recent-game.component';
import { QuestionCategoryComponent } from '../question-category/question-category.component';
import { CategorySuggetionsComponent } from '../category-suggetions/category-suggetions.component';
import { AuthGuard } from '../LoginAuth/auth.guard';
import { UserupdateprofileComponent } from '../UserProfile/userupdateprofile/userupdateprofile.component';
import { UserProfileComponent } from '../UserProfile/user-profile/user-profile.component';
import { AdministartionComponent } from '../administartion/administartion.component';
const routes: Routes = [


  { path: '', pathMatch: 'full', redirectTo: 'maverick' },
  { path: 'register', component: RegistrationComponent },
  { path: 'question', component: QuestionCategoryComponent, canActivate: [AuthGuard] },
  { path: 'category-details', component: AllTopicsInCategoryComponent, canActivate: [AuthGuard] },
  { path: 'topic-details', component: QuestionsComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'category', component: ContentComponent, canActivate: [AuthGuard] },
  { path: 'create-game', component: GameCreateComponent, canActivate: [AuthGuard]},
  {
    component: ContentComponent, canActivate: [AuthGuard],
    path: 'home/:userId'
  },
  {
    component: ContentComponent, canActivate: [AuthGuard],
    path: 'home'
  },
  {
    component: ContentComponent, canActivate: [AuthGuard],
    path: 'content'
  },
  {
    component: LandingPageComponent,
    path: 'maverick'
  },
  {
    path: 'game-by-categoryId/:id/:userId',
    component: ContentComponent, canActivate: [AuthGuard]
  },
  { path: 'play', component: PlayComponent, canActivate: [AuthGuard] },
  { path: 'quiz', component: QuizComponent, canActivate: [AuthGuard] },
  { path: 'result', component: ResultComponent, canActivate: [AuthGuard] },
  { path: 'categorySuggetions/:id', component: CategorySuggetionsComponent },

  { path: 'question-detail', component: QuestionDetailComponent, canActivate: [AuthGuard] },
  { path: 'add-topic', component: TopicDialogComponent, canActivate: [AuthGuard]},
  { path: 'add-question', component: QuestionDialogComponent, canActivate: [AuthGuard]},  
  { path: 'form/:id', component: UserupdateprofileComponent,canActivate: [AuthGuard] },
  { path:'admin', component: AdministartionComponent,canActivate: [AuthGuard]},
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  //{ path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'maverick' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]

})
export class RoutingModule { }
