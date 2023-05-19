import React, { useState } from 'react'


const Form = () => {
 
  const [name,setName]= useState("")
  const [model,setModel] = useState("")
  const [date,setDate] = useState("")
  const [mileage, setMileage] = useState("");
  const [condition, setCondition] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [transmission, setTransmission] = useState('');
  const [priceRange, setPriceRange] = useState(0);
  const [textInput, setTextInput] = useState('');

  const handlleNameChange=(e)=>{
     setName(e.target.value)
  }

  const handleModelChange=(e)=>{
     setModel(e.target.value)
  }

  const handleDateChange=(e)=>{
     setDate(e.target.value)
  }

  const handleMileageChange = (e) => {
    setMileage(e.target.value);
  };
  

  const handleConditionChange=(e)=>{
    setCondition(e.target.value);
  };

  const handleTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  
  const handleFeatureChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedFeatures((prevSelectedFeatures) => [
        ...prevSelectedFeatures,
        value
      ]);
    } else {
      setSelectedFeatures((prevSelectedFeatures) =>
        prevSelectedFeatures.filter((feature) => feature !== value)
      );
    }
  };

  const handleTransmissionChange=(e)=>{
    setTransmission(e.target.value);
  }

  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
  };

  const handleSubmitChange = (e) => {
    e.preventDefault();
    console.log({ name, model, date, mileage, condition, selectedFeatures, transmission, priceRange, textInput });
  };
  
  const handleCancel = (e) => {
    e.preventDefault(); // Prevents form submission
    console.log("Form submission cancelled."); // Cancels console logging
    
    // Clear input fields
    setName("");
    setModel("");
    setDate("");
    setMileage("");
    setCondition("");
    setSelectedFeatures([]);
    setTransmission("");
    setPriceRange("");
    setTextInput("");
  };
  
  


  return (
    <div className='container  d-flex flex-column'>
        <h1>Car Sell App Form</h1>
        <form>
            <div className="input">
            <label className='form-label' for="name" >Name</label>
            <input className='form-control' type="text" placeholder='Enter the name' onChange={handlleNameChange} value={name} id='name' /> <br />

            <label className='form-label' for="model">Model</label>
            <input className='form-control' type="text" id='model' value={model} onChange={handleModelChange} placeholder='Enter the car model'/> <br />

            <label className='form-label' for="date">Date</label>
            <input className='form-control' type="date" id='date' value={date} onChange={handleDateChange} min="2023-01-01" max="2023-12-31" /> <br />

            <label className='form-label' for="mileage">Mileage</label>
            <input className='form-control' type="number" value={mileage} onChange={handleMileageChange} name="numberInput" /><br />

            <br />
            <label className='form-label'>Condition</label>
            <input className='form-check-input' type="radio" name="condition" value="Fair" checked={condition === "Fair"} onChange={handleConditionChange}/> Fair  <br />
            <input className='form-check-input' type="radio" name="condition" value="Poor" checked={condition === "Poor"} onChange={handleConditionChange}/> Poor  <br />
 
            <br /> <br />

            <label className='form-label' for="">Features</label> <br />
            <input className='form-check-input' type="checkbox"
            value="Air Conditioning"
            checked={selectedFeatures.includes("Air Conditioning")}
            onChange={handleFeatureChange}
            />
            Air Conditioning <br />
            <input className='form-check-input' type="checkbox"
            value="Power Steering"
            checked={selectedFeatures.includes("Power Steering")}
            onChange={handleFeatureChange}
            />
            Power Steering <br />
            <input className='form-check-input' type="checkbox"
            value="Power Windows"
            checked={selectedFeatures.includes("Power Windows")}
            onChange={handleFeatureChange}
            />
            Power Windows
            <br />
            <input className='form-check-input' type="checkbox"
            value="ABS"
            checked={selectedFeatures.includes("ABS")}
            onChange={handleFeatureChange}
            />
            ABS <br />
            <input className='form-check-input' type="checkbox"
            value="Navigation System"
            checked={selectedFeatures.includes("Navigation System")}
            onChange={handleFeatureChange}
            />
            Navigation System

             <br />
             <br />
             <label className='form-label' for="transmission-select">Transmission:</label>
            <select className='form-select' id="transmission-select" value={transmission} onChange={handleTransmissionChange}>
              <option value="">Select Transmission</option>
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
            </select>

            <br />
            <br />

            <label className='form-label' for="">Range</label> <br />
            <label className='form-label' for="priceRange">Price Range:</label>
            <input className='form-range'
              type="range"
              id="priceRange"
              min="0"
              max="100"
              value={priceRange}
              onChange={handlePriceRangeChange}
            /> <br /> <br />

            <label className='form-label' for="textInput">Text Input:</label>
            <input className='form-control'
              type="text"
              id="textInput"
              value={textInput}
              onChange={handleTextInputChange}
            />

            <br />
          
            <input className='btn btn-outline-dark btn-lg' type="submit" id='submit' value='Submit' onClick={handleSubmitChange}/>
            <button onClick={handleCancel}  className='btn btn-lg btn-outline-dark m-3'>Cancel</button>

            </div>
            
        </form>
        
        <div className='output'>
              <h1>Output of entered data:</h1> <br /> <br />
              <p>Name:   {name}</p>
              <p>Model:   {model}</p>
              <p>Date:   {date}</p>
              <p>Mileage:   {mileage}</p>
              <p>Condition:   {condition}</p>
              <p>Selected features:   {selectedFeatures.join(", ")}</p>
              <p>Transmission:   {transmission}</p>
              <p>Price range:   {priceRange}</p>
              <p>Text input:   {textInput}</p>
            </div>

    </div>
  )
}

export default Form