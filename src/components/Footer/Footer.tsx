import './Footer.scss'

const Footer = () => {
  return (
    <footer>
        <section className='footer-container'>
          <div className='left_footer-container'>
            <p>@2024 Pablo Ruiz </p>
          </div>
          <div className='right_footer-container'>
            <h3 className='footer-h3'>Astronaut reference</h3>
            <p>LasquetiSpice, L. (2022) Animated astronaut character in space suit loop, Sketchfab. Available at: <a className='footer-a' target='blank' href="https://sketchfab.com/3d-models/animated-astronaut-character-in-space-suit-loop-8fe5c8d3365e4d87bb7bc253d53a64e1">Astronaut 3D model</a></p>
          </div>
        </section>

    </footer>
  )
}

export default Footer