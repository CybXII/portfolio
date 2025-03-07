import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root',
})
export class ProjectdataService {
    public projectdata = [
        {
            name: 'Videoflix [Fullstack]',
            imgPath: 'assets/img/videoflix.png',
            animation: 'data-aos="fade-left"',
            skills: 'Angular | TypeScript | SCSS | Python | Django | Django Rest Framework | PostgreSQL | Material Design',
            projectPath:"https://videoflix.luft-alexander.de/",
            githubPath:"https://github.com/CybXII/videoflix-backend"
        },
        {
            name: 'DaBubble [Frontend]',
            imgPath: 'assets/img/dabubble.png',
            animation: 'data-aos="fade-right"',
            skills: 'Angular | TypeScript | Firebase | SCSS  ',
            projectPath:"https://dabubble.luft-alexander.de",
            githubPath:"https://github.com/CybXII/DaBubble"
        },
        {
            name: 'Join [Frontend]',
            imgPath: 'assets/img/join.png',
            animation: 'data-aos="fade-right"',
            skills: 'JavaScript | Firebase | CSS',
            projectPath:"https://join.luft-alexander.de/",
            githubPath:"https://github.com/CybXII/JOIN"
        },
        {
            name: 'Coderr [Backend]',
            imgPath: 'assets/img/coderr.png',
            animation: 'data-aos="fade-left"',
            skills: 'Python | Django | Django Rest Framework | PostgreSQL',
            projectPath:"https://coderr.luft-alexander.de/",
            githubPath:"https://github.com/CybXII/coderr-backend"
        },
    ];
    public skillsData = [
            {stack:[
                {
                    name: 'JavaScript',
                    imgPath: 'assets/img/js.svg'
                },
                {
                    name: 'Angular',
                    imgPath: 'assets/img/angular.svg'
                },
                {
                    name: 'GIT',
                    imgPath: 'assets/img/git.svg'
                }
            ]},
            {stack:[
                {
                    name: 'TypeScript',
                    imgPath: 'assets/img/ts.svg'
                },
                {
                    name: 'Django',
                    imgPath: 'assets/img/django.svg'
                },
                {
                    name: 'Material design',
                    imgPath: 'assets/img/material.svg'
                },
            ]},
            {stack:[
                {
                    name: 'Python',
                    imgPath: 'assets/img/python.svg'
                },
                {
                    name: "Linux",
                    imgPath: 'assets/img/linux.svg'
                },
                {
                    name: 'Github',
                    imgPath: 'assets/img/github.svg'
                },
                
            ]},
            {stack:[
                {
                    name: 'Firebase',
                    imgPath: 'assets/img/firebase.svg'
                },
                {
                    name: 'Rest-Api',
                    imgPath: 'assets/img/restapis.svg'
                },
                {
                    name: 'PostgreSQL',
                    imgPath: 'assets/img/postgresql.svg'
                },
            ]},
        ];
}
