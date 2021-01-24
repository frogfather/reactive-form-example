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
        head: 
          {
            head1: 'Head 1 value',
            head2: 'Head 2 value'
          },
        body: 
          {
            body1: 'Body 1 value',
            body2: 'Body 2 value'
          }
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
    console.log('create form group app component');
    this._form = this.fb.group({
      page: this.fb.group({
        transactions: this.fb.array([])
      })
    });
  }
}
