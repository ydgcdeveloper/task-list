import { HandleTaskService } from './../service/handle-task.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Task } from '../interface/task.interface';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  public taskForm: FormGroup;
  @Output() taskEventShow = new EventEmitter<boolean>(false);
  @Output() taskEventData = new EventEmitter<Task>();

  constructor(
    private formBuilder: FormBuilder,
    private taskService: HandleTaskService
  ) {
    this.taskForm = this.formBuilder.group({
      text: ['', [Validators.required, Validators.minLength(2)]],
    })
  }

  get text() {
    return this.taskForm.get('text');
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  setAddNewTask() {
    this.taskEventShow.emit(false);
  }

  addTask() {
    this.taskEventData.emit({ text: this.text?.value });
    this.text?.setValue('');
  }
}
