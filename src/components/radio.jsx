import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';

// class RadioGroup extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedOption: ''
//         }
//     }
// }

// handleOptionChange = (event) => {
//     this.setState({
//         selectedOption: event.target.value
//     });
// };

// function RadioProduct() {
//     return (
//         <div className="form-group">
//             <label>Product Freshness</label><br />
//             <label>
//                 <input type="radio" value="option1" onChange={{ this: handleOptionChange }} />Brand New
//             </label><br />
//             <label>
//                 <input type="radio" value="option2" onChange={{ this: handleOptionChange }} />Second Hank
//             </label><br />
//             <label>
//                 <input type="radio" value="option2" onChange={{ this: handleOptionChange }} />Refurbished
//             </label>
//         </div>
//     )
// }

// export default RadioProduct

import React from 'react';

class RadioExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: 'option1', // Nilai awal yang terpilih
        };
    }

    handleOptionChange = (event) => {
        this.setState({
            selectedOption: event.target.value,
        });
    };

    render() {
        return (
            <div>
                <label>Product Freshness</label><br />
                <label>
                    <input
                        type="radio"
                        value="option1"
                        checked={this.state.selectedOption === 'option1'}
                        onChange={this.handleOptionChange}
                    />
                    Brand New
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        value="option2"
                        checked={this.state.selectedOption === 'option2'}
                        onChange={this.handleOptionChange}
                    />
                    Second Hank
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        value="option3"
                        checked={this.state.selectedOption === 'option3'}
                        onChange={this.handleOptionChange}
                    />
                    Refurbished
                </label>
                <br />
                <p>Selected Option: {this.state.selectedOption}</p>
            </div>
        );
    }
}

export default RadioExample;
