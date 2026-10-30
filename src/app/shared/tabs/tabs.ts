import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

export interface TabItem {
  label: string;
  content: string;
}

@Component({
  selector: 'app-tabs',
  template: `
    <div class="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div class="flex gap-1 border-b border-slate-200 px-3" role="tablist" aria-label="Content tabs">
        @for (tab of items(); track tab.label; let index = $index) {
          <button
            type="button"
            role="tab"
            [id]="id() + '-tab-' + index"
            [attr.aria-selected]="selectedIndex() === index"
            [attr.aria-controls]="id() + '-panel-' + index"
            [attr.tabindex]="selectedIndex() === index ? 0 : -1"
            (click)="select(index)"
            (keydown)="onTabKeydown($event, index)"
            class="min-h-12 cursor-pointer border-b-2 px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            [class]="selectedIndex() === index
              ? 'border-indigo-600 text-indigo-700'
              : 'border-transparent text-slate-600 hover:text-slate-900'"
          >
            {{ tab.label }}
          </button>
        }
      </div>
      @for (tab of items(); track tab.label; let index = $index) {
        @if (selectedIndex() === index) {
          <div
            role="tabpanel"
            [id]="id() + '-panel-' + index"
            [attr.aria-labelledby]="id() + '-tab-' + index"
            class="animate-tab-enter p-5 leading-6 text-slate-600 motion-reduce:animate-none"
            tabindex="0"
          >
            {{ tab.content }}
          </div>
        }
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tabs {
  readonly id = input.required<string>();
  readonly items = input.required<readonly TabItem[]>();
  protected readonly selectedIndex = signal(0);

  protected select(index: number): void {
    this.selectedIndex.set(index);
  }

  protected onTabKeydown(event: KeyboardEvent, index: number): void {
    const tabs = this.items();
    if (tabs.length === 0) return;

    let nextIndex = index;
    switch (event.key) {
      case 'ArrowRight':
        nextIndex = (index + 1) % tabs.length;
        break;
      case 'ArrowLeft':
        nextIndex = (index - 1 + tabs.length) % tabs.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    this.select(nextIndex);
    (event.currentTarget as HTMLElement)
      .parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
      .item(nextIndex)
      ?.focus();
  }
}
