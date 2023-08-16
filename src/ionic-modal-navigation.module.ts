import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetectInlineModalOpenDirective} from "./directives/detect-inline-modal-open.directive";


@NgModule({
    declarations: [
        DetectInlineModalOpenDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DetectInlineModalOpenDirective
    ]
})
export class IonicModalNavigationModule {
}
