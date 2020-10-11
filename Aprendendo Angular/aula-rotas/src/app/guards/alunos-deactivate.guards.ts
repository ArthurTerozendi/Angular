import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';
import { IFormCanDeactivateGuard } from './iform-candeactivate.guard'

export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivateGuard> {
        canDeactivate(
            component: IFormCanDeactivateGuard,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            console.log("Guarda Desativada");
            return component.podeDesativar();
    }
}