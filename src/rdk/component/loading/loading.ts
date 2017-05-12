import {Component, ElementRef, OnDestroy, OnInit, Renderer2} from "@angular/core";
import {IPopupable, PopupDisposer, PopupOptions, PopupService} from "rdk/service/popup.service";

export class RdkLoadingBase implements IPopupable, OnInit, OnDestroy {
    public disposer: PopupDisposer;
    public initData: any;
    public options: PopupOptions;
    protected state: string = 'void';
    protected removeWindowListener: () => void;

    constructor(private _renderer: Renderer2, private _elementRef: ElementRef) {
    }

    ngOnInit() {
        setTimeout(() => {
            if (this.options) {
                PopupService.setPopup(this.options, this._elementRef.nativeElement, this._renderer);
            }
            this.state = 'in';
        }, 0);

        //window.history.back的监听
        this.removeWindowListener = this._renderer.listen('window', 'popstate', () => {
            this.disposer();
        })
    }

    ngOnDestroy() {
        this.removeWindowListener();
    }
}

@Component({
    templateUrl: 'loading.html',
    styleUrls: ['loading-ball.scss']
})
export class RdkLoading extends RdkLoadingBase {
    constructor(renderer: Renderer2, elementRef: ElementRef) {
        super(renderer, elementRef);
    }
}


@Component({
    templateUrl: 'loading.html',
    styleUrls: ['loading-bar.scss']
})
export class RdkBarLoading extends RdkLoadingBase {
    constructor(renderer: Renderer2, elementRef: ElementRef) {
        super(renderer, elementRef);
    }
}