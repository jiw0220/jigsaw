/**
 * Created by 10177553 on 2017/3/29.
 */
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl:"ngFor.html"
})
export class RdkTabsWithNgForComponent implements OnInit {

    constructor() { }

    tabDatas : Array<string>

    ngOnInit() {
        this.tabDatas = new Array("Tab1","Tab2")
    }

}