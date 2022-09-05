import React from 'react';

function Review(){
    const myStyle={
        backgroundColor: "#F9E79F",
        width: "auto",
        height: "300px",
        marginLeft: "5px",
        marginRight: "5px",
        marginBottom: "5px",
        textAlign: "center",
        border: "1px solid black"

    }
    return(
        <>
        <div style={myStyle}>
            <h2 style={{border: "dotted"}}>Add Review</h2>
            <p>Your Reviews are Really Important for us.</p>
            <form action="/review" method="post">
                <label>Name</label><br/>
                <input type="text" id="nameReview" name="nameReview"/><br/>
                <label>Email</label><br/>
                <input type="text" id="emailReview" name="emailReview"/><br/>
                <label>Review</label><br/>
                <textarea type="text" id="review" name="review"/><br/>
                <button type="submit" class="btn btn-success">Add+</button>
            </form>
        </div>
        </>
    )
}
export default Review