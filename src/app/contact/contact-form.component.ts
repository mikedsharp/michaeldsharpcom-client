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

    onValueChanged(data?: any){
        if(!this.formModel){
            return; 
        }
        const form = this.formModel; 
    }

    onSubmit(){
        this.contactFormService
            .submitForm(this.formModel.value)
            .subscribe(response => this.contactResponse = response, 
            err => {
                console.log(err);
            }); 
    }

    buildForm(){
        this.formModel = this.fb.group({
            'name' : ['',  Validators.compose([Validators.required])], 
            'from': ['',  Validators.compose([Validators.required])], 
            'body': ['',  Validators.compose([Validators.required])], 
        });  

        this.formModel.valueChanges
            .subscribe(data => this.onValueChanged(data));
    } 

    ngOnInit() {
        this.buildForm();
     }
}