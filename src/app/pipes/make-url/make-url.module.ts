import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakeUrlPipe } from '../make-url.pipe';

@NgModule({
  declarations: [MakeUrlPipe],
  exports: [MakeUrlPipe],
  imports: [
    CommonModule
  ]
})
export class MakeUrlModule { }
