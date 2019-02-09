# Purpose

This project is based on the Article *MobX for Angular and Ionic Apps* (https://levelup.gitconnected.com/how-to-manage-state-in-ionic-2-apps-with-mobx-df659de6a8aa).

This project demonstrates that Angular has transparent reactivity when using default change detection.  
There is no need to use MobX to get transparent reactivity!

The advantage of using MobX is only that changes in the model/store would trigger change detatction of the  components event if they are set to `ChangeDetectionStrategy.OnPush`. 



# NgNoMobx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
