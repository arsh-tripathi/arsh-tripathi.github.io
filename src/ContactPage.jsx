import styles from './PageStyling.module.css'
import formStyles from './ContactForm.module.css'
import Row from "./Row.jsx";
import links from "./data/Links.json"
import React, {useRef, useState} from "react";
import emailjs from "@emailjs/browser"

const ContactPage = React.forwardRef( (props, ref) => {
    const form = useRef(null);
    const [formData, setFormData] =
        useState(
            {
                name: "DEFAULT",
                time: "DEFAULT",
                message: "DEFAULT",
                email: "DEFAULT",
                title: "Message from portfolio"
            });
    const [isHovered, setHovered] = useState(false);
    const handleWheel = (event) => {
        if (!isHovered) return
        const target = event.currentTarget; // The scrollable div

        const atTop = target.scrollTop === 0;
        const atBottom = target.scrollTop + target.clientHeight >= target.scrollHeight;
        if (!((atTop && event.deltaY < 0) || (atBottom && event.deltaY > 0))) {
            event.stopPropagation();
        }
    }
    const onEnter = () => {
        setHovered(true);
    }
    const onLeave = () => {
        setHovered(false)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };
    const sendEmail = (e) => {
        e.preventDefault()
        const now = new Date();
        formData.time = now.toLocaleString("en-US", { timeZone: "America/New_York" });
        console.log("Sending info: ", formData)
        emailjs.send('service_wx7if5q', 'template_7bzxnlb',  formData, {
            publicKey: "pdbnV-pUj465auy4n",
        }).then(
            () => {
                console.log('SUCCESS')
            },
            (error) => {
                console.log('FAILED: ' + error.text);
            }
        )
    }
    const width = 70
    const space = Math.floor(width / links.length)
    return (
        <div ref={ref} className={styles.page}>
            <div className={formStyles.container}>
                <h2 className={styles.center}>Reach me here</h2>
                <div className={styles.center}>
                    <Row gap={String(space) + "vw"}>
                        {links.map((link) => (
                            <h2><a href={link.link} target="_blank">{link.name}</a></h2>
                        ))}
                    </Row>
                </div>
                <h2 className={styles.center}>Or send a message</h2>
                <form ref={form} onSubmit={sendEmail} className={formStyles.form}>
                    <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required={true}/>
                    <input type="email" name="email" placeholder={"Your Email"} onChange={handleChange} required={true}/>
                    <textarea name="message" placeholder={"Your Messsage"}
                              onMouseEnter={onEnter} onMouseLeave={onLeave} onWheel={handleWheel}
                              onChange={handleChange} required={true}/>
                    <button type="submit" >Send</button>
                </form>
            </div>
        </div>
    )
}
)

// service_wx7if5q
// template_7bzxnlb

export default ContactPage