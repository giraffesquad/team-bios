import React, {Component} from "react";
import { Navbar} from "react-materialize";
import { Link } from "react-router-dom";
import { Slide } from 'react-reveal';

export default class AppHeader extends Component {
    render() {
        const brand = (
            <Link className="app-header-container-brand" to="/">
              I'm A Giraffe
            </Link>
        );

        return (
            <Slide top>
                <div className="app-header-container">
                    <Navbar className="app-header-container-nav" brand={brand} alignLinks='right'>
                    </Navbar>
                </div>
            </Slide>
        );
    }
}
