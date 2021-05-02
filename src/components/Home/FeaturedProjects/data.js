import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faCodepen, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faServer, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import muhurto from '../../../images/screenshots/muhurto-landing.png'
import humayunnama from '../../../images/screenshots/humayunnama-landing.png'
import leagueFinder from '../../../images/screenshots/league-finder-landing.png'

let slides = [
    <div>
        <div className="">
            <img src={muhurto} alt="" className='w-100' style={{ maxHeight: '400px', objectFit: 'cover', objectPosition: '0% 0%' }} />
        </div>
        <div className="bg-1 p-md-5 p-3">
            <h3 className='color-4 m-0 p-0 pb-1 featured-title'>Muhurto - Wedding Photography Service (MERN)</h3>
            <a href="https://muhurto-photography.firebaseapp.com" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Live Site">
                <FontAwesomeIcon icon={faExternalLinkAlt} className='details-social my-3 me-3' />
            </a>
            <a href="https://github.com/AsadujjamanMridul/muhurto-client" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Client Side">
                <FontAwesomeIcon icon={faGithub} className='details-social my-3 me-3' />
            </a>
            <a href="https://github.com/AsadujjamanMridul/muhurto-server" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Server Side">
                <FontAwesomeIcon icon={faServer} className='details-social my-3 me-3' />
            </a>
            <p className='color-3 features m-0 p-0 py-3'>Features:</p>
            <p className='color-5 features'>
                • Full responsive website for a wedding photography team <br />
        • Authorized user can order any services, review them and see details about all bookings in the dashboard <br />
        • Admin can read, update or delete services, admin and reviews from admin panel <br />
        • Firebase Auth is used for authenticate user and Stripe is used for the payment gateway
        </p>
        </div>
    </div>
    ,

    <div>
        <div className="">
            <img src={humayunnama} alt="" className='w-100' style={{ maxHeight: '400px', objectFit: 'cover', objectPosition: '0% 0%' }} />
        </div>
        <div className="bg-1 p-md-5 p-3">
            <h3 className='color-4 m-0 p-0 pb-1 featured-title'>Humayunnama - Online Book Store (MERN)</h3>

            <a href="https://humayun-nama.firebaseapp.com/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Live Site">
                <FontAwesomeIcon icon={faExternalLinkAlt} className='details-social my-3 me-3' />
            </a>
            <a href="https://github.com/AsadujjamanMridul/humayunnama-client" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Client Side">
                <FontAwesomeIcon icon={faGithub} className='details-social my-3 me-3' />
            </a>
            <a href="https://github.com/AsadujjamanMridul/humayunnama-server" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Server Side">
                <FontAwesomeIcon icon={faServer} className='details-social my-3 me-3' />
            </a>
            <p className='color-3 features m-0 p-0 py-3'>Features:</p>
            <p className='color-5 features'>
                • Responsive website for online book store based on books written by Humayun Ahmed<br />
            • Authorized user can checkout any book and see them in the order dashboard <br />
            • Admin panel is for managing inventory and adding new books to the database <br />
            • Before any checkout user have to sign in with their google account (used Firebase Auth and Private Route)
        </p>
        </div>
    </div>
    ,

    <div>
        <div className="">
            <img src={leagueFinder} alt="" className='w-100' style={{ maxHeight: '400px', objectFit: 'cover', objectPosition: '0% 0%' }} />
        </div>
        <div className="bg-1 p-md-5 p-3">
            <h3 className='color-4 m-0 p-0 pb-1 featured-title'>League Finder (API)</h3>

            <a href="https://league-finder.netlify.app/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Live Site">
                <FontAwesomeIcon icon={faExternalLinkAlt} className='details-social my-3 me-3' />
            </a>
            <a href="https://github.com/AsadujjamanMridul/league-finder" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Code">
                <FontAwesomeIcon icon={faGithub} className='details-social my-3 me-3' />
            </a>

            <p className='color-3 features m-0 p-0 py-3'>Features:</p>
            <p className='color-5 features'>
            • This react project has been created using TheSportsDB Api <br />
            • Full responsive website for getting details about any sports league available worldwide <br />
            • Viewers can see info like - league badge, date of foundation, country, sport type, and player's gender.
        </p>
        </div>
    </div>


];

export default slides;