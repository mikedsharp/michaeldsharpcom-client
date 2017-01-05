import { Component, OnInit } from '@angular/core';
import {FeedbackService} from './feedback.service'; 
import '../rxjs-operators';

@Component({
    templateUrl: 'contact.component.html', 
    styleUrls: ['contact.component.scss'], 
    providers: [FeedbackService],
    selector:'contact-view'
})
export class ContactViewComponent implements OnInit {

    feedbackResponse = null; 

    registerFeedback(feedback){
        var feedbackResult = feedback == 'like' ? true : false; 
        this.feedbackService
            .registerFeedback(feedbackResult)
            .subscribe(response => this.feedbackResponse = response, 
            err => {
                // Log errors if any
                console.log(err);
            }); 
    }

    constructor(private feedbackService: FeedbackService) { }

    onSuccess(res:any){
        console.log(res); 
    }

    ngOnInit() { }
}