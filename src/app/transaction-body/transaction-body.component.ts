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

export interface TransactionBodyComponentData {
  body1: string;
  body2: string;
}

@Component({
  selector: 'app-transaction-body',
  templateUrl: './transaction-body.component.html',
  styleUrls: ['./transaction-body.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TransactionBodyComponent),
      multi: true
    }
  ]
})
export class TransactionBodyComponent implements ControlValueAccessor, OnDestroy, OnInit {
  _bodyform: FormGroup; 

  private _onChange: (
    value: TransactionBodyComponentData | null | undefined
  ) => void;

  private _destroy$: Subject<void> = new Subject<void>();

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    console.log('init body component');
    this._createFormGroup();

    this._setupObservables();
  }

  writeValue(value: any): void {
    console.log('write body component');
    if (!value) {
      return;
    }
    this._bodyform.patchValue(value);
  }
  registerOnChange(
    fn: (v: TransactionBodyComponentData | null | undefined) => void
  ): void {
    console.log('register on change body component');
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
   //
  }
  setDisabledState?(isDisabled: boolean): void {
    //
  }
  ngOnDestroy(): void {
    console.log('destroy body component');
    if (this._destroy$ && !this._destroy$.closed) {
      this._destroy$.next();
      this._destroy$.complete();
    }
  }

  private _createFormGroup() {
    console.log('create form group body component');
    this._bodyform = this._fb.group({
      body1: [],
      body2: []
    });
    console.log('form group in body form component');
    console.log(this._bodyform);
  }

  private _setupObservables() {
    console.log('set up observables body component');
    this._bodyform.valueChanges.pipe(takeUntil(this._destroy$)).subscribe(value => {
      if (this._onChange) {
        this._onChange(value);
      }
    });
  }

}
