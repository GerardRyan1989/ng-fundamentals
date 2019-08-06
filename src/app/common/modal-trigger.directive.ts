import {Directive, OnInit, Inject, ElementRef, forwardRef, Input} from '@angular/core';
import {JQ_TOKEN} from './jQuery.service';


@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[modal-trigger]'
})


export class ModalTriggerDirective implements  OnInit {
  private el: HTMLElement;
  @Input('modal-trigger') modalId: string;
  constructor(@Inject(forwardRef(() => ElementRef)) ref: ElementRef, @Inject(forwardRef(() => JQ_TOKEN)) private $: any ) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', e =>
    this.$(`#${this.modalId}`).modal({}));
  }

}
