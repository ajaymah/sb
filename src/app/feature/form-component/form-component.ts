import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Input, InputValue } from '../../shared/input/input';

@Component({
  selector: 'app-form-component',
  imports: [Input],
  templateUrl: './form-component.html',
  styleUrl: './form-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  protected readonly name = signal('');
  protected readonly quantity = signal<number | null>(null);
  protected readonly category = signal('');
  protected readonly description = signal('');
  protected readonly subscribed = signal(false);
  protected readonly contactMethod = signal('');

  protected readonly categories = [
    { label: 'Design', value: 'design' },
    { label: 'Development', value: 'development' },
    { label: 'Other', value: 'other' },
  ];

  protected readonly contactMethods = [
    { label: 'Email', value: 'email' },
    { label: 'Phone', value: 'phone' },
  ];

  protected setName(value: InputValue): void {
    if (typeof value === 'string') {
      this.name.set(value);
    }
  }

  protected setQuantity(value: InputValue): void {
    if (typeof value === 'number' || value === null) {
      this.quantity.set(value);
    }
  }

  protected setCategory(value: InputValue): void {
    if (typeof value === 'string') {
      this.category.set(value);
    }
  }

  protected setDescription(value: InputValue): void {
    if (typeof value === 'string') {
      this.description.set(value);
    }
  }

  protected setSubscribed(value: InputValue): void {
    if (typeof value === 'boolean') {
      this.subscribed.set(value);
    }
  }

  protected setContactMethod(value: InputValue): void {
    if (typeof value === 'string') {
      this.contactMethod.set(value);
    }
  }
}
