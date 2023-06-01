import React, { useEffect, useReducer } from 'react'
import * as XLSX from 'xlsx'
import axios from 'axios'
import InitialCard from './initialCard'



const GoogleForm = () => {

  const initialState = {
    loading: true,
    formFields: []
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_FORM_FIELDS":
        return { ...state, formFields: action.payload };
      case "SET_LOADING":
        return { ...state, loading: action.payload };
      default:
        return state;
    }
  }
  const fetchData = async (dispatch) => {
    try {

      dispatch({ type: "SET_LOADING", payload: true });

      const response = await axios.get("https://docs.google.com/spreadsheets/d/1WJwJ4tqYE8YAacunsMPoiJNaRYRxkIveKNAccL44adk/edit#gid=0", { responseType: 'arraybuffer' });
      const data = new Uint8Array(response.data)

      const workbook = XLSX.read(data, { type: 'array' });
      const jsonData = [];
      workbook.SheetNames.forEach((sheetName) => {
        const worksheet = workbook.Sheets[sheetName];
        const sheetData =  XLSX.utils.sheet_to_json(worksheet)

        jsonData[sheetName] = sheetData;
      });

      dispatch({type: "SET_FORM_FIELDS", payload: jsonData['Sheet1']})

    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      dispatch({type: "SET_LOADING", payload: false})
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetchData(dispatch);

    console.log('Fields', state.formFields)
  }, []);

  return (
    <>
      <div className="container mx-auto">
        {state.loading ? <div>Loading...</div> :<InitialCard title={ state.formFields[0]?.A} />}
      </div>
    </>
  );
}


export default GoogleForm;