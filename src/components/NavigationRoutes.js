import { Routes, Route } from "react-router-dom";
import Conversation from "./main/Conversation";
// import Template from "./main/Template";
import Base from "./main/Base";
import Formulaire from "./forms/Formulaire";

export default function NavigationRoutes() {

    return (
        <>
            <Routes>

                {/* <Route path='/' element={<App />} /> */}
                <Route path='/' element={<Base />} />
                <Route path='/form' element={<Formulaire />} />
                <Route path='/etape0' element={<Conversation index={0} />} />
                <Route path='/etape1' element={<Conversation index={1} />} />
                <Route path='/etape2' element={<Conversation index={2} />} />
                <Route path='/etape3' element={<Conversation index={3} />} />
                <Route path='/etape4' element={<Conversation index={4} />} />
                <Route path='/etape5' element={<Conversation index={5} />} />


            </Routes>
        </>
    )

}