import { FilterPanel } from 'components/FilterPanel';
import { JobList } from 'components/JobList';
import { TheHeader } from 'components/TheHeader';

import jobsData from './mock/data.json'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { addJobs } from 'store/jobs/jobs-actions';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addJobs(jobsData))
  })

  return (
    <>
     <TheHeader />
     <div className='container'>
      <FilterPanel />
      <JobList jobsData={jobsData} />
     </div>
    </>
  );
}

export default App;
