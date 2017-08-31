import {FormComponent} from './../course/courseform.component';
import {CanDeactivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

export class LeavingGuard implements CanDeactivate<FormComponent>{
    canDeactivate(component:FormComponent,cr:ActivatedRouteSnapshot,
    currentState:RouterStateSnapshot, nextState?:RouterStateSnapshot):boolean | Observable<any>{
    if(component.courseForm.dirty){
        return confirm("Do you want to leave this Page???");
    }
    return  true;
}
}