import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './home.css';

export default class Home extends Component{
    
    render() {
        return (
            <div>
                <Grid fluid="true">
                    <Row>
                        <Jumbotron className="jumbotron">
                            <h1>Tv Series App</h1>
                            <p>Looking for an accurate and comprehensive TV guide?</p>
                            <span>Then you've come to the right place.</span>
                        </Jumbotron>
                    </Row>
                </Grid>
                <Grid>
                    <Row>
                        <Col xs={12} md={12} className="text-center">
                            <h2 className="main-header">Search for most popular Tv Series and Tv Shows</h2>
                            <hr/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <h4>Most Popoular Tv Series</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua.</p>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <h4>Most Popoular Tv Shows</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua.</p>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <h4>Tv Show Casts</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua.</p>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <h4>People</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua.</p>
                        </Col>
                    </Row>
                </Grid>
                <Grid>
                    <Row>
                        <Col xs={12} md={4} mdPush={4}>
                            <div className="search-button">
                                <Button bsSize="large" bsStyle="warning" block><Link to="/shows">Search Best Tv Series</Link></Button>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}