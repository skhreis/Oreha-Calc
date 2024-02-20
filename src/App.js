import {useState} from 'react';

function App() {
  const [excavsuporeha, setExcavsuporeha] = useState();
  const [fishsuporeha, setFishsuporeha] = useState()
  const [fishprimeoreha, setFishprimeoreha] = useState()
  const [excavprimeoreha, setExcavprimeoreha] = useState()
  const [sellexavsup, setSellexavsup] = useState()
  const [sellexavprime, setSellexavprime] = useState()
  const [arr, setArr] = useState(false);
  const [addFormData, setAddFormData] = useState({
    grayfish: '',
    greenfish: '',
    bluefish: '',
    grayrelic: '',
    greenrelic: '',
    bluerelic: '',
    costreduct: '',
    suporehacost: '',
    primeorehacost: '',
  })
  const handleAddFormChange = (event) => {
    event.preventDefault()
    const fieldName = event.target.getAttribute("name")
    const fieldValue = event.target.value
    const newFormData = { ...addFormData }
    newFormData[fieldName] = fieldValue
    setAddFormData(newFormData)
  };

  const handleAddFormSubmit = (event) => {
    const editedInfo = {
        grayfish: addFormData.grayfish,
        greenfish: addFormData.greenfish,
        bluefish: addFormData.bluefish,
        grayrelic: addFormData.grayrelic,
        greenrelic: addFormData.greenrelic,
        bluerelic: addFormData.bluerelic,
        costreduct: addFormData.costreduct,
        suporehacost: addFormData.suporehacost,
        primeorehacost: addFormData.primeorehacost,
    }
    setAddFormData(editedInfo)    
    profitCalc()
  };


  const profitCalc = () => {
    setExcavsuporeha(Math.ceil((20*addFormData.suporehacost) - ((addFormData.grayrelic*0.94) + (addFormData.greenrelic*2.9) + (addFormData.bluerelic*1.6) + (250-(250*(addFormData.costreduct/100))))));
    setFishsuporeha(Math.ceil((20*addFormData.suporehacost) - ((addFormData.grayfish*1.28) + (addFormData.greenfish*6.4) + (addFormData.bluefish*1.6) + (250-(250*(addFormData.costreduct/100))))));
    setFishprimeoreha(Math.ceil((15*addFormData.primeorehacost) - ((addFormData.grayfish*1.42) + (addFormData.greenfish*6.9) + (addFormData.bluefish*5.2) + (300-(300*(addFormData.costreduct/100))))));
    setExcavprimeoreha(Math.ceil((15*addFormData.primeorehacost) - ((addFormData.grayrelic*1.07) + (addFormData.greenrelic*5.1) + (addFormData.bluerelic*5.2) + (300-(300*(addFormData.costreduct/100))))));
    setSellexavsup(Math.ceil(((((addFormData.grayrelic*0.94) + (addFormData.greenrelic*2.9) + (addFormData.bluerelic*1.6)) - 
    ((addFormData.grayrelic*0.94) + (addFormData.greenrelic*2.9) + (addFormData.bluerelic*1.6))*0.05) -
    ((addFormData.grayfish*1.28) + (addFormData.greenfish*6.4) + (addFormData.bluefish*1.6)))));
    setSellexavprime(Math.ceil(((((addFormData.grayrelic*1.07) + (addFormData.greenrelic*5.1) + (addFormData.bluerelic*5.2)) - 
    (((addFormData.grayrelic*1.07) + (addFormData.greenrelic*5.1) + (addFormData.bluerelic*5.2))*0.05)) - 
    ((addFormData.grayfish*1.42) + (addFormData.greenfish*6.9) + (addFormData.bluefish*5.2)))));
    console.log(excavsuporeha)
    setArr(true)
  }




  return (
    <div class='h-full w-full bg-bgb'>
      <h1 class='flex justify-center text-sm font-medium text-white'>Fill the boxes with Market Prices from the Marketboard.</h1>
      <div class = 'flex justify-center place-items-center pb-10 pt-4'>
        <list>
            <li class='flex mb-3'>
              <label class='block mb-2 text-sm font-medium text-gray-900 dark:text-white px-2'>Fish(Gray): </label>
              <input
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                type="text"
                name="grayfish"
                required='required'
                onChange={handleAddFormChange}
              />
            </li>
            <li class='flex flex-rows mb-3'>
            <label class='block mb-2 text-sm font-medium text-gray-900 dark:text-white px-2'>Natural Pearl(Green): </label>
              <input
                className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'                 
                type="text"
                name="greenfish"
                required='required'
                onChange={handleAddFormChange} />
            </li>
            <li class='flex flex-rows mb-3'>
            <label class='block mb-2 text-sm font-medium text-gray-900 dark:text-white px-2'>Oreha Solar Carp(Blue): </label>
              <input
                className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'                 
                type="text"
                name="bluefish"
                required='required'
                onChange={handleAddFormChange} />
            </li>
        </list>
        <list>
            <li class='flex flex-rows mb-3'>
            <label class='block mb-2 text-sm font-medium text-gray-900 dark:text-white px-2'>Ancient Relic(Gray): </label>
              <input
                className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'                 
                type="text"
                name="grayrelic"
                required='required'
                onChange={handleAddFormChange} />
            </li>
            <li class='flex flex-rows mb-3'>
            <label class='block mb-2 text-sm font-medium text-gray-900 dark:text-white px-2'>Rare Relic(Green): </label>
              <input
                className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'             
                type="text"
                name="greenrelic"
                required='required'
                onChange={handleAddFormChange} />
            </li>
            <li class='flex flex-rows mb-3'>
            <label class='block mb-2 text-sm font-medium text-gray-900 dark:text-white px-2'>Oreha Relic(Blue): </label>
              <input
                className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'                
                type="text"
                name="bluerelic"
                required='required'
                onChange={handleAddFormChange} />
            </li>
        </list>
        <list>
        <li class='flex flex-rows mb-3'>
            <label class='block mb-2 text-sm font-medium text-gray-900 dark:text-white px-2'>Superior Oreha Cost: </label>
              <input
                className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'                 
                type="text"
                name="suporehacost"
                required='required'
                onChange={handleAddFormChange} />
            </li>
            <li class='flex flex-rows mb-3'>
            <label class='block mb-2 text-sm font-medium text-gray-900 dark:text-white px-2'>Prime Oreha Cost: </label>
              <input
                className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'                 
                type="text"
                name="primeorehacost"
                required='required'
                onChange={handleAddFormChange} />
            </li>
            <li class='flex flex-rows mb-3'>
            <label class='block mb-2 text-sm font-medium text-gray-900 dark:text-white px-2'>Stronghold Cost Reduction %: </label>
              <input
                className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'                 
                type="text"
                name="costreduct"
                required='required'
                onChange={handleAddFormChange} />
            </li>
        </list>
      </div>
      <div class="flex justify-center">
        <button class='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={handleAddFormSubmit}>Calculate</button>
      </div>
      <div className='flex justify-center place-items-center pb-10 pt-4'>
        {arr ?<list>
        <li class='flex flex-cols mb-2'>
          <label class='block mb-2 text-sm font-medium text-gray-900 dark:text-white px-2'>Buying Relics & Crafting Superior:</label>
          <input value={excavsuporeha} class='mb-2 mr-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500' disabled />
          <div class='text-sm font-medium text-white' >Compares buying Superior Orehas vs. Buying Relics and crafting it yourself.</div>
        </li>
        <li class='flex flex-cols mb-2'>
          <label class='block mb-2 text-sm font-medium text-gray-900 dark:text-white px-2'>Buying Fish & Crafting Superior: </label>
          <input value={fishsuporeha} class='mb-2 mr-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500' disabled />
          <div class='text-sm font-medium text-white' >Compares buying Superior Orehas vs. Buying Fish and crafting it yourself.</div>
        </li>
        <li class='flex flex-cols mb-2'>
          <label class='block mb-2 text-sm font-medium text-gray-900 dark:text-white px-2'>Buying Relics & Crafting Prime: </label>
          <input value={excavprimeoreha} class='mb-2 mr-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500' disabled />
          <div class='text-sm font-medium text-white' >Compares buying Prime Orehas vs. Buying Relics and crafting it yourself.</div>
        </li>
        <li class='flex flex-rcols mb-2'>
          <label class='block mb-2 text-sm font-medium text-gray-900 dark:text-white px-2'>Buying Fish & Crafting Prime: </label>
          <input value={fishprimeoreha} class='mb-2 mr-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500' disabled />
          <div class='text-sm font-medium text-white' >Compares buying Prime Orehas vs. Buying Fish and crafting it yourself.</div>
        </li>
        <li class='flex flex-cols mb-2'>
          <label class='block mb-2 text-sm font-medium text-gray-900 dark:text-white px-2'>Selling Relic & Buy Fish & Craft Superior: </label>
          <input value={sellexavsup} class='mb-2 mr-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500' disabled />
          <div class='text-sm font-medium text-white' >Profit of selling Relics, buying fish, then crafting Superior Orehas </div>
        </li>
        <li class='flex flex-cols mb-2'>
          <label class='block mb-2 text-sm font-medium text-gray-900 dark:text-white px-2'>Selling Relic & Buy Fish & Craft Prime: </label>
          <input value={sellexavprime} class='mb-2 mr-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500' disabled />
          <div class='text-sm font-medium text-white' >Profit of selling Relics, buying fish, then crafting Prime Orehas </div>

        </li>
        </list>
        : null }</div>
    </div>
  );
}

export default App;
