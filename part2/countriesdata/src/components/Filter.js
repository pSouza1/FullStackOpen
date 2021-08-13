import React from "react";

const Filter = (props) => {
return(
    <div>
      <form> find countries <input value={props.newSearch} onChange={props.handleSearchChange}/> </form>
    </div>
)
}

export default Filter;