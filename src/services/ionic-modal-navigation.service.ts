import {Injectable} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {LocationStrategy} from "@angular/common";

@Injectable({
    providedIn: 'root'
})
export class IonicModalNavigationController extends ModalController {
    private ignoreNextPopstate = false;

    constructor(private location: LocationStrategy) {
        super();
        this.location.onPopState(() => {
            if (this.ignoreNextPopstate) this.ignoreNextPopstate = false;
            else this.closeModal()
        })
    }

    override async create(opts: any): Promise<HTMLIonModalElement> {
        const modal = await super.create(opts);
        await this.pushState(modal)
        return modal
    }

    async pushState(modal?: HTMLIonModalElement): Promise<void> {
        const newModal = modal ? modal : await this.getTop();
        newModal?.onWillDismiss().then(() => {
            if (history.state === newModal?.id) {
                this.ignoreNextPopstate = true;
                history.back();
            }
        })
        await history.pushState(newModal?.id, "", location.toString());
    }


    private closeModal() {
        this.getTop().then(modal => {
            if (modal) modal.dismiss().catch()
        })
    }

}
