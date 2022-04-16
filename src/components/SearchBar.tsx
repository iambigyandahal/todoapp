import React, { useState } from "react"

const SearchBar: React.FC<SearchBarNode> = (props) => {
  const handleFilterText = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handleFilterText(e.target.value);
  }

  const handleIsCompleted = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handleIsCompleted(e.target.checked);
  }

  return (
    <div className="mb-4">
      <div className="mt-4">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" type="text" placeholder="Search" value={props.filterText} onChange={(e) => handleFilterText(e)} /> <br />
        <input type="checkbox" checked={props.isCompleted} onChange={(e) => handleIsCompleted(e)} /> Show incomplete only
      </div>
    </div>
  )
}

export default SearchBar