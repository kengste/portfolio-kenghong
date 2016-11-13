import React from 'react';
import Chip from 'material-ui/Chip';

export default class Skills extends React.Component {

  constructor(props) {
    super(props);
    this.state = {chipData: [
      {key: 0, label: 'Ruby on Rails'},
      {key: 1, label: 'jQuery'},
      {key: 2, label: 'Semantic UI'},
      {key: 3, label: 'PostgreSQL'},
    ]};
    this.styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };
  }

  renderChip(data) {
    return (
      <Chip
        key={data.key}
        style={this.styles.chip}
      >
        {data.label}
      </Chip>
    );
  }

  render() {
    return (
      <div style={this.styles.wrapper}>
        {this.state.chipData.map(this.renderChip, this)}
      </div>
    );
  }
}
