#!/usr/bin/env bash

MODULE_NAME="home"
COMPONENT_NAME="products-item"

ng generate module "$MODULE_NAME" --route "$MODULE_NAME" --module app.module
ng generate component "$MODULE_NAME/components/$COMPONENT_NAME"
ng generate service "$MODULE_NAME/components/$COMPONENT_NAME/$COMPONENT_NAME"

convertToPascal()
{
   echo "$1" | sed -r 's/(^|[-_ ]+)([0-9a-z])/\U\2/g'  # convert snack to pascal string
}

MODEL_NAME=$(convertToPascal "${COMPONENT_NAME}")

MODEL_NAME_INSTANCE=${MODEL_NAME,}


SERVICE_CLASS_NAME="${MODEL_NAME}Service"
SERVICE_INSTANCE=${SERVICE_CLASS_NAME,}

RESOLVER_NAME="$COMPONENT_NAME.resolver.ts"
RESOLVER_CLASS_NAME="${MODEL_NAME}Resolver"




RESOLVER_CLASS_CONTENT="
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { $SERVICE_CLASS_NAME } from './$COMPONENT_NAME.service';
import { handleError } from '../../../shared/helpers';

@Injectable()
export class $RESOLVER_CLASS_NAME implements Resolve<Any> {
  constructor(
    private $SERVICE_INSTANCE: $SERVICE_CLASS_NAME,
     private router: Router,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Promise<any> {

    return new Promise(async (resolvePromise, reject) => {
        const _id = route.params.id;
        await this.$SERVICE_INSTANCE.getData({ _id }).subscribe(
            res => {
              if (res.data.$MODEL_NAME_INSTANCE) {
                resolvePromise(res.data.$MODEL_NAME_INSTANCE);
              } else {
                this.router.navigateByUrl('**', {skipLocationChange: true});
              }
            },
            error => handleError(error),
        );
    });
  }
}
"
echo "$RESOLVER_CLASS_CONTENT" > "src/app/${MODULE_NAME}/components/${COMPONENT_NAME}/${RESOLVER_NAME}"
# $SHELL
