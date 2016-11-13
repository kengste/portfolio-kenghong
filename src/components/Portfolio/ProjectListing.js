import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Project1 from './Project1/';
import Project4 from './Project4/';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'http://placehold.it/350x150',
    title: 'Project 1',
    subtitle: <Project1 />
  },
  {
    img: 'http://placehold.it/300.png/09f/fff',
    title: 'Project 2',
    subtitle: <Project1 />
  },
  {
    img: 'http://placehold.it/300.png/09f/fff',
    title: 'Project 3',
    subtitle: <Project1 />
  },
  {
    img: 'http://placehold.it/300.png/09f/fff',
    title: 'Project 4',
    subtitle: <Project4 />
  },
  {
    img: 'http://placehold.it/300.png/09f/fff',
    title: 'Project 5',
    subtitle: <Project1 />
  },
];

const Projects = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
      cols={3}
    >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.title + '1a3'}
          title={tile.subtitle}
          // subtitle={tile.subtitle}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default Projects;
