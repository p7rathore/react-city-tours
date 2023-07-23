import React,{Component} from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import {tourData} from '../tourData';

export default class TourList extends Component {
    state={
        tours: tourData,
    }

		removeTour = id => {
			this.setState({
				tours: this.state.tours.filter(tour => tour.id !== id) 
			})
		}
    render(){
        const {tours} = this.state;
        return(
            <section className="tourlist">
              {tours.map(tour => (
								<Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
							))}
            </section>
        )
    }
}