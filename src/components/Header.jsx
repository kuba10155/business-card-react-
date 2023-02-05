import React from "react"

export default function Header() {
  return (
    <header>
      <img class="header--profile-img" src="./images/my-image.jpg" />
      <h1 className="header--name">Jakub Zborowski</h1>
      <h3 className="header--job">Frontend Developer</h3>
      <h6 className="header--website"><a href="https://portfolio-24.netlify.app" target="_blank">jakubzborowski.website</a></h6>
      <a href="mailto:jakub.zborowski24@gmail.com" className="header--btn email-btn"><i className="header--icon fa-solid fa-envelope"></i> Email</a>
      <a href="https://www.linkedin.com/in/jakub-zborowski-189957234/" className="header--btn linkedin-btn" target="_blank"><i className="header--icon fa-brands fa-linkedin"></i> LinkedIn</a>
    </header>
  )
}
