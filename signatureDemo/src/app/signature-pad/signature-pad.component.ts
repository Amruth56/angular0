import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-signature-pad',
  templateUrl: './signature-pad.component.html',
  styleUrls: ['./signature-pad.component.css']
})
export class SignaturePadComponent implements AfterViewInit {
  @ViewChild('canvas') canvasEl!: ElementRef;
  signaturePad!: SignaturePad;
  signatureImg: string = '';

  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
  }

  startDrawing(event: Event) {
    // Handle drawing start
  }

  clearPad() {
    this.signaturePad.clear();
  }

  savePad() {
    this.signatureImg = this.signaturePad.toDataURL();
  }
}
