import React, {Component} from 'react';

// Hint: Avoid using stateful components for presentation as much as possible.
// The only time they're useful (when using redux) is to store state that is
// nonsensical to the rest of the application (e.g. text input values before
// submit).

class CandidateComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.vote = this.vote.bind(this);
    }

    /* Lifecycle Methods: https://facebook.github.io/react/docs/component-specs.html */

    componentDidMount() {
    }

    /* Click handlers and custom methods */

    vote() {
        this.props.vote(this.props.candidate);
    }

    /* Rendering */

    render() {
        const {candidate} = this.props;

        return (
            <li>
                <img src={candidate.photoUrl} alt="" onClick={this.vote}/>
                <b>Votes:</b><i>{candidate.numVotes}</i><br />
                {candidate.name}
            </li>
        );
    }
}

CandidateComponent.propTypes = {};

export default CandidateComponent;
