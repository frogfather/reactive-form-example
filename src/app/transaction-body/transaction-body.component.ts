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
    this._createFormGroup();

    this._setupObservables();
  }

  writeValue(obj: any): void {
    throw new Error("Method not implemented.");
  }
  registerOnChange(fn: any): void {
    throw new Error("Method not implemented.");
  }
  registerOnTouched(fn: any): void {
    throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  private _createFormGroup() {
    this._bodyform = this._fb.group({
      variable: null,
      frogId: 'test'
    });
  }

  private _setupObservables() {
    this._bodyform.valueChanges.pipe(takeUntil(this._destroy$)).subscribe(value => {
      if (this._onChange) {
        this._onChange(value);
      }
    });
  }

}
