/**
 * User: davidlosert
 * Date: 30.08.16
 * Time: 19:50
 */

import React, {Component} from 'react';
import request from 'browser-request';

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

    render() {
        let candidateList = this.state.candidates.map((candidate) => {
            return (<li>
                <img src={candidate.photoUrl} alt=""/>
                {candidate.name}
            </li>)
        });
        return (
            <div>
                <h1>Candidates List</h1>
                <ul>
                    {candidateList}
                </ul>
            </div>
        )
    }
}

CandidateListContainer.propTypes = {};

export default CandidateListContainer;