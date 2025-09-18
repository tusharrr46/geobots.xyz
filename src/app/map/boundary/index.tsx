// App imports
import { Fill } from './fill';
import { Lines } from './lines';
import { Eraser } from './eraser';

export const Boundary = ({ id, boundary }: any) => {
  if (!boundary) return <></>;

  return (
    <>
      <Lines id={id} boundary={boundary}/>
      <Eraser id={id} boundary={boundary}/>
      <Fill id={id} boundary={boundary}/>
    </>
  )
}

Boundary.displayName="Boundary";