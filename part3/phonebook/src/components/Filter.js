import React from "react";

const Filter = (props) => {
return(
    <div>
      <form> filter shown with <input value={props.newSearch} onChange={props.handleSearchChange}/> </form>
    </div>
)
}

export default Filter;