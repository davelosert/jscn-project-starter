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
        request('http://localhost:3001/api/us-presidents/summary', (err, response, body) => {
            console.log(`${body}`);
            let bodyMovin = JSON.parse(body);

            let allVotes = bodyMovin.allVotes;
            let allCandidates = bodyMovin.candidates;

            let cumulatedCandidates = allCandidates.map((candidate) => {
                let votesForCandidate = allVotes.filter((vote) => vote.candidateId === candidate.id).length
                return Object.assign({}, candidate, {
                    numVotes: votesForCandidate
                });
            });

            this.setState({
                candidates: cumulatedCandidates
            });
        });
    }

    vote() {

    }

    render() {
        let candidateList = this.state.candidates.map((candidate) => {
            return (<CandidateComponent candidate={candidate}/>)
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