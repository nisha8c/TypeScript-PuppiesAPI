import { PuppyData } from '../types/types';

interface IPuppiesComponentProps {
  data: PuppyData
}

const Puppies = ({data}: IPuppiesComponentProps) => {
  return (
    <>
      <h1>List of Puppies</h1>
      <div>{data.name}</div>
    </>
  )
}

export default Puppies