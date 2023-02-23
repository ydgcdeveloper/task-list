import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../interface/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() taskEventShowEdit = new EventEmitter<boolean>(false);

  constructor() {
  }

  ngOnInit(): void {
  }

  presentEditTask(){
    this.taskEventShowEdit.emit(true);
  }

  kindOfWord(word: string): string {
    if (word.startsWith('#')) {
      return '#';
    } else if (word.startsWith('@')) {
      return '@';
    } else if (this.isEmail(word)) {
      return 'email';
    } else if (this.isValidUrl(word)) {
      return 'link';
    }
    return 'common';
  }

  convertedToArray(): Array<string> {
    return this.task.text.split(' ');
  }

  isEmail(mail: string): boolean {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)
  }

  isValidUrl(urlString: string) {
    var urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // validate fragment locator
    return !!urlPattern.test(urlString);
  }
}


