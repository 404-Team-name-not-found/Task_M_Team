import { useEffect, useState } from 'react'
import Filter from './filter';
import Kanban from '../kanban'
import { v4 as uuidv4 } from "uuid";
const Filters = (props)=>{

    const FiltersCategory = ["assignedTo","creator","sprint"];
    const [data, setData] = useState(props.data);      // data from the db
    const [fChoice, setFChoice] = useState({});     // each filter choice ({sprint:"all",....})
    const setKanbanData={setData:""};   // to change the state of the kanban component.

    useEffect(()=>{
        var temp={};
        FiltersCategory.forEach((category)=>{
            temp[category]="all"
        })
        setFChoice(temp);
    },[])  // create the filter category and set them to "all"

    function createFilters(filterName){
        var filterSet = new Set();
        var arr = [{text:"all"}];
        data.forEach((tab)=>{
            tab.tasks.forEach((task)=>{
                if(task[filterName]!=="")
                    filterSet.add(task[filterName]);
            });
        });
        filterSet.forEach(v=>arr.push({text:v}));
       return arr;
    } // create the filter option base on the filter name.
    function changeCategoryValue(category,value){
        var temp = fChoice;
        temp[category] = value;
        setFChoice(temp);
        setKanbanData.setData(filterData(data));
    }// hook from the filter component that change the state of the filter choise and the state of the kanban
    function autn(task,keys,i){
        if(i===keys.length)
            return true;
        if(fChoice[keys[i]] === "all" || fChoice[keys[i]]===task[keys[i]])
            return autn(task,keys,i+1)&&true;   
        else
            return false;
    }// find if a task need to be shown base on the currnt filters.
    function cloneJSON(json){
        var keys = Object.keys(json);
        var temp = {};
        for(var i=0;i<keys.length;i++){
            temp[keys[i]] = json[keys[i]];
        }
        return temp;
    }// clone a JSON 
    const filterData = (dataToFilter)=>{
        var tempData = [];
        dataToFilter.forEach((tab)=>{
            var tempTab = cloneJSON(tab);
            tempTab.tasks = tab.tasks.filter((task)=>autn(task,Object.keys(fChoice),0));
            tempData = [...tempData,tempTab];
        })
       return tempData;
    } // return the data after aplying the filters.



    return(
        <>
        {FiltersCategory.map((filter)=><Filter key={uuidv4()} text={filter} arr={createFilters(filter)} changeCategoryValue={changeCategoryValue}></Filter>)}
        <Kanban data={data} setData={setKanbanData}></Kanban>
        </>
    )
}
export default Filters