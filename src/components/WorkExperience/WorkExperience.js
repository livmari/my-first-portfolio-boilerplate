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
      <h4>{jobTitle}</h4>

      <p>
        {company} &#124; {startYear} &#45; {endYear} &#124; {location}{' '}
      </p>

      <p>{summary}</p>
    </div>
  )
}

export default WorkExperience
