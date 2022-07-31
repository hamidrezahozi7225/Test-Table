import React from "react";
import Loader from "./Loader/Loader";
import {GetApiTest} from "./Api/GetApiTest";
import {PaginateTest} from "./PaginateTest";
import {NavLink} from "react-router-dom";
const _=require("lodash")

class Test extends React.Component{
    state={
        data:[],
        correct:0,
        style:"",
        liked:false,
        ticked:"",
        currentPage:0,
        pageSize: 1,
        trueItem:0,
        answer:[],
        loaded:false,
        values:"",
        NextFinish:"next",
        count:1
    }
    async componentDidMount() {
        const {data}=await GetApiTest()
        const result=data.results
        const answer= [...result[this.state.currentPage].incorrect_answers]
        answer.push(result[this.state.currentPage].correct_answer)
        let random=_.shuffle(answer).slice(0,4)
        this.setState({data:result,answer:random,loaded:true})
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.currentPage !== this.state.currentPage) {
            const answer = [...this.state.data[this.state.currentPage].incorrect_answers]
            answer.push(this.state.data[this.state.currentPage].correct_answer)
            let random=_.shuffle(answer).slice(0,4)
            this.setState({answer:random})
        }
    }
    handleclick=(item,value)=>{
        const values=this.state.answer[this.state.answer.indexOf(value)]
        this.setState({ticked:value,values})
    }
    handleCheck=item=>{
        const answer=this.state.data.filter(m=> m.correct_answer === item.correct_answer)
        const trueAnswer = answer.map(m=>m.correct_answer)
        if(this.state.ticked == trueAnswer){
           this.setState({trueItem:this.state.trueItem+1})
        }
        const data=[...this.state.data]
        const index=data.indexOf(item)
        data[index].liked=!data[index].liked
        this.setState({liked:true,style:"bg-success"})
    }
    handleNext=item=>{
        if(this.state.count===9){
            this.setState({NextFinish:"finish"})
        }
        if(this.state.NextFinish==="finish"){
           window.location.assign("http://localhost:3000/")
        }
        this.setState({currentPage:this.state.currentPage + 1,count:this.state.count+1})
    }
    render() {
        const {data,currentPage,pageSize,answer,loaded,NextFinish,values}=this.state
        const paginate=PaginateTest(data,currentPage,pageSize)

        return (
            <div>
                {!loaded?<Loader/>:
               <div className="container">
                   <div className="mt-5">
                       <h1>Question:</h1>
                           {paginate.map(item=>(
                               <div className="mt-4" key={item.question}>
                                   <h4 className="mb-4">{item.question}</h4>
                                   <ul className="list-group">
                                       {answer.map(itemanswer=>(
                                           <li
                                               key={itemanswer}
                                               className={itemanswer===item.correct_answer && item.liked ?"list-group-item bg-success disabled text-white ":"list-group-item "
                                                            &&
                                                        itemanswer===values  ?"list-group-item bg-warning":"list-group-item "}
                                               onClick={()=>this.handleclick(item,itemanswer)}>
                                               {itemanswer}
                                           </li>
                                       ))}
                                   </ul>
                                   <button
                                       className="btn btn-primary mt-4"
                                       onClick={()=>this.handleCheck(item)}>submit</button>
                                   <button
                                       disabled={!item.liked}
                                       className="btn btn-success mt-4 mx-2"
                                       onClick={()=>this.handleNext(item)}>{NextFinish}
                                   </button>
                                   <h5 className="text-secondary mt-3">true answer:{this.state.trueItem}</h5>
                               </div>
                           ))}
                   </div>
                   <div className="row space"></div>
               </div>
                }
            </div>
        );
    }
}
export default Test