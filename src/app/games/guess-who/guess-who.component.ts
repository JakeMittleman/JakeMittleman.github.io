import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-guess-who',
  templateUrl: './guess-who.component.html',
  styleUrls: ['./guess-who.component.scss']
})
export class GuessWhoComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
  }

}
