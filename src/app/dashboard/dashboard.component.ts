import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  buttonOpen = true;

  constructor() {}

  ngOnInit(): void {}

  taskArray: task[] = [
    { progress: 60, projectName: 'Sin(M)', taskTitle: 'Review Wireframe' },
    { progress: 33, projectName: 'DigiLearn', taskTitle: 'Achyut UI' },
    { progress: 40, projectName: 'DigiLearn', taskTitle: 'Aditya Backend' },
    { progress: 78, projectName: 'Exercise', taskTitle: 'UI response' },
  ];

  projectArray: project[] = [
    {
      projectIconUrl:
        'https://images.unsplash.com/photo-1519455953755-af066f52f1a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      projectTitle: 'Sin(M)',
      tasks: Math.floor(Math.random()*99),
      projectStartDate: '12 Dec 19',
      progress: Math.floor(Math.random()*99),
    },
    {
      projectIconUrl:
        'https://images.unsplash.com/photo-1519455953755-af066f52f1a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      projectTitle: 'Digilearn',
      tasks: Math.floor(Math.random()*99),
      projectStartDate: '12 Dec 19',
      progress: Math.floor(Math.random()*99),
    },
    {
      projectIconUrl:
        'https://images.unsplash.com/photo-1519455953755-af066f52f1a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      projectTitle: 'Exercise',
      tasks: Math.floor(Math.random()*99),
      projectStartDate: '12 Dec 19',
      progress: Math.floor(Math.random()*99),
    },
  ];

  toogleFilter(event: string) {
    if (event === 'open') this.buttonOpen = true;
    else this.buttonOpen = false;
  }
}

interface task {
  projectName: string;
  taskTitle: string;
  progress: number;
}

interface project {
  projectIconUrl: string;
  projectTitle: string;
  tasks: number;
  projectStartDate: string;
  progress: number;
}
