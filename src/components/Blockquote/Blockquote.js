const Blockquote = ({ quote, cite }) => {
  return (
    <blockquote>
      <q>{quote}</q>

      <cite>&#8212; {cite}</cite>
    </blockquote>
  )
}

export default Blockquote
