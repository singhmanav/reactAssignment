
import React, {Component} from "react";
import PropTypes from "prop-types";
import Contact from "./Contact";
export default class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            frameworks: ['React', 'Redux',"RXJS"],
            show: true,
            name:"",
            highlight:false,

        }
    }

  toggle(){
      this.setState({show:!this.state.show})
  }
  hover(){
    this.setState({highlight:!this.state.highlight})
}
  handleInputChange(e){
    this.setState({name:e.target.value})
  }
  addToList(){
      this.setState({
          frameworks:[...this.state.frameworks,this.state.name],
          name:'',
      })
  }
  componentDidMount(){
      
  }
    
    render() {

        

        return (
            <div> 
            <h2>About US</h2>
            <h3>
Our Guidance
</h3>
<p>
Xebia Group companies operate on three distinct principles: Authority, Focus and Values. These principles guide every decision made by both management and staff. Authority means becoming the best in our field, individually and as a company. It’s an audacious goal that keeps us striving and fighting. We only hire people who have achieved authority, not for growth, open positions, size or value.
</p>
<h3>
People First
</h3>
<p>
People First
You grow. We grow. Xebia puts People First, always. With a thrust on personal development Xebia provides a mutual atmosphere of respect, trust, responsibility and accountability that helps foster great ideas and innovation.
</p>
<h3>
Sharing Knowledge
</h3>
<p>
Xebia believes in Sharing Knowledge. The more you share it, the more it grows. With mandatory bi-weekly sessions of Xebia Knowledge Exchange, Xebia ensures a flow of knowledge from country to country, unit to unit and employee to employee.
</p>
<h3>
Customer Intimacy
</h3>
<p>
We don't just create customers, we create relationships through Customer Intimacy. We work on common goals and trust, by being truly interested in the person and adding value pro-actively and consistently.
</p>
<h3>
Quality without Compromise
</h3>
<p>
At Xebia Quality Without Compromise is the Mantra. Be it work, be it personal interactions, be it the surroundings or be it the self, at Xebia 100% is the norm. Because enough is just not enough.
</p>

            </div>
        )
    }
} 


About.defaultProps = {
    
}

About.propTypes = {
    
}