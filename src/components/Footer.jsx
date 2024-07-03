import './Footer.css'

function Footer() {
  const CHALLENGE_LINK = "https://www.frontendmentor.io?ref=challenge"
  const AUTHOR_LINK = "https://github.com/GracilianoOG"
  
  return (
    <footer className="attribution">
      <p className="attribution__content">
        <span className="attribution__challenger">Challenge by <a className="link" href={CHALLENGE_LINK}>Frontend Mentor</a>. </span>
        <span className="attribution__coder">Coded by <a className="link" href={AUTHOR_LINK}>Gabriel</a>.</span>
      </p>
    </footer>
  )
}

export default Footer
