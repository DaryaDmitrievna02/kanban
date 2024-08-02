function Task({task, colIndex, taskIndex }){


    const handleOnDrag = (e) => {

       
        e.dataTransfer.setData(
          "text",
          JSON.stringify({ taskIndex, prevColIndex: colIndex })
        );

       
      };

    return (<>
        <div onDragStart={handleOnDrag}  draggable className="flex flex-col bg-slate-100 rounded-md w-full h-auto py-5 px-2">
                                    <div>{task.title}</div>
                                    <div>{task.description}</div>
                                  </div>
    </>)
}


export default Task;