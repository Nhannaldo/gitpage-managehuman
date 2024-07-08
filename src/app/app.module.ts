import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';

// Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './components/education/education.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { JobComponent } from './components/job/job.component';
import { JoinProjectComponent } from './components/join-project/join-project.component';
import { TrainingComponent } from './components/training/training.component';
import { InfoUserComponent } from './components/info-user/info-user.component';
import { PopupEducationComponent } from './popups/popup-education/popup-education.component';
import { PopupEducationDetailComponent } from './popups/popup-education-detail/popup-education-detail.component';
import { PopupCertificateComponent } from './popups/popup-certificate/popup-certificate.component';
import { PopupCertificateDetailComponent } from './popups/popup-certificate-detail/popup-certificate-detail.component';
import { PopupJoinProjectComponent } from './popups/popup-join-project/popup-join-project.component';
import { PopupJoinProjectDetailComponent } from './popups/popup-join-project-detail/popup-join-project-detail.component';
import { PopupTrainingComponent } from './popups/popup-training/popup-training.component';
import { PopupTrainingDetailComponent } from './popups/popup-training-detail/popup-training-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    CertificateComponent,
    JobComponent,
    JoinProjectComponent,
    TrainingComponent,
    InfoUserComponent,
    PopupEducationComponent,
    PopupEducationDetailComponent,
    PopupCertificateComponent,
    PopupCertificateDetailComponent,
    PopupJoinProjectComponent,
    PopupJoinProjectDetailComponent,
    PopupTrainingComponent,
    PopupTrainingDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSelectModule,
    MatTabsModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    provideHttpClient(),
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
