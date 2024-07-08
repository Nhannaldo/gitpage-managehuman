import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Certificate,
  Education,
  ICertificate,
  IEducation,
  IJoinProject,
  ITraining,
  JoinProject,
  Training,
} from 'src/model/model';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}
  apiUrl: string = 'http://localhost:3000/';

  //Education

  getAllEducation(): Observable<IEducation[]> {
    return this.http.get<IEducation[]>(this.apiUrl + 'DataEducation');
  }

  addEducation(obj: Education): Observable<IEducation> {
    return this.http.post<IEducation>(this.apiUrl + 'DataEducation', obj);
  }

  updateEducation(education: IEducation): Observable<IEducation> {
    return this.http.put<IEducation>(
      this.apiUrl + `DataEducation/${education.id}`,
      education
    );
  }

  deleteEducation(education: IEducation): Observable<IEducation> {
    const updatedData = { ...education, trangthai_id: false };

    return this.http.put<IEducation>(
      this.apiUrl + `DataEducation/${education.id}`,
      updatedData
    );
  }

  //Certificate

  getAllCertificate(): Observable<ICertificate[]> {
    return this.http.get<ICertificate[]>(this.apiUrl + 'DataCertificate');
  }

  addCertificate(obj: Certificate): Observable<ICertificate> {
    return this.http.post<ICertificate>(this.apiUrl + 'DataCertificate', obj);
  }

  updateCertificate(certificate: ICertificate): Observable<ICertificate> {
    return this.http.put<ICertificate>(
      this.apiUrl + `DataCertificate/${certificate.id}`,
      certificate
    );
  }

  deleteCertificate(certificate: ICertificate): Observable<ICertificate> {
    const updatedData = { ...certificate, trangthai_id: false };

    return this.http.put<ICertificate>(
      this.apiUrl + `DataCertificate/${certificate.id}`,
      updatedData
    );
  }
  // Join Project
  getAllJoinProject(): Observable<IJoinProject[]> {
    return this.http.get<IJoinProject[]>(this.apiUrl + 'DataJoinProject');
  }

  addJoinProject(obj: JoinProject): Observable<IJoinProject> {
    return this.http.post<IJoinProject>(this.apiUrl + 'DataJoinProject', obj);
  }

  updateJoinProject(joinproject: IJoinProject): Observable<IJoinProject> {
    return this.http.put<IJoinProject>(
      this.apiUrl + `DataJoinProject/${joinproject.id}`,
      joinproject
    );
  }

  deleteJoinProject(joinproject: IJoinProject): Observable<IJoinProject> {
    const updatedData = { ...joinproject, trangthai_id: false };

    return this.http.put<IJoinProject>(
      this.apiUrl + `DataJoinProject/${joinproject.id}`,
      updatedData
    );
  }

  //Training
  getAllTraining(): Observable<ITraining[]> {
    return this.http.get<ITraining[]>(this.apiUrl + 'DataTraining');
  }

  addTraining(obj: Training): Observable<ITraining> {
    return this.http.post<ITraining>(this.apiUrl + 'DataTraining', obj);
  }

  updateTraining(training: ITraining): Observable<ITraining> {
    return this.http.put<ITraining>(
      this.apiUrl + `DataTraining/${training.id}`,
      training
    );
  }

  deleteTraining(training: ITraining): Observable<ITraining> {
    const updatedData = { ...training, trangthai_id: false };

    return this.http.put<ITraining>(
      this.apiUrl + `DataTraining/${training.id}`,
      updatedData
    );
  }
}
