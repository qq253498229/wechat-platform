import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../shared/shared/shared.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private service: SharedService
  ) {
  }

  ngOnInit() {
    this.service.loadDone();
  }

}
