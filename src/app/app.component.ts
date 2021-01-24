import { Component, VERSION } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  _form: FormGroup;

  constructor(private fb: FormBuilder) {
    this._createForm();
  }

  _addTransaction() {
    this._conditionsFormArray.push(
      this.fb.control({
        variable: 'test variable',
        frogId: 'testFrog'
      })
    );
  }

  _delete(index: number) {
    this._conditionsFormArray.removeAt(index);
  }

  get _conditionsFormArray(): FormArray {
    return this._form.get("page").get("conditions") as FormArray;
  }

  private _createForm() {
    this._form = this.fb.group({
      page: this.fb.group({
        conditions: this.fb.array([])
      })
    });
  }
}
