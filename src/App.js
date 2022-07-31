import React from "react";
import {Route,Routes} from "react-router-dom";
import Home from "./Component/Home";
import Table from "./Component/Table";
import Test from "./Component/Test";
import Headers from "./Component/Headre/Headers";
import "./App.css"
import Footer from "./Component/Footer";


class App extends React.Component{

    render() {

        return (
            <>
                <div className="App">
                    <Headers/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/table" element={<Table/>}/>
                        <Route path="/test" element={<Test/>}/>
                    </Routes>
                </div>
                <Footer/>
            </>
        );
    }
}

export default App;
