import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'; 
import {ContactFormService} from './contact-form.service';

@Component({
    selector: 'contact-form',
    styleUrls: ['contact-form.component.scss'],
    templateUrl: 'contact-form.component.html', 
    providers: [ContactFormService]
})
export class ContactFormComponent implements OnInit {
    constructor(private fb:FormBuilder, private contactFormService : ContactFormService) { }

    formModel:FormGroup; 
    contactResponse = null;
    submitted = false; 
    emailRegex = '';

    onValueChanged(data?: any){
        if(!this.formModel){
            return; 
        }
        const form = this.formModel; 
    }

    onSubmit(){
        this.submitted = true; 
        this.contactFormService
            .submitForm(this.formModel.value)
            .subscribe(this.onResponse, 
            err => {
                console.log(err);
            }); 
    }

    onResponse(response){
        this.contactResponse = response; 
    }

    buildForm(){
        this.formModel = this.fb.group({
            'name' : ['',  Validators.compose([Validators.required])], 
            'from': ['', [Validators.required, Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]], 
            'body': ['',  Validators.compose([Validators.required])], 
        });  

        this.formModel.valueChanges
            .subscribe(data => this.onValueChanged(data));
    } 

    ngOnInit() {
        this.buildForm();
     }
}