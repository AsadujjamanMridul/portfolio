import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faServer, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import muhurto from '../../../images/screenshots/muhurto-landing.png'
import humayunnama from '../../../images/screenshots/humayunnama-landing.png'
import give from '../../../images/screenshots/give-landing.png'

let slides = [

    <div>
        <div className="">
            <img src={give} alt="" className='w-100' style={{ maxHeight: '400px', objectFit: 'cover', objectPosition: '0% 0%' }} />
        </div>
        <div className="bg-1 p-md-5 p-3">
            <h3 className='color-4 m-0 p-0 pb-1 featured-title'>Give - Donate For a Good Cause (MERN)</h3>

            <a href="https://give-01.firebaseapp.com" target="_blank" rel='noreferrer' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Live Site">
                <FontAwesomeIcon icon={faExternalLinkAlt} className='details-social my-3 me-3' />
            </a>
            <a href="https://github.com/AsadujjamanMridul/give" target="_blank" rel='noreferrer' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Code">
                <FontAwesomeIcon icon={faGithub} className='details-social my-3 me-3' />
            </a>
            <a href="https://github.com/AsadujjamanMridul/give-server" target="_blank" rel='noreferrer' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Server Side">
                <FontAwesomeIcon icon={faServer} className='small-screen-social my-3' />
            </a>

            <p className='color-3 features m-0 p-0 py-3'>Features:</p>
            <p className='color-5 features'>
                • Registration with Firebase Auth (Google Sign in) <br />
                • Registered users can apply for being volunteer or donation <br />
                • Facility for donating custom items in different category and campaigns <br />
                • Admin will review every applicants considering their potential <br />
                • Recent successful donation will be posted in Timeline of Genorisity <br />
            </p>
        </div>
    </div>

    ,

    <div>
        <div className="">
            <img src={muhurto} alt="" className='w-100' style={{ maxHeight: '400px', objectFit: 'cover', objectPosition: '0% 0%' }} />
        </div>
        <div className="bg-1 p-md-5 p-3">
            <h3 className='color-4 m-0 p-0 pb-1 featured-title'>Muhurto - Wedding Photography Service (MERN)</h3>
            <a href="https://muhurto-photography.firebaseapp.com" target="_blank" rel='noreferrer' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Live Site">
                <FontAwesomeIcon icon={faExternalLinkAlt} className='details-social my-3 me-3' />
            </a>
            <a href="https://github.com/AsadujjamanMridul/muhurto-client" target="_blank" rel='noreferrer' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Client Side">
                <FontAwesomeIcon icon={faGithub} className='details-social my-3 me-3' />
            </a>
            <a href="https://github.com/AsadujjamanMridul/muhurto-server" target="_blank" rel='noreferrer' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Server Side">
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

            <a href="https://humayun-nama.firebaseapp.com/" target="_blank" rel='noreferrer' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Live Site">
                <FontAwesomeIcon icon={faExternalLinkAlt} className='details-social my-3 me-3' />
            </a>
            <a href="https://github.com/AsadujjamanMridul/humayunnama-client" target="_blank" rel='noreferrer' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Client Side">
                <FontAwesomeIcon icon={faGithub} className='details-social my-3 me-3' />
            </a>
            <a href="https://github.com/AsadujjamanMridul/humayunnama-server" target="_blank" rel='noreferrer' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Server Side">
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




];

export default slides;