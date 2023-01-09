import '../css/Footer.css'

const Footer = () => {
    return(
        <>
            <footer className='bg-warning'>
                <div className="container">
                    <p className='text-light'>Copyright © 2022 <span>Alan Escobar</span>, todos los derechos reservados.</p>
                    <div className="redes">
                        <a href="https://www.instagram.com/alaan.elian/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://github.com/alanelian/Ecommerce" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/alan-escobar-b3392a228/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;