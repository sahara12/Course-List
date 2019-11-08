import React ,{Component} from 'react';
import Courseform from './Component/Courseform.js';
import Courselist from './Component/Courselist.js'



class App extends Component{
    state ={
        
        courses: [
            
            {name: "HTML"},
              {name: "CSS"},
              {name: "JS"}
            
        ],
        
        current : " "
        
        
    }

// update course
updateCourse = (e) =>{
    
    this.setState({
        
        current: e.target.value
    })
    
}

//Edit course

editCourse = (index, value) => {
   let courses= this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.state({
        courses
    })
    
}



//Add Course

addCourse = (e) =>{
    e.preventDefault();
 let current = this.state.current;
    let courses = this.state.courses;
    
    courses.push({name: current});
    this.setState({
        courses: courses,
        current : ''
})
}


// deleate course

deleteCourse = (index) =>{
    //console.log(index);
    let courses= this.state.courses;
    courses.splice(index,1)
    this.setState({
        courses: courses
    })
}




    render(){
        const {courses} = this.state;
        const courselist =  courses.map( (course, index) => {
            
            return     <Courselist  details={course}  key={index} index={index} update={this.handleChang} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
            
        });
        
        
        
        
        return(
      <section>
    <h2> Add course </h2>
          <Courseform  current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse} />
           <ul> {courselist}</ul>
        

  </section>
        
        
        )
    }

}
export default App;
