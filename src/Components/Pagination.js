import React from 'react';

const Pagination = (props) => {
    return (
        <div className="container text-center">
            <div className="btn-group container-sm" role="group">
                <button type="button" id="1" className="pageBtns btn btn-secondary"
                    onClick = {(e) => props.changePage(e.target.id)}
                    >1</button>
                <button type="button" id="2" className="pageBtns btn btn-secondary"
                    onClick = {(e) => props.changePage(e.target.id)}
                    >2</button>
                <button type="button" id="3" className="pageBtns btn btn-secondary"
                    onClick = {(e) => props.changePage(e.target.id)}
                    >3</button>
                <button type="button" id="4" className="pageBtns btn btn-secondary"
                    onClick = {(e) => props.changePage(e.target.id)}
                    >4</button>
                <button type="button" id="5" className="pageBtns btn btn-secondary"
                    onClick = {(e) => props.changePage(e.target.id)}
                    >5</button>
                <button type="button" id="6" className="pageBtns btn btn-secondary"
                    onClick = {(e) => props.changePage(e.target.id)}
                    >6</button>
                <button type="button" id="7" className="pageBtns btn btn-secondary"
                    onClick = {(e) => props.changePage(e.target.id)}
                    >7</button>
                <button type="button" id="8" className="pageBtns btn btn-secondary"
                    onClick = {(e) => props.changePage(e.target.id)}
                    >8</button>
                <button type="button" id="9" className="pageBtns btn btn-secondary"
                    onClick = {(e) => props.changePage(e.target.id)}
                    >9</button>
            </div>
        </div>
    )
}

export default Pagination