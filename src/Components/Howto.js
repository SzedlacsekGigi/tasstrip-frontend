import React, {Component} from "react";
import BackButton from "./BackButton";

class Howto extends Component {

    render() {
        return (
            <div className="howto">
                <div className="howto-instructions">
                    <h1>How to use this program</h1>
                    <h3>Step 1: Click on the Arrivals button to print the current arrivals, or click on the Departures
                        button for printable departures</h3>
                    <h3>Step 2: In the Arrivals page, if you want to you can click on the designated place to type in
                        the Arrival ETA.</h3>
                    <h3>Step 3: Right click anywhere on the page, then select "Print..."</h3>
                    <h5>Tip: In "More settings" you can choose the size of your paper, this program is designed for
                        A/4</h5>
                    <h3>Click save.</h3>
                    <h3>Now you have your printable document!</h3>
                </div>
                <BackButton/>
            </div>
        );
    }

}

export default Howto;