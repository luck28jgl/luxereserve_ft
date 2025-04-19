import LoginPage from '../pages/Login.vue';
import resev from '../views/reservaciones/Index.vue';
// import Requisiciones from './Requisiciones.js';


const routes = [
    {
        path: '/',
        name: 'LoginPath',
        component: LoginPage,
    },
    {
        path: '/Reservacion',
        name: 'ReservacionPath',
        component: resev
    },
];

export default routes