import {Component, OnInit} from '@angular/core';
import {SharedService} from '../shared/shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  translate;

  constructor(
    public router: Router,
    public service: SharedService
  ) {
    this.translate = service.getTranslate();
  }

  ngOnInit() {
  }

}
