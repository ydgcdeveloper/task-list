import { HandleTaskService } from './service/handle-task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from './interface/task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'task-list';
  public showAddTask: boolean = false;
  public tasks: Task[] = [
    { text: '#Important Write to email@gmail.com and tell @natasha about http://staging.alldone.app' }
  ];

  constructor(
    private taskService: HandleTaskService
  ) {

  }

  ngOnInit() {

  }

  presentAddTask() {
    this.setShowAddTask(true);
  }

  setShowAddTask(value: boolean) {
    this.showAddTask = value;
  }

  addNewTask(task: Task) {
    console.log(task);
    this.tasks.push(task)
  }

}
