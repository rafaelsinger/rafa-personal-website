import React, { useState } from 'react'
import emailjs, {init} from 'emailjs-com'
import { Formik, Form, Field, ErrorMessage, FormikProps } from 'formik';
import * as Yup from 'yup';

const Contact = () => {

    init(process.env.REACT_APP_EMAIL_JS_USER_ID!);
    const serviceId = process.env.REACT_APP_EMAIL_JS_SERVICE_ID!;
    const templateId = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID!;
    // const submit = () => {
    //     if (name && email && message) {
    //         const serviceId = process.env.REACT_APP_EMAIL_JS_SERVICE_ID!;
    //         const templateId = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID!;
    //         const templateParams = {
    //             name,
    //             email,
    //             message
    //         };

    //         emailjs.send(serviceId, templateId, templateParams)
    //             .then(response => console.log(response))
    //             .then(error => console.log(error));
    
    //         setName('');
    //         setEmail('');
    //         setMessage('');
    //         setEmailSent(true);
    //     } else {
    //         alert('Please fill in all fields.');
    //     }
    // }


    //aw !props.errors.email && props.touched.email

    return (
        // <div className='contact-container'>
        //     <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        //     <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} />
        //     <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
        //     <button onClick={submit}>Send Message</button>
        //     <span className={emailSent ? 'visible' : ''}>Thank you for your message, we will be in touch in no time!</span>
        // </div>
        <Formik 
            initialValues={{name: '', email: '', message: ''}}
            validationSchema={Yup.object({
                name: Yup.string().required('Required'),
                email: Yup.string()
                    .email('Invalid email address.')
                    .required('Required.'),
                message: Yup.string().required('Required.')    
                    
            })}
            onSubmit={(values, actions) => {
                const name = values.name;
                const email = values.email;
                const message = values.message;
                const templateParams = {
                    email,
                    name,
                    message
                };

    
                emailjs.send(serviceId, templateId, templateParams)
                    .then(() => {
                        alert('Your message was sent successfully!');
                        actions.resetForm();
                    })
                    .then(error => console.log(error));
            }}
        >
        {(props: FormikProps<any>) => (
            <Form>
                <div className='contact-container'>
                    <div className='contact-field'>
                        <label>Name</label>
                        <Field name='name' type='text' placeholder='Name' />
                        <ErrorMessage name='name' component='div'>
                            {(msg) => 
                                <div className='contact-error'>
                                    {msg}
                                </div>
                            }
                        </ErrorMessage>
                    </div>
                    <div className='contact-field'>
                        <label>Email Address</label>
                        <Field name='email' type='email' placeholder='Email Address'/>
                        <ErrorMessage name='email' component='div'>
                            {(msg) => 
                                <div className='contact-error'>
                                    {msg}
                                </div>
                            }
                        </ErrorMessage>
                    </div>
                    <div className='contact-field'>
                        <label>Message</label>
                        <Field as='textarea' name='message' type='textarea' placeholder='Message' className='textarea-input' />
                        <ErrorMessage name='message' component='div'>
                            {(msg) => 
                                <div className='contact-error'>
                                    {msg}
                                </div>
                            }
                        </ErrorMessage>
                    </div>
                <button type='submit' className={`contact-submit ${props.dirty && props.isValid ? 'enabled' : 
                'disabled'}`} disabled={!(props.dirty && props.isValid)} >Submit</button>                      
                </div>

            </Form>
        )}
    </Formik>

    );
};

export default Contact;