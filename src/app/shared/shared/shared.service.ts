import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  LANG_KEY = 'lang';

  private loadFlag = new Subject();
  loadObservable = this.loadFlag.asObservable();

  /**
   * 加载完成
   */
  loadDone() {
    this.loadFlag.next(false);
  }

  loading() {
    this.loadFlag.next(true);
  }

  constructor(
    public translate: TranslateService
  ) {
    const lang = localStorage.getItem(this.LANG_KEY);
    translate.addLangs(['zh', 'en']);

    if (lang) {
      translate.setDefaultLang(lang);
      this.translate.use(lang);
    } else {
      translate.setDefaultLang('zh');
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
    }
  }

  /**
   * 获取当前语言
   */
  getTranslate() {
    return this.translate;
  }

  /**
   * 修改当前语言
   */
  changeLang(obj) {
    this.translate.use(obj);
    localStorage.setItem(this.LANG_KEY, obj);
  }
}
