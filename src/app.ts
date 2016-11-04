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
    config.map([
      { route: 'primary2', redirect: 'primary2/secondary1' },
      { route: 'primary2/secondary1',  moduleId: 'secondary1', name:'secondary1', nav: true, title: "Secondary 1" },
      { route: 'primary2/secondary2',  moduleId: 'secondary2', name:'secondary2', nav: true, title: "Secondary 2" }
    ]);

    this.router = router;
  }
}
