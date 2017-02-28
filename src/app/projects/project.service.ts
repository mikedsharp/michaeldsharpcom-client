import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {

    constructor() { }

    projects =  [
        {
            name: 'Rebound', 
            id: 'rebound', 
            bgImage: '../../assets/macbook-splash.png', 
            content: {
                slides: ['../../assets/macbook-splash.png'], 
                subHeading: '', 
                paragraphs: [
                    'Art party jianbing blog, flexitarian raw denim church-key salvia tofu. Meggings listicle normcore street art, kitsch master cleanse sustainable DIY echo park chambray. Biodiesel ethical man braid, literally portland af craft beer VHS gluten-free hoodie gastropub distillery lyft. Next level synth fashion axe truffaut. Health goth etsy 90s, vegan godard locavore plaid fam deep v pitchfork. Sriracha synth vice, VHS tilde tote bag pour-over thundercats affogato distillery woke tattooed mlkshk tousled. Meggings iPhone flexitarian bushwick raw denim green juice..', 
                    'Tote bag vexillologist gentrify, enamel pin XOXO keffiyeh prism iceland tattooed sriracha chartreuse health goth ugh venmo four loko. IPhone tattooed raw denim vegan. Williamsburg man braid plaid austin gastropub, fixie viral. Roof party distillery umami kitsch hella. Viral hell of small batch, enamel pin fingerstache cliche microdosing hot chicken leggings lumbersexual green juice. Direct trade literally poutine, next level celiac umami artisan blue bottle mixtape fam knausgaard gluten-free. Woke cray crucifix kale chips.'
                ], 
                links: [
                    {
                        url: 'http://youtube.com/programmerinprogress', 
                        text: 'Video'
                    }, 
                    {
                        url: 'http://github.com/programmerinprogress', 
                        text: 'Source'
                    }, 
                    {
                        url: 'http://google.com', 
                        text: 'Download'
                    }
                ]
            }
            
        }, 
         {
            name: 'MapWork', 
            id: 'mapwork', 
            bgImage: '../../assets/macbook-splash.jpg' 
        },
         {
            name: 'BLOCK', 
            id: 'block', 
            bgImage: '../../assets/macbook-splash.jpg' 
        },
         {
            name: 'Alien Invasion', 
            id: 'alien-invasion', 
            bgImage: '../../assets/macbook-splash.png' 
        },
         {
            name: 'Meteor defence', 
            id: 'meteor-defence', 
            bgImage: '../../assets/macbook-splash.jpg' 
        }
    ]; 

    getProjects(){
        return this.projects; 
    }

    getProject(id:string){
        return this.projects.filter(function(obj){ return obj.id == id; })
    }
}