import React, { useState } from "react";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'


import "./servers-list.styles.scss";

const ServersList=()=>{
  const [servers,setServers]=useState([
    {
            name: "PIG",
          },
          {
            name: "CSFL",
          },
          {
            name: "HCI",
          },
          {
            name: "C++",
          },
          {
            name: "JS",
          },
          {
            name: "+",
          },
  ])

  const [click, setClick] = useState(false)

  const handleClick = () => {
    //setClick(!click);
    console.log(1);
  }

  const handleDragEnd=({destination,source})=>{
    // console.log('source',source)
    // console.log('destination',destination)

    if(!destination){
      console.log('null')
      return}
    if(destination.index === source.index && destination.droppableId === source.droppableId ){
      return
    }
    if(source.index === servers.length-1 || destination.index === servers.length-1){
      return
    }
    
    const item1=servers[source.index]
    const item2=servers[destination.index]

    console.log(item1,item2)
    setServers(prev=>{
      prev=[...prev]
      prev.splice(source.index,1)
      prev.splice(destination.index,0,item1)
      return prev
    })

  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}> 
      <div>
        <Droppable droppableId='server-list'>
          {(provided,snapshot)=>{
            return(
              <ul className="servers-list"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {servers.map((server,index)=>{
                  return(
                    <Draggable key={server.name} index={index} draggableId={server.name}>
                      {(provided)=>{
                        return (
                          <li className="servers-list-server"
                            ref={provided.innerRef} 
                            {...provided.draggableProps} 
                            {...provided.dragHandleProps} >
                              <div className='servers-list-server-name'>
                                {server.name}
                              </div>
                          </li>
                        )
                      }}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </ul>
            )
          }}
        </Droppable>
      </div>
    </DragDropContext>
  )
}


export default ServersList;


