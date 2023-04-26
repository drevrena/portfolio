import React, { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import SectionTitle from "../Cards/SectionTitle";

function ContactMe() {
    const form = useRef();
    const successRef = useRef();
    const errorRef = useRef()
    const [mailStatus, setMailStatus] = useState(null)

    useEffect(()=> {
        if(mailStatus !== null) {
            setTimeout(() => {
                mailStatus ? successRef.current.style.opacity = 0 : errorRef.current.style.opacity = 0
            }, 1000)
            setTimeout(() => {
                //Restore opacity in case user will send more messages
                mailStatus ? successRef.current.style.opacity = 1 : errorRef.current.style.opacity = 1
                setMailStatus(null)
            }, 2000)
        }
    }, [mailStatus])

    function handleSubmit(event) {
        event.preventDefault()

        emailjs.sendForm('service_bf0h0vl','template_2d8mf4f', form.current, 'ZOY-pyIhor1XV-UXU')
            .then((response) => {
                setMailStatus(true)
            }, (err) => {
                setMailStatus(false)
            });
    }

    return <section id="contact" className="relative flex flex-col items-center lg:pt16 lg:px-8 py-32 container">
        <div className="mx-auto lg:absolute lg:-rotate-90 lg:-left-24 lg:top-64">
            <SectionTitle title="Contact Me"/>
        </div>
        <div ref={successRef} style={{ display: mailStatus ? "block" : "none", opacity: mailStatus ? "1" : "0"}} className="hidden alert alert-success shadow-lg transition-all duration-1000">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Your message has been sent!</span>
            </div>
        </div>
        <div ref={errorRef} style={{ display: mailStatus === null ? "none" : !mailStatus ? "block" : "none" }} className="hidden alert alert-error shadow-lg duration-1000">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Error! Something went wrong!</span>
            </div>
        </div>
        <form className="flex flex-col w-full gap-4 my-4" ref={form} onSubmit={handleSubmit}>
            <input type="text" required name="from_name" placeholder="Your Name" className="bg-slate-900 input input-bordered input-primary w-full rounded-md" />
            <input type="text" required name="from_mail" placeholder="Your Email" className="bg-slate-900 input input-bordered input-primary w-full rounded-md" />
            <textarea required className="bg-slate-900 textarea textarea-primary h-64 rounded-md" name="message" placeholder="Your message..."></textarea>
            <button className="btn btn-secondary mx-auto rounded-lg px-8 mt-4">Send</button>
        </form>
    </section>

}

export default ContactMe