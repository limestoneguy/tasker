import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  constructor() {}

  @Input() projectIconUrl: string;
  @Input() projectTitle: string;
  @Input() tasks: number;
  @Input() projectStartDate: string;
  @Input() progress: number;

  ngOnInit(): void {}
}
