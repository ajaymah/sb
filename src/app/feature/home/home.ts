import { Component, signal } from '@angular/core';
import { Accordion, AccordionItem } from '../../shared/accordion/accordion';
import { Button } from '../../shared/button/button';
import { TabItem, Tabs } from '../../shared/tabs/tabs';
import { Toast, ToastVariant } from '../../shared/toast/toast';
import { Tooltip } from '../../shared/tooltip/tooltip';

@Component({
  selector: 'app-home',
  imports: [Accordion, Button, Tabs, Toast, Tooltip],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly activeToast = signal<ToastVariant | null>(null);
  protected readonly tabs: readonly TabItem[] = [
    { label: 'Tabs-1', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    { label: 'Tabs-2', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    { label: 'Tabs-3', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
  ];

  protected readonly accordionItems: readonly AccordionItem[] = [
    {
      title: 'WBG Heading - 1',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letrasets Body Type sheets.',
    },
    {
      title: 'WBG Heading - 2',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letrasets Body Type sheets.',
    },
    {
      title: 'WBG Heading - 3',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letrasets Body Type sheets.',
    },
  ];

  protected showToast(variant: ToastVariant): void {
    this.activeToast.set(variant);
  }

  protected dismissToast(): void {
    this.activeToast.set(null);
  }
}
