import {Router, RouterConfiguration} from 'aurelia-router';
import {inject} from 'aurelia-framework';

export class Primary2 {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router){
    config.map([
      { route: '', redirect: 'secondary1' },
      { route: 'secondary1',  moduleId: 'secondary1', name:'secondary1', nav: true, title: "Secondary 1" },
      { route: 'secondary2',  moduleId: 'secondary2', name:'secondary2', nav: true, title: "Secondary 2" }
    ]);

    this.router = router;
  }
}
