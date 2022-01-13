
import '../css/style.css';

import React,{Component} from 'react';

class Main extends Component
{
    constructor()
    {
        super();
        this.state = {
            data: [],
            filtered: [],
            
        }

    }

    render(){

        var rederList = this.state.data.map((e) => this.getRenderView(e));

        var evenRederList = this.state.filtered.map((e) => this.getRenderView(e));

        return <div className="Main">
           <h1>Number Filter</h1>

            <form>
                <input type="number" id="counter" className="inputStyle" placeholder="Enter the number of inputs"></input>
                <br/>
                <br/>
                <button type="button" class="mainbtn" onClick={()=>this.fetchRandom()}>Generate Random Numbers</button>
                <br/>


                <br/>

                <center><div className='container'>{rederList}</div></center>


                <button type="button" onClick={()=>this.rectifyEven()} class="eobtn">even</button>
                <button type="button" onClick={()=>this.rectifyOdd()}  class="eobtn">odd</button>

                
                <h1>Filtered Array</h1>
                <center><div className='container'>{evenRederList}</div></center>

            </form>
        </div>
    }

    getRenderView(e)
    {
        return <div className='listView'>
            {e}
        </div>
    
    }

    fetchRandom()
    {
        var d = [];
        var v = document.getElementById("counter").value;
        for(var i=0;i<v;i++)
        {
            d.push(Math.floor(Math.random() * 10));
        }
        this.setState({
            data: d,
        });
    }

    rectifyEven()
    {
        var val = this.state.data.filter((e) => e%2 === 0 ? e : null);
        this.setState({
            filtered: val,
        });
        console.log(val);
    }

    rectifyOdd()
    {
        var val = this.state.data.filter((e) => e%2 !== 0 ? e : null);
        this.setState({
            filtered: val,
        });
    }
}

export default Main;