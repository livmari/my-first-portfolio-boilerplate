const Education = ({ degreeName, organisation, graduationYear }) => {
  return (
    <div>
      <h4>{degreeName}</h4>

      <p>{organisation}</p>

      <p>{graduationYear}</p>
    </div>
  )
}

export default Education
