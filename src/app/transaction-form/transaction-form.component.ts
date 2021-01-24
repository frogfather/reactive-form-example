import {
  Component,
  OnDestroy,
  Input,
  Output,
  forwardRef,
  EventEmitter,
  OnInit
} from "@angular/core";
import {
  ControlValueAccessor,
  FormGroup,
  FormBuilder,
  NG_VALUE_ACCESSOR
} from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { TransactionBodyComponent, TransactionBodyComponentData } from "../transaction-body/transaction-body.component";
import { TransactionHeadComponentData } from "../transaction-head/transaction-head.component";

export interface TransactionFormComponentData {
  test: string;
  head: TransactionHeadComponentData;
  body: TransactionBodyComponentData;
}

@Component({
  selector: "app-transaction-form",
  templateUrl: "./transaction-form.component.html",
  styleUrls: ["./transaction-form.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TransactionFormComponent),
      multi: true
    }
  ]
})
export class TransactionFormComponent
  implements ControlValueAccessor, OnDestroy, OnInit {
  @Input()
  formLabel: string | number = "Transaction";

  @Output()
  remove: EventEmitter<void> = new EventEmitter<void>();

  _form: FormGroup;

  private _onChange: (
    value: TransactionFormComponentData | null | undefined
  ) => void;

  private _destroy$: Subject<void> = new Subject<void>();

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    console.log('on init trans form');
    this._createFormGroup();

    this._setupObservables();
  }

  ngOnDestroy() {
    if (this._destroy$ && !this._destroy$.closed) {
      this._destroy$.next();
      this._destroy$.complete();
    }
  }

  writeValue(value: TransactionFormComponentData): void {
    console.log('write trans form');
    if (!value) {
      return;
    }
    this._form.patchValue(value);
  }
  registerOnChange(
    fn: (v: TransactionFormComponentData | null | undefined) => void
  ): void {
    console.log('register on change trans form');
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    // TODO: implement this method
    // throw new Error("registerOnTouched not implemented");
  }

  setDisabledState(isDisabled: boolean): void {
    // TODO: implement this method
    // throw new Error("setDisabledState not implemented");
  }

  private _createFormGroup() {
    console.log('create form group trans component');
    this._form = this._fb.group({
      test: [],
      head: [],
      body: []
    });
    console.log('form group in trans form component');
    console.log(this._form);
  }

  private _setupObservables() {
    console.log('setup observables trans component');
    this._form.valueChanges.pipe(takeUntil(this._destroy$)).subscribe(value => {
      if (this._onChange) {
        this._onChange(value);
      }
    });
  }
}
