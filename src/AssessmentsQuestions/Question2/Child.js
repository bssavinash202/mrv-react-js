import React,{useState} from 'react';

const Child=({list})=> {
    const[cities, setCities]= useState(list);
    const [addList, setAddList]=useState({
        name:'',
        capital:'',
        population:'',
    });
    const handleAddList=(event)=>{
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');//name = capital, field name = capital
        const fieldValue = event.target.value;// value = user data, fieldvalue = Ap
        const newList = {...addList};
        newList[fieldName]=fieldValue;
        setAddList(newList);
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        const newData ={
            id: cities.length + 1,
            name : addList.name,
            capital:addList.capital,
            population: addList.population

        };
        setCities([...cities, newData]);

    }
    return (
        <body>
            <div id='list'>
            <form onSubmit={handleSubmit}>
            <input type='text' name='name'onChange={handleAddList}   placeholder='Add a City' required='required'></input>
            <input type='text' name='capital'onChange={handleAddList}   placeholder='Add a capital'required='required'></input>
            <input type='number' name='population'onChange={handleAddList}   placeholder='Add a population'required='required'></input>
            <button >Add the City in the List</button>
            </form>
           {cities.map((city)=>(
            <ul>
            {city.id} -{city.name}-{city.capital}-{city.population}
            </ul>   
            ))}
            
        </div>
           
        
        </body>
    )
}

export default Child;
