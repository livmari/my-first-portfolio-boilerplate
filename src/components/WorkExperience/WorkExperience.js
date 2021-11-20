const WorkExperience = ({
  jobTitle,
  company,
  startYear,
  endYear = 'Present',
  location,
  summary,
}) => {
  return (
    <div>
      <h4 className={'font-medium'}>{jobTitle}</h4>

      <p className={'text-primary-700'}>
        {company} &#124; {startYear} &#45; {endYear} &#124; {location}{' '}
      </p>

      <small className={'text-primary-800'}>{summary}</small>
    </div>
  )
}

export default WorkExperience
