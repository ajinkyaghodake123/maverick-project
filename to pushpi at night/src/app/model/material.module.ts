import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatToolbarModule,MatInputModule ,MatCardModule,MatChipsModule,MatDialogModule,MatStepperModule,MatFormFieldModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule,MatToolbarModule,MatInputModule,MatCardModule,MatChipsModule,MatDialogModule,MatStepperModule,MatFormFieldModule],
  exports: [MatButtonModule,MatToolbarModule,MatInputModule,MatCardModule,MatChipsModule,MatDialogModule,MatStepperModule,MatFormFieldModule],
})
export class MaterialModule { }