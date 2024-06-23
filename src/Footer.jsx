import './Footer.css'

function Footer() {
  const AUTHOR_LINK = "https://github.com/GracilianoOG"
  
  return (
    <footer>
      <p className="attribution">
        <span className="attribution__challenger">Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. </span>
        <span className="attribution__coder">Coded by <a href={AUTHOR_LINK}>Gabriel</a>.</span>
      </p>
    </footer>
  )
}

export default Footer
