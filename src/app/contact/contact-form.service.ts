import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { ContactFormData } from "./contact-form-data";

@Injectable()
export class ContactFormService {
  domain = "https://api.michaeldsharp.com";
  endpoint = "/contact";

  constructor(private http: Http) {}

  submitForm(formData: ContactFormData) {
    return this.http
      .post(this.domain + this.endpoint, formData)
      .map((res: any) => res.json());
  }
}
