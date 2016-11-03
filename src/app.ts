import {Router, RouterConfiguration} from 'aurelia-router';
import {inject} from 'aurelia-framework';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Aurelia Nested Routes Issue';
    config.map([
      { route: '', redirect: 'primary1' },
      { route: 'primary1',  moduleId: 'primary1', name:'primary1', nav: true, title: "Primary 1" },
      { route: 'primary2',  moduleId: 'primary2', name:'primary2', nav: true, title: "Primary 2" }
    ]);

    this.router = router;
  }
}
