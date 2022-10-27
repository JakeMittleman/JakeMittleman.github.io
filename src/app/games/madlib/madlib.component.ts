import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-madlib',
  templateUrl: './madlib.component.html',
  styleUrls: ['./madlib.component.scss']
})
export class MadlibComponent implements OnInit {

  formGroup: FormGroup;
  madLibGenerated: boolean = false;

  noun1 = "";
  adjective1 = "";
  emotionalAdverb = "";
  catchPhrase = "";
  emotion1 = "";
  verb = "";
  adjective2 = "";
  verb2 = "";
  number = "";
  bodyPart1 = "";
  bodyPart2 = "";
  number2 = "";
  ingActivity = "";
  animal = "";
  adjective3 = "";
  adjective4 = "";
  adjective5 = "";
  bodyPart3 = "";
  adjective6 = "";

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      noun1: new FormControl('', Validators.required),
      adjective1: new FormControl('', Validators.required),
      emotionalAdverb: new FormControl('', Validators.required),
      catchPhrase: new FormControl('', Validators.required),
      emotion1: new FormControl('', Validators.required),
      verb: new FormControl('', Validators.required),
      adjective2: new FormControl('', Validators.required),
      verb2: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      bodyPart1: new FormControl('', Validators.required),
      bodyPart2: new FormControl('', Validators.required),
      number2: new FormControl('', Validators.required),
      ingActivity: new FormControl('', Validators.required),
      animal: new FormControl('', Validators.required),
      adjective3: new FormControl('', Validators.required),
      adjective4: new FormControl('', Validators.required),
      adjective5: new FormControl('', Validators.required),
      bodyPart3: new FormControl('', Validators.required),
      adjective6: new FormControl('', Validators.required)
    });
   }

  ngOnInit(): void {
  }

  generateMadLib() {
    if (this.formGroup.valid) {
      this.noun1 = this.formGroup.get("noun1")?.value;
      this.adjective1 = this.formGroup.get("adjective1")?.value;
      this.emotionalAdverb = this.formGroup.get("emotionalAdverb")?.value;
      this.catchPhrase = this.formGroup.get("catchPhrase")?.value;
      this.emotion1 = this.formGroup.get("emotion1")?.value;
      this.verb = this.formGroup.get("verb")?.value;
      this.adjective2 = this.formGroup.get("adjective2")?.value;
      this.verb2 = this.formGroup.get("verb2")?.value;
      this.number = this.formGroup.get("number")?.value;
      this.bodyPart1 = this.formGroup.get("bodyPart1")?.value;
      this.bodyPart2 = this.formGroup.get("bodyPart2")?.value;
      this.number2 = this.formGroup.get("number2")?.value;
      this.ingActivity = this.formGroup.get("ingActivity")?.value;
      this.animal = this.formGroup.get("animal")?.value;
      this.adjective3 = this.formGroup.get("adjective3")?.value;
      this.adjective4 = this.formGroup.get("adjective4")?.value;
      this.adjective5 = this.formGroup.get("adjective5")?.value;
      this.bodyPart3 = this.formGroup.get("bodyPart3")?.value;
      this.adjective6 = this.formGroup.get("adjective6")?.value;

      this.madLibGenerated = true;
    } else {
      alert("Please fill out all fields")
    }
  }

}

// <!-- When they met, it was like he had been hit by a ___noun____.
//     Everything about her was ____adjective_____. He ____emotional adverb_____ walked over to her and
// said ___catch phrase (short [or not])_____. She was so ___emotion____ that she ____verb(ed)___.
// On their first date he made a ___adjective___ joke and she couldn't help but ___verb____.
// It wasn't long before they were together for ____number____ years! He just loves her ____body part____,
// and she can't get enough of his ____body part____.
// He secretly wants to have ____number____ kids and she wants to start ____activity ending in ing____ as a couple.
// Also, they agreed to get a pet ___animal___! Isn't love ___adjective___? As time passes, they know they
// may get ____adjective____ and ___adjective___, but desipite that, they will always love each-other's
// ____body part (multiple)____. That, my friends, makes for a ___adjective___ MARRIAGE! -->
