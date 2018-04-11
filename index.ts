import { NgModule } from "@angular/core";

import { Frame } from "tns-core-modules/ui/frame";

export function getDefaultFrame(): Frame {
    return new Frame();
}

export const defaultFrameProvider = { provide: Frame, useFactory: getDefaultFrame };

@NgModule({
    providers: [ defaultFrameProvider ],
})
export class NativeScriptCommonModule {
}

