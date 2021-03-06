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

export interface TransactionHeadComponentData {
  head1: string;
  head2: string;
}

@Component({
  selector: 'app-transaction-head',
  templateUrl: './transaction-head.component.html',
  styleUrls: ['./transaction-head.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TransactionHeadComponent),
      multi: true
    }
  ]
})
export class TransactionHeadComponent implements ControlValueAccessor, OnDestroy, OnInit  {
  _headform: FormGroup;

  private _onChange: (
    value: TransactionHeadComponentData | null | undefined
  ) => void;

  private _destroy$: Subject<void> = new Subject<void>();

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this._createFormGroup();

    this._setupObservables();
  }

  writeValue(value: any): void {
    if (!value) {
      return;
    }
    this._headform.patchValue(value);
  }
  registerOnChange(
    fn: (v: TransactionHeadComponentData | null | undefined) => void
  ): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    //
  }
  setDisabledState?(isDisabled: boolean): void {
    //
  }
  ngOnDestroy(): void {
    if (this._destroy$ && !this._destroy$.closed) {
      this._destroy$.next();
      this._destroy$.complete();
    }
  }

  private _createFormGroup() {
    this._headform = this._fb.group({
      head1: [],
      head2: []
    });
  }

  private _setupObservables() {
    this._headform.valueChanges.pipe(takeUntil(this._destroy$)).subscribe(value => {
      if (this._onChange) {
        this._onChange(value);
      }
    });
  }

}
