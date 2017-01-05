import { Component, OnInit } from '@angular/core';
import {FeedbackService} from './feedback.service'; 
import {ContactFormService} from './contact-form.service';
import '../rxjs-operators';

@Component({
    templateUrl: 'contact.component.html', 
    styleUrls: ['contact.component.scss'], 
    providers: [FeedbackService, ContactFormService],
    selector:'contact-view'
})
export class ContactViewComponent implements OnInit {

    feedbackResponse = null; 
    contactResponse = null;

    form = {
        name: 'mikey messageface', 
        from: 'mike@message.com',
        body: 'hello i am a message!'
    }; 

    registerFeedback(feedback){
        var feedbackResult = feedback == 'like' ? true : false; 
        this.feedbackService
            .registerFeedback(feedbackResult)
            .subscribe(response => this.contactResponse = response, 
            err => {
                // Log errors if any
                console.log(err);
            }); 
    }

    sendForm(){
        this.contactFormService.submitForm(this.form)
            .subscribe()
    }

    constructor(private feedbackService: FeedbackService, private contactFormService: ContactFormService) { }

    onSuccess(res:any){
        console.log(res); 
    }

    ngOnInit() { }
}