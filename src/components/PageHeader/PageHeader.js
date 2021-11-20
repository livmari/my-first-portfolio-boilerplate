import { Avatar } from '../index'

const PageHeader = () => {
  return (
    <header className={'py-12 px-6 grid gap-6 justify-items-center'}>
      <section
        className={
          'grid md:grid-cols-2 gap-6 md:gap-8 justify-items-center items-center'
        }
      >
        <Avatar imageSrc={'/livmari.png'} />

        <span className={'text-center md:text-left'}>
          <h1 className={'mb-4'}>
            Firstname
            <br />
            Lastname
          </h1>

          <h2>Job title</h2>
        </span>
      </section>
    </header>
  )
}

export default PageHeader
