import React, {Component} from 'react';
import './App.css';
import StationList from "./StationList";
import stations from "./transports.json";

class App extends Component {
    constructor(args) {
        super(args);
        this.changeCategory = this.changeCategory.bind(this);
        this.state = {
            filter: 'bts_sukhumvit'
        }
    }

    changeCategory(event) {
        const filter = event.target.value;
        this.setState({filter});
    }

    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <label>Select the line</label>
                    <select onChange={this.changeCategory} className="form-control">
                        <option value="bts_sukhumvit">Sukhumvit BTS Line</option>
                        <option value="bts_silom">Silom BTS Line</option>
                    </select>
                </div>

                <ul className="timeline">
                    <StationList filter={this.state.filter} stations={stations}/>
                </ul>
            </div>
        );
    }
}

export default App;
