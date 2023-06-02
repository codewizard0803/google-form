import React, { useEffect, useReducer } from 'react'
import InitialCard from './InitialCard'
import SectionCard from './SectionCard'

const GoogleForm = () => {

  return (
    <>
      <div className="container mx-auto">
          <div>
            <InitialCard />
            <SectionCard />
          </div>
      </div>
    </>
  );
}


export default GoogleForm;