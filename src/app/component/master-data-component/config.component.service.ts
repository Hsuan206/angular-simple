import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from './config';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})

class ConfigService {
  private apiServerUrl = environment.apiBaseUrl+'/api';
  constructor(private http: HttpClient) {}

  public getConfigs():Observable<Config[]> {
      return this.http.get<Config[]>(`${this.apiServerUrl}/configs`);
  }
  public addConfig(config: Config): Observable<Config> {
    return this.http.post<Config>(`${this.apiServerUrl}/configs`, config);
  }

  public updateConfig(configId: number, config: Config): Observable<Config> {
    return this.http.put<Config>(`${this.apiServerUrl}/configs${configId}`, config);
  }

  public deleteConfig(configId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/configs/${configId}`);
  }
  public uploadFile(file: any){
    let formData:FormData = new FormData();    
    if(file != null){
      formData.append('Upload', file, file.name);
    }

    return this.http.post((`${this.apiServerUrl}/configs/upload`), formData);
  }
}

export { ConfigService }