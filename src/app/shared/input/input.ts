import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

export type InputType =
  | 'text'
  | 'number'
  | 'select'
  | 'textarea'
  | 'checkbox'
  | 'radio';

export type InputValue = string | number | boolean | null;

export interface InputOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex flex-col gap-2">
      @switch (type()) {
        @case ('checkbox') {
          <label
            [for]="id()"
            class="inline-flex min-h-11 items-center gap-3 text-sm font-medium text-slate-700"
          >
            <input
              [id]="id()"
              [name]="name() || id()"
              type="checkbox"
              [checked]="value() === true"
              [disabled]="disabled()"
              (change)="onCheckboxChange($event)"
              class="size-4 accent-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            />
            {{ label() }}
          </label>
        }
        @case ('radio') {
          <fieldset class="flex flex-col gap-2">
            <legend class="text-sm font-medium text-slate-700">
              {{ label() }}
            </legend>
            @for (option of options(); track option.value) {
              <label
                class="inline-flex min-h-11 items-center gap-3 text-sm text-slate-700"
              >
                <input
                  [id]="id() + '-' + option.value"
                  [name]="name() || id()"
                  type="radio"
                  [value]="option.value"
                  [checked]="value() === option.value"
                  [disabled]="disabled()"
                  (change)="onRadioChange($event)"
                  class="size-4 accent-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                />
                {{ option.label }}
              </label>
            }
          </fieldset>
        }
        @default {
          <label [for]="id()" class="text-sm font-medium text-slate-700">
            {{ label() }}
          </label>
          @switch (type()) {
            @case ('text') {
              <input
                [id]="id()"
                [name]="name() || id()"
                type="text"
                [placeholder]="placeholder()"
                [value]="value() ?? ''"
                [disabled]="disabled()"
                (input)="onTextChange($event)"
                class="min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-2 focus:outline-offset-1 focus:outline-indigo-600 disabled:cursor-not-allowed disabled:bg-slate-100"
              />
            }
            @case ('number') {
              <input
                [id]="id()"
                [name]="name() || id()"
                type="number"
                step="any"
                [placeholder]="placeholder()"
                [value]="value() ?? ''"
                [disabled]="disabled()"
                (input)="onNumberChange($event)"
                class="min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-2 focus:outline-offset-1 focus:outline-indigo-600 disabled:cursor-not-allowed disabled:bg-slate-100"
              />
            }
            @case ('select') {
              <select
                [id]="id()"
                [name]="name() || id()"
                [value]="value() ?? ''"
                [disabled]="disabled()"
                (change)="onSelectChange($event)"
                class="min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 focus:border-indigo-600 focus:outline-2 focus:outline-offset-1 focus:outline-indigo-600 disabled:cursor-not-allowed disabled:bg-slate-100"
              >
                @if (placeholder()) {
                  <option value="" disabled>{{ placeholder() }}</option>
                }
                @for (option of options(); track option.value) {
                  <option [value]="option.value">{{ option.label }}</option>
                }
              </select>
            }
            @case ('textarea') {
              <textarea
                [id]="id()"
                [name]="name() || id()"
                [placeholder]="placeholder()"
                [value]="value() ?? ''"
                [disabled]="disabled()"
                (input)="onTextAreaChange($event)"
                rows="4"
                class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-2 focus:outline-offset-1 focus:outline-indigo-600 disabled:cursor-not-allowed disabled:bg-slate-100"
              ></textarea>
            }
          }
        }
      }
    </div>
  `,
})
export class Input {
  readonly type = input.required<InputType>();
  readonly id = input.required<string>();
  readonly label = input.required<string>();
  readonly name = input('');
  readonly placeholder = input('');
  readonly options = input<readonly InputOption[]>([]);
  readonly value = input<InputValue>('');
  readonly disabled = input(false);

  readonly valueChange = output<InputValue>();

  protected onTextChange(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      this.valueChange.emit(event.target.value);
    }
  }

  protected onNumberChange(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      this.valueChange.emit(
        event.target.value === '' ? null : event.target.valueAsNumber,
      );
    }
  }

  protected onSelectChange(event: Event): void {
    if (event.target instanceof HTMLSelectElement) {
      this.valueChange.emit(event.target.value);
    }
  }

  protected onTextAreaChange(event: Event): void {
    if (event.target instanceof HTMLTextAreaElement) {
      this.valueChange.emit(event.target.value);
    }
  }

  protected onCheckboxChange(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      this.valueChange.emit(event.target.checked);
    }
  }

  protected onRadioChange(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      this.valueChange.emit(event.target.value);
    }
  }
}
