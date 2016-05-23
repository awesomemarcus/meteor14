import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import productsModule from './modules/products';
import categoriesModule from './modules/categories';
import usersModule from './modules/users';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(productsModule);
app.loadModule(categoriesModule);
app.loadModule(usersModule);
app.init();
