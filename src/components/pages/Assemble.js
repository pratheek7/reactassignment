// import React from 'react';
// import '../../App.scss';

// export default function Assemble() {
//   return <h1 className='products'>PRODUCTS</h1>;
// }

import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useDrop } from "react-dnd";
import {
  Grid,
  Column,
  Button
} from '@carbon/react';
import Picture from "../Picture";
import { updateBoard } from '../../actions';
import "../../App.scss";

function Assemble() {
  const dispatch = useDispatch();
  let history = useHistory();
  const selectedComponentsIndex = useSelector((state) => state.components.data);
  const allComponents = useSelector((state) => state.components.completeSet);
  const selectedComponents = allComponents.filter((component) => selectedComponentsIndex.includes(component.id));
  const [board, setBoard] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = selectedComponents.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };

  const complete = () => {
    console.log(board);
    dispatch(updateBoard(board));
    history.push("/final"); 
    // this.props.history.push('/final')
  }

  return (
    <>
      <Grid
        fullWidth={true}
      >
        <Column
          key={1}
          lg={3}
        >
          <div className="Pictures">
            {selectedComponents.map((picture) => {
              return <Picture url={picture.img} id={picture.id} />;
            })}
          </div>
        </Column>
        <Column
          key={2}
        >
          <div className="Board" ref={drop}>
            {board.map((picture) => {
              return <Picture url={picture.img} id={picture.id} />;
            })}
          </div>
        </Column>
      </Grid>
      <Button className='components-btn' onClick={() => complete()}>Complete</Button>
    </>
  );
}

export default Assemble;

