import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
// RxJS решаемая задача заключается в возможности обрабатывать асинхронные вызовы с помощью множества событий
import { Observable } from 'rxjs/observable';
@Injectable()
export class GithubAuthInterceptor implements HttpInterceptor {
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'token 71da5e8950af92aa82a294d9899d22a72e1d5f31')
    });
    return next.handle(authReq);
  }
}
