import { Component, Input } from '@angular/core';
import { Task, StatusType } from '../constants';

@Component({
  selector: 'task-list',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {

  @Input() taskList: Task[];
  @Input() statusType: StatusType;

  constructor() {}

  ngOnInit() {
  }
}
