import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'task-form',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {

  //obj;
  myForm: FormGroup;

  @Output() onSave: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    //this.obj = {};
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      title: new FormControl('', [
        Validators.minLength(3),
        Validators.required
      ]),
      description: new FormControl()
    });
  }

  save() {
/*     console.error(this.obj);
    this.onSave.emit(this.obj); */
    let obj = {
      title: this.myForm.get('title').value,
      description: this.myForm.get('description').value
    };
    this.onSave.emit(obj);
    this.myForm.reset();
  }
}
