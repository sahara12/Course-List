import React ,{Component, Fragment} from 'react';




class Courselist extends Component{
    
    
    state = {
        isEdit : false 
        
        
    }
    
    
   // render course item 
    
    renderCourse = () =>{
        
        
        return(
        
         <li> 
            
            <span>{this.props.details.name}  </span>
             <button onClick={() =>
                   {this.toggleState()}}> Edit Course</button>
           
            <button onClick={() => {this.props.deleteCourse(this.props.index)}}>delete</button>



            </li>
        
        );
    }
    
    
    updateCourseItem = (e) =>{
        
        e.preventDefault();
        this.props.editCourse(this.props.index, this.input.value)
        this.toggleState();
    }
    
    // toggle State
    
    toggleState = () =>{
        let {isEdit} = this.state;
        this.setState=({
            isEdit: !isEdit
        })
        
    }
    
    
    
//render update form
    
    renderUpdateForm = () => {
        
        return(
        <form  onSubmit={this.updateCourseItem}>
            <input type="text" ref={(v) => {this.input = v}} defaultValue={this.props.details.name} />
            <button> update course </button>
            </form>
        )
    }
    
    
    render(){
        let {isEdit} = this.state;
        return(
       <Fragment>
          
      {isEdit ? this.renderUpdateForm() : this.renderCourse()}
        </Fragment>
        )
    }
}

export default Courselist;
