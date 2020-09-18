import React from "react";

export default class Archives extends React.Component {
    render() {
        const query = new URLSearchParams(this.props.location.search)
        const messsage = 
            (this.props.match.params.article ? this.props.match.params.article + ", " : "")
            + "date=" + query.get("date") + ", filter=" + query.get("filter")
        return(
            <h1>Archives ({messsage})</h1>
        )
    }
}