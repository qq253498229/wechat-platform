import {Component, OnInit} from '@angular/core';
import {SharedService} from '../shared/shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  translate;

  constructor(
    public service: SharedService
  ) {
    this.translate = this.service.getTranslate();
  }

  ngOnInit() {
  }

  changeLang(obj) {
    this.service.changeLang(obj);
  }

}
