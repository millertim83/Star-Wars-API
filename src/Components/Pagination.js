import React from 'react';

const Pagination = (props) => {
        
        let currentPage = "1";
    return (
        <div class="btn-group" role="group">
            <button type="button" id="1" className="pageBtns btn btn-secondary"
                onClick = {props.changePage(currentPage = "1")}
                >1</button>
            <button type="button" id="2" className="pageBtns btn btn-secondary"
                onClick = {props.changePage(currentPage = "2")}
                >2</button>
            <button type="button" id="3" className="pageBtns btn btn-secondary"
                onClick = {props.changePage(currentPage = "3")}
                >3</button>
            <button type="button" id="4" className="pageBtns btn btn-secondary"
                onClick = {props.changePage(currentPage = "4")}
                >4</button>
            <button type="button" id="5" className="pageBtns btn btn-secondary"
                onClick = {props.changePage(currentPage = "5")}
                >5</button>
            <button type="button" id="6" className="pageBtns btn btn-secondary"
                onClick = {props.changePage(currentPage = "6")}
                >6</button>
            <button type="button" id="7" className="pageBtns btn btn-secondary"
                onClick = {props.changePage(currentPage = "7")}
                >7</button>
            <button type="button" id="8" className="pageBtns btn btn-secondary"
                onClick = {props.changePage(currentPage = "8")}
                >8</button>
            <button type="button" id="99" className="pageBtns btn btn-secondary"
                onClick = {props.changePage(currentPage = "9")}
                >9</button>
        </div>
    )
}

export default Pagination