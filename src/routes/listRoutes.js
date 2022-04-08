import Home from "./Home";
import Pegawai from "./Pegawai";

export const routeReguler = [
    {
        path:"/dashboard",
        component: <Home/>,
        index: true
    },
    {
        path:"/user",
        component: <Pegawai/>,
    }
]