import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes.js'

const style = {
  position: 'absolute',
  backgroundColor: 'white',
  cursor: 'pointer',
}
export const Box_adv = ({ id, left, top, stickerId, hideSourceOnDrag, children }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.BOX_ADV,
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top],
  )
  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />
  }
  return (
    <div
      className="box"
      ref={drag}
      style={{ ...style, left, top }}
      data-testid="box"
    >
      {children}
    </div>
  )
}
