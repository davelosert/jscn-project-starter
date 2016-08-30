/**
 * User: davidlosert
 * Date: 30.08.16
 * Time: 19:50
 */

import React, {Component} from 'react';
import request from 'browser-request';
import CandidateComponent from '../components/candidateComponent';

import './styles.css';


class CandidateListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            candidates: []
        };
    }

    componentDidMount() {
        request('http://localhost:3001/api/us-presidents/candidates', (err, response, body) => {
            console.log(`${body}`);
            this.setState({
                candidates: JSON.parse(body)
            });
        });
    }

    vote() {

    }

    render() {
        let candidateList = this.state.candidates.map((candidate) => {
            return (<CandidateComponent candidate={candidate} numVotes={0} />)
        });
        return (
            <div>
                <h1>Candidates List</h1>
                <ul className="candidate-component-list">
                    {candidateList}
                </ul>
            </div>
        )
    }
}

CandidateListContainer.propTypes = {};

export default CandidateListContainer;