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
    this._transactionsFormArray.push(
      this.fb.control({
        conditions: []
      })
    );
  }

  _delete(index: number) {
    this._transactionsFormArray.removeAt(index);
  }

  get _transactionsFormArray(): FormArray {
    return this._form.get("page").get("transactions") as FormArray;
  }

  private _createForm() {
    this._form = this.fb.group({
      page: this.fb.group({
        transactions: this.fb.array([])
      })
    });
  }
}
