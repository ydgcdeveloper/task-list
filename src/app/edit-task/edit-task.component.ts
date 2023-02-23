import { HandleTaskService } from './../service/handle-task.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Task } from '../interface/task.interface';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  public taskForm: FormGroup;
  @Output() taskEventShow = new EventEmitter<boolean>(false);
  @Output() taskEventData = new EventEmitter<Task>();
  @Input() task: Task;

  constructor(
    private formBuilder: FormBuilder,
    private taskService: HandleTaskService
  ) {
    
   
  }

  get text() {
    return this.taskForm.get('text');
  }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      text: [this.task?.text, [Validators.required, Validators.minLength(2)]],
    })
  }

  onSubmit() {

  }

  setEditTask() {
    this.taskEventShow.emit(false);
  }

  editTask(){

  }
}
