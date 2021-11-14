import { Avatar } from '../index'

const PageHeader = () => {
  return (
    <header>
      <section>
        <Avatar imageSrc={'/livmari.png'} />

        <span>
          <h1>Firstname Lastname</h1>

          <h3>Job title</h3>
        </span>
      </section>

      <section>
        <h2>Hello world,</h2>

        <p>
          I'm a ... Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dignissimos doloremque hic praesentium quidem sed! Aliquid autem
          consectetur, dignissimos, doloribus ea earum hic id ipsa iure non
          nulla odio sed, sint!
        </p>
      </section>
    </header>
  )
}

export default PageHeader
