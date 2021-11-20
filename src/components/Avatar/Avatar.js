const Avatar = ({ imageSrc }) => {
  return (
    <img
      src={imageSrc}
      alt={'Hello world, this is me!'}
      className={
        'h-96 md:h-60 w-60 object-center object-cover rounded-full ' +
        'border-8 border-transparent ring-1 ring-primary-400'
      }
    />
  )
}

export default Avatar
