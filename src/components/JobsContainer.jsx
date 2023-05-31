import { useEffect } from "react"
import { getJobs} from "../features/allJobs/AllJobsSlice"
import { useDispatch, useSelector } from "react-redux"
import { getJobsFromLocalStorage } from "../utils/localStorage/jobsLocalStorage"
import Job from "./Job"
import Wrapper from '../assets/wrappers/JobsContainer';
import Loading from "./Loading"
import PageBtnContainer from "./PageBtnContainer"

// import {store} from '../store'

const JobsContainer = () => {

  const dispatch = useDispatch()
  const {isLoading, totalJobs, numOfPages, jobs, filteredJobs, search, searchStatus, searchType, sort, page} = useSelector((store) => store.allJobs)

  useEffect(() =>{
  
    dispatch(getJobs())
    
  },[search, searchStatus, searchType, sort, page])

  if (isLoading) {

    return (

      <Loading center />

    )
  }


  if (filteredJobs.length === 0) {

    return (

      <Wrapper>

        <h2>No jobs to display...</h2>

      </Wrapper>
    )
  }




  return (

    <Wrapper>

      <h5>{totalJobs} job{totalJobs > 1 && 's'} found</h5>

      <div className="jobs">

        {filteredJobs.map((job) => {

          return <Job key={job._id} {...job} />


        })}
      </div>

      {numOfPages > 1 && <PageBtnContainer />}


    </Wrapper>
    
    )
}
export default JobsContainer