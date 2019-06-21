import React, {Component} from "react";
import AppHeader from './AppHeader';
import Landing from '../containers/Landing';
import Loader from './Loader';

export default class App extends Component {

    state = {
        showLoader: true,
        time: 5
    };

    componentDidMount(){
        let countDown = 5;
        let intervalId = setInterval(() => {
            countDown --;
            this.setState({time: countDown});

            if(countDown === 0){
                clearInterval(intervalId);
                this.setState({showLoader: false})
            }
        }, 1000)
    }

    render() {
        const { time, showLoader } = this.state;
        return (
            <div className="App">
                {showLoader ? (
                    <Loader time={time}/>
                ) : (
                    <>
                        <AppHeader/>
                        <div className="app-content-container">
                            <Landing/>
                        </div>
                    </>
                )}
            </div>
        );
    }
}
