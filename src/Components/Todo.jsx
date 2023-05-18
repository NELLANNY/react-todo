function Todo(me) {
   function deleteBtn(){}
    return ( 
        <div className='card'> 
               <h2>{me.p}</h2>
               <div className='actions'> 
               <button className='btn' onClick={deleteBtn}>Delete</button>
            </div>
         </div>
        
      );


}

export default Todo;