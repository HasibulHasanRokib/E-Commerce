
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className="bg-white footer-section">
       <div className="footer-top">
        
        <div><img className='w-64' src="https://skybuybd.com/_next/static/media/logo.2d8160b9.svg" alt="" /></div>
        
        <div className='flex gap-2'>
            <img className="w-10" src="https://skybuybd.com/_next/static/media/facebook_round.4a8ef585.svg" alt="" />
            <img className="w-10" src="https://skybuybd.com/_next/static/media/instagram.4390992e.svg" alt="" />
            <img className="w-10" src="https://skybuybd.com/_next/static/media/youtube.9e128cb7.svg" alt="" />
            <img className="w-10" src="https://skybuybd.com/_next/static/media/linkedin.313fbeb4.svg" alt="" />
            <img className="w-10" src="https://skybuybd.com/_next/static/media/tiktok.6049d9a4.svg" alt="" />
        </div>
        <p className='font-semibold text-xl'>Explore Sky Brands... Think to the Sky.</p>
        <div className='flex md:gap-10 gap-2 justify-center items-center'>
            <img className='md:w-48 w-24' src="https://skybuybd.com/_next/static/media/logo.2d8160b9.svg" alt="" />
            <img className='md:w-48 w-24' src="https://skybuybd.com/_next/static/media/sky-track.68950dce.png" alt="" />
            <img className='md:w-48 w-24' src="https://skybuybd.com/_next/static/media/sky-one.b39dc181.png" alt="" />
        </div>
        <div className='my-5'>
            <h2 className='text-center font-bold text-2xl my-5'>Our Partners</h2>
            <section className='md:flex md:gap-4 grid grid-cols-2 gap-2'>
                <div className='footer-card'>
                    <h4 className='font-bold' >IT Partner</h4>
                    <img src="https://skybuybd.com/_next/static/media/becommerce-logo.fd56f3c3.png" alt="" />
                </div>
                <div className='footer-card'>
                    <h4 className='font-bold'>Logistic Partner</h4>
                    <img src="https://skybuybd.com/_next/static/media/steadfast.3fbf82ed.svg" alt="" />
                </div>
                <div className='footer-card'>
                    <h4 className='font-bold'>Media Partner</h4>
                    <img src="https://skybuybd.com/_next/static/media/mavic-logo.c1b4614a.jpg" alt="" />
                </div>
                <div className='footer-card'>
                    <h4 className='font-bold'>Member of</h4>
                    <img src="https://skybuybd.com/_next/static/media/ecab-logo.bb86e3a5.png" alt="" />
                </div>
            </section>
        </div>
          
       </div> 
       <div className="footer-bottom">
        <section className='flex flex-col justify-start items-start gap-1'>
            <h2 className='font-bold'>CONTACT</h2>
            <p>House#42, Road-3/A, Dhanmondi, Dhaka-1209, Bangladesh</p>
            <p>Email: skybuybd@gmail.com</p>
            <p>Phone: 09613828606</p>
        </section>
        <section className='flex flex-col justify-center items-start gap-1'>
            <h2 className='font-bold'>CUSTOMER</h2>
            <p>Account</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shipping Charge</p>
            <p>Retail Purchase</p>
            <p>FAQ</p>
        </section>
        <section className='flex flex-col justify-center items-start gap-1'>
            <h2 className='font-bold'>INFORMATION</h2>
            <p>About us</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Returns & Refund</p>
            <p>Terms & Conditions</p>
            <p>Secured Payment</p>
        </section>
        <section>
            <h2 className='font-bold '>MOBILE APPS</h2>
            <img style={{width:"8rem",margin:"1rem 0 "}} src="https://skybuybd.com/_next/static/media/playstore.19e43ec9.png" alt="" />
            <img style={{width:"8rem",margin:"1rem 0"}}  src="https://skybuybd.com/_next/static/media/applestore.a0492474.png" alt="" />
        </section>
       </div>
       <article style={{backgroundColor:"#e4e4e7",borderTop:"1px solid #999"}}>
        <h2 className='text-center py-4 '>© 2023 Skybuybd - All Rights Reserved</h2>
       </article>
      </div>
    </>
  )
}

export default Footer
