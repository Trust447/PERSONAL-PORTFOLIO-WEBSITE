import React from 'react'

const Contact = () => {
  return (
    <div id='Contact' className='contact'>
        <div className='bg-circle1'></div>
        <div className='contact-container'>
            <h1><span>INTRESTED IN WORKING WITH</span> ME<span>?</span></h1>

            <div className='contact-form'>
                <form className='form' action="">
                    <input name="title" type="text" placeholder='How can i help you?' />
                    <input name='email' type="text" placeholder='Your email address' />
                    <textarea name="message" id="" placeholder='Type your message...'></textarea>
                    <button>send email</button>
                </form>
            <div className='alternative-contact'>
                <h2>OR</h2>
                <h2><span>Use Social Media</span> Link<span>s</span></h2>
            </div>
            </div>
        </div>
        <div className='bg-circle2'></div>
    </div>
  )
}

export default Contact