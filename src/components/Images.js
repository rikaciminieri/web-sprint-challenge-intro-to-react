import React,{Component} from 'react';
import ColumnComponent from './ColumnComponent'

   class Index extends Component {
      state={
        images:[
        {id:'1',img:'www.google.com'},
        {id:'2',img:'www.facebook.com'},
        {id:'3',img:'www.youtube.com'},
           ]
        }
      render(){
       let myImages=this.state.images.map(
             el=>{
                 return <ColumnComponent key={el.id} imgURL={el.img} />})
        return (
          <div>
           {myImages}
          </div>
       )}
   }
      export default Index;