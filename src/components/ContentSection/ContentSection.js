const ContentSection = ({ heading, children, ...props }) => {
  return (
    <section className={'px-6'} {...props}>
      <h3 className={'mb-4'}>{heading}</h3>

      <div>{children}</div>
    </section>
  )
}

export default ContentSection
