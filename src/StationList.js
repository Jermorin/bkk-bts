import React from "react";


export default class StationList extends React.Component {
    render() {
        const {stations, filter} = this.props;

        return stations.filter(i => i.category === filter).map((station, index) => {
            return (
                <li className={index % 2 === 0 ? 'timeline-inverted' : ''} key={index}>
                    <div className="timeline-badge">
                        {station.id}
                    </div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <div className="timeline-title">{station.label_th}</div>
                            <div className="timeline-title">{station.label_en}</div>
                        </div>
                    </div>
                </li>
            );
        });
    }
}