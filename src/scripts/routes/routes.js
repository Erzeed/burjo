import home from '../views/pages/home';
// import Upcoming from '../view/pages/upcoming';
import Detail from '../views/pages/detail';
// import Like from '../view/pages/like';

const routes = {
  '/': home, // default page
  '/home': home,
  //   '/upcoming': Upcoming,
  '/detail/:id': Detail,
//   '/like': Like,
};

export default routes;
