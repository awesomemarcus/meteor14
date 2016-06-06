import actions from './actions';
import routes from './routes';
import stubs from './method_stubs';


export default {
  routes,
  actions,
  load(context){
    stubs(context);
  },
};
