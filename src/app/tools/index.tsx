// App imports
import { Search } from './search';
import { Location } from './location';
import { CustomCursor } from './cursor';

export const Tools = () => {
  return (
    <>
      <Search/>
      <Location/>
      <CustomCursor/>
    </>
  )
}

Tools.displayName="Tools";