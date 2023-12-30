import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectVisibleJobs } from 'store/jobs/jobs-selectors';
import { selectFilters } from 'store/filters/filters-selectors';

import { addFilter } from 'store/filters/filters-actions'; 

const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters)
  const jobs = useSelector((state) => selectVisibleJobs(state, currentFilters));

  const handlerAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className="job-list">
      {jobs.map((item) => (
        <JobPosition
          key={item.id}
          handlerAddFilter={handlerAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};

export { JobList };
