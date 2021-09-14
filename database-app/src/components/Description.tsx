import React from "react";



export const Description:React.FC = ({selectedFlatRows}:any)=>{


    return(
        <div className="inf">
            <div>Profile info:</div>
        {selectedFlatRows.map((row: any, index: number) => (
          <div className='description' key={`5-${index}`}>
        <div key={`5-${index}`}>Selected profile: {row.original.firstName} {row.original.lastName}</div>
        <div>Description: {row.original.description}</div>
        <div>Address: {row.original.adress.streetAddress}</div>
        <div>City: {row.original.adress.city}</div>
        <div>State: {row.original.adress.state}</div>
        <div>Index: {row.original.adress.zip}</div>
        </div>
        ))}
      </div>
    )
}

