import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) =>{
    return(
        <div>
           <MyInput 
             plasholder="Search"
             value={filter.query}
             onChange={e=> setFilter({...filter, query: e.target.value})}/>
           <MySelect
             defaultValue="Sort by"
             value={filter.sort}
             onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
             options={[
               {value: 'title', name: 'Name'},
               {value: 'body', name: 'Description'}
            ]}/>
        </div>
    )
}
export default PostFilter;