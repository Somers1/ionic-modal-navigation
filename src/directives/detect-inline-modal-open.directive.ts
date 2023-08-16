import {Directive, HostListener} from '@angular/core';
import {IonicModalNavigationController} from "../services/ionic-modal-navigation.service";

@Directive({
  selector: '[appDetectInlineModalOpen]'
})
export class DetectInlineModalOpenDirective {

  constructor(private modalController: IonicModalNavigationController) {
  }
  @HostListener('ionModalDidPresent')
  async handleModalOpen() {
    await this.modalController.pushState()
  }

}
