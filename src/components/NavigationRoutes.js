import { Routes, Route } from "react-router-dom";
import Choose from "./main/Choose";
import Template from "./main/Template";

export default function NavigationRoutes() {

    return (
        <>
            <Routes>

                {/* <Route path='/' element={<App />} /> */}
                <Route path='/' element={<Template />} />
                <Route path='/etape0' element={<Choose index={0} />} />
                <Route path='/etape1' element={<Choose index={1} />} />
                <Route path='/etape2' element={<Choose index={2} />} />
                <Route path='/etape3' element={<Choose index={3} />} />
                <Route path='/etape4' element={<Choose index={4} />} />
                <Route path='/etape5' element={<Choose index={5} />} />


            </Routes>
        </>
    )

}