import React, { Component } from "react";
import {
  VictoryChart,
  VictoryZoomContainer,
  VictoryLine,
  VictoryTheme,
} from "victory";

class StatsOfResults extends React.Component {
  constructor() {
    super();
    this.state = {
      zoomDomain: { x: [new Date(1990, 1, 1), new Date(2009, 1, 1)] },
    };
  }

  handleZoom(domain) {
    this.setState({ zoomDomain: domain });
  }

  render() {
    return (
      <div>
        <VictoryChart
          theme={VictoryTheme.material}
          width={800}
          height={370}
          scale={{ x: "time" }}
          containerComponent={
            <VictoryZoomContainer
              zoomDimension='x'
              zoomDomain={this.state.zoomDomain}
              onZoomDomainChange={this.handleZoom.bind(this)}
            />
          }
        >
          <VictoryLine
            style={{
              data: { stroke: "tomato" },
            }}
            data={[
              { a: new Date(1982, 1, 1), b: 98 },
              { a: new Date(1987, 1, 1), b: 90 },
              { a: new Date(1993, 1, 1), b: 80 },
              { a: new Date(1997, 1, 1), b: 78 },
              { a: new Date(2001, 1, 1), b: 70 },
              { a: new Date(2005, 1, 1), b: 96 },
              { a: new Date(2011, 1, 1), b: 97 },
              { a: new Date(2015, 1, 1), b: 85 },
            ]}
            x='a'
            y='b'
          />
          <VictoryLine
            style={{
              data: { stroke: "teal" },
            }}
            data={[
              { a: new Date(1982, 1, 1), b: 91 },
              { a: new Date(1987, 1, 1), b: 70 },
              { a: new Date(1993, 1, 1), b: 87 },
              { a: new Date(1997, 1, 1), b: 72 },
              { a: new Date(2001, 1, 1), b: 66 },
              { a: new Date(2005, 1, 1), b: 85 },
              { a: new Date(2011, 1, 1), b: 76 },
              { a: new Date(2015, 1, 1), b: 85 },
            ]}
            x='a'
            y='b'
          />
        </VictoryChart>
      </div>
    );
  }
}

export default StatsOfResults;
