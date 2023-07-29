import './SingUp.css'



const SignUp = () => {
  return (
    <div>
      <section className='signUp'>
      </section>

        <div className='signUp-img'>
            <img src="https://skybuybd.com/_next/static/media/login_icon.849dedcc.svg" alt="" />
        </div>
        <form className='flex flex-col justify-center items-center md:mt-15 md:p-5'>
        <h2>এখানে আপনার মোবাইল নাম্বার দিয়ে লগিন করুন</h2>
        <span className='flex flex-col justify-center items-start my-10'>
        <label>মোবাইল নাম্বার</label>
        <input className='phn-input' type="number" placeholder='01******'/>
        <button onClick={()=>alert('Thank you')} className='submit-btn'>সাবমিট করুন</button>
        </span>
        </form>

    </div>
  )
}

export default SignUp
