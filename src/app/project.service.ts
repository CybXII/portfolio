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
            name: 'Coderr [Backend]',
            imgPath: 'assets/img/coderr.png',
            animation: 'data-aos="fade-left"',
            skills: 'Python | Django | Django Rest Framework | PostgreSQL',
            projectPath:"https://coderr.luft-alexander.de/",
            githubPath:"https://github.com/CybXII/coderr-backend"
        },
        {
            name: 'DaBubble [Frontend]',
            imgPath: 'assets/img/dabubble.png',
            animation: 'data-aos="fade-right"',
            skills: 'Angular | TypeScript | Firebase | SCSS  ',
            projectPath:"https://dabubble.luft-alexander.de",
            githubPath:"https://github.com/CybXII/DaBubble"
        },
    ];
    public skillsData = [
            {stack:[
                {
                    name: 'JavaScript',
                    imgPath: 'assets/img/js.svg'
                },
                {
                    name: 'TypeScript',
                    imgPath: 'assets/img/ts.svg'
                },
                {
                    name: 'Python',
                    imgPath: 'assets/img/python.svg'
                },
                {   
                    name: 'SASS/SCSS',
                    imgPath: 'assets/img/sass.svg'
                },
                {
                    name:'LUA',
                    imgPath: 'assets/img/lua.svg'
                },
                {
                    name: 'HTML',
                    imgPath: 'assets/img/html.svg'
                }
            ]},
            {stack:[
                {
                    name: 'Angular',
                    imgPath: 'assets/img/angular.svg'
                },
                {
                    name: 'Django',
                    imgPath: 'assets/img/django.svg'
                },
                {
                    name: 'DRF',
                    imgPath: 'assets/img/drf.svg'
                },
                {
                    name: 'Material design',
                    imgPath: 'assets/img/material.svg'
                },
                {
                    name: 'Bootstrap',
                    imgPath: 'assets/img/bootstrap.svg'
                }
            ]},
            {stack:[
                {
                    name: "Linux",
                    imgPath: 'assets/img/linux.svg'
                },
                {
                    name: 'GIT',
                    imgPath: 'assets/img/git.svg'
                },
                {
                    name: 'Github',
                    imgPath: 'assets/img/github.svg'
                },
                {
                    name: 'Gitlab',
                    imgPath: 'assets/img/gitlab.svg'
                },
                {
                    name: 'Postman',
                    imgPath: 'assets/img/postman.svg'
                }
                
            ]},
            {stack:[
                {
                    name: 'PostgreSQL',
                    imgPath: 'assets/img/postgresql.svg'
                },
                {
                    name: 'SQLite',
                    imgPath: 'assets/img/sqlite.svg'
                },
                {
                    name: 'Firebase',
                    imgPath: 'assets/img/firebase.svg'
                },
                {
                    name: 'Rest-Api',
                    imgPath: 'assets/img/restapis.svg'
                },
                {
                    name: 'Scrum',
                    imgPath: 'assets/img/scrum.svg'
                },
                {   
                    name: 'CSS',
                    imgPath: 'assets/img/css.svg'
                },
            ]},
        ];
}
