import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageTitleService {
  private pageTitleSubject: BehaviorSubject<string> = new BehaviorSubject<
    string
  >('');
  pageTitle$: Observable<string> = this.pageTitleSubject.asObservable();

  constructor() {}

  setPageTitle(text: string) {
    return this.pageTitleSubject.next(text);
  }
}
