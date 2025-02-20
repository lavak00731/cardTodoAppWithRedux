import { useId } from 'react';
import { useSelector } from 'react-redux';
import RootState from "../Interfaces/RootState";
import TagType from '../Interfaces/TagType';

export const UtilityBar = () => {
  const id = useId();
  const tags = useSelector((store: RootState) => store.tags.items as TagType[])
  return (
    <>
       <div className="bg-green-800 rounded-lg p-3 flex flex-row justify-evenly content-center justify-items-center">
            <button type="button" className="bg-white text-black font-semibold p-3 rounded-full border-2 border-black hover:bg-black hover:text-white focus-within:bg-black focus-within:text-white hover:border-white focus-within:border-white">Create Task</button>
            <div className="filters-wrapper p-3 bg-white text-black font-semibold border-2 rounded border-black flex gap-3 items-center">
                <label htmlFor={id+'filter'} className="font-bold">Filter by Tags</label>
                <select name="filter" id={id+'filter'} className='border-2 border-green-700 p-1 rounded-lg bg-white'>
                    <option value="">Pick a Tag</option>
                    {tags ? tags.map((tag) => (
                        <option key={tag.id} value={tag.name}>{tag.name}</option>
                    )) : null}
                </select>
                <button type="button" className="py-1 px-4 rounded-lg bg-black text-white">Filter</button>
            </div>
       </div> 
    </>
  )
}
