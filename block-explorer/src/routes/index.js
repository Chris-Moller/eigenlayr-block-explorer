import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/index"
import LoadingPg from "../views/loading/LoadingPg";

function Loadable(Component) {
  const result = (props) => (
    <Suspense fallback={<LoadingPg/>}>
      <Component {...props} />
    </Suspense>
  );
  return result;
}

export default function Router() {
  return useRoutes([
    {
      element: (<MainLayout/>),
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/search",
          element: <Result />,
        },
      ]
    }
  ]);
}


const Home = Loadable(
  lazy(() => import("../views/home/Home"))
);

const Result = Loadable(
  lazy(() => import("../views/result/Result"))
);


