import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Shop from "./Shop";
import NavigationBar from "./NavigationBar";

const RouteSwitch = () => {
    return (
        <>
            <NavigationBar />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/shop' element={<Shop />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default RouteSwitch;
