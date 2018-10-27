import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SharedService} from '../shared/shared.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  /**
   * 页面加载标志
   */
  loadFlag = true;

  constructor(private service: SharedService,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.service.loadObservable.subscribe(res => {
      this.loadFlag = <boolean>res;

      if (!this.cd['destroyed']) {
        this.cd.detectChanges();
      }
    });
  }

}
