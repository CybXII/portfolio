import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root',
})
export class ProjectdataService {
    public projectdata = [
        {
            name: 'Join',
            imgPath: 'assets/img/join.png',
            animation: 'data-aos="fade-left"',
            skills: 'Angular | TypeScript | HTML | SCSS | Firebase | Material Design',
            projectPath:"https://luft-alexander.de/join/login.html",
            githubPath:"https://github.com/CybXII/JOIN"
        },
        {
            name: 'Sharkie',
            imgPath: 'assets/img/sharkie.png',
            animation: 'data-aos="fade-right"',
            skills: 'JavaScript | HTML | CSS',
            projectPath:"https://sharkie.luft-alexander.de",
            githubPath:"https://github.com/CybXII/Developer-Akademie/tree/master/1.Frontend-Module/Modul-12/Sharkie"
        },
        {
            name: 'Pokedex',
            imgPath: 'assets/img/pokedex.png',
            animation: 'data-aos="fade-left"',
            skills: 'JavaScript | HTML | CSS | Api',
            projectPath:"https://luft-alexander.de/pokedex/index.html",
            githubPath:"https://github.com/CybXII/Developer-Akademie/tree/master/1.Frontend-Module/Modul-9/Pokedex"
        },
    ];
    public skillsData = [
            {stack:[
                {
                    name: 'JavaScript',
                    imgPath: 'assets/img/js.svg'
                },
                {
                    name: 'GIT',
                    imgPath: 'assets/img/git.svg'
                },
                {
                    name: 'Scrum',
                    imgPath: 'assets/img/scrum.svg'
                },
                {
                    name: 'Material design',
                    imgPath: 'assets/img/material.svg'
                },
            ]},
            {stack:[
                {
                    name: 'Angular',
                    imgPath: 'assets/img/angular.svg'
                },
                {
                    name: 'Firebase',
                    imgPath: 'assets/img/firebase.svg'
                },
                {
                    name: 'Rest-Api',
                    imgPath: 'assets/img/restapis.svg'
                },
            ]},
            {stack:[
                {
                    name: 'TypeScript',
                    imgPath: 'assets/img/ts.svg'
                },
                {   
                    name: 'CSS',
                    imgPath: 'assets/img/css.svg'
                },
            ]},
            {stack:[
                {
                    name: 'HTML',
                    imgPath: 'assets/img/html.svg'
                }
            ]},
        ];
}
