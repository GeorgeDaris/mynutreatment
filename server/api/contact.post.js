import nodemailer from 'nodemailer'
import validator from 'validator'

const config = useRuntimeConfig()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: config.MAILHOST,
    port: config.MAILPORT,
    auth: {
        user: config.MAILUSER,
        pass: config.MAILPASSWORD
    }
})

export default defineEventHandler(async (event, response) => {
    try {

        const body = await readBody(event) 

        await isValid(body).then(async (data) => {
            const mail = await transporter.sendMail({
                from: `"${data.name} ${data.lastName}" <${data.email}>`,
                // to: config.CONTACTMAIL,
                to: config.MAILUSER,
                subject: `${data.subject}: ${data.name} ${data.lastName} `,
                text: data.message,
                html: `<strong>Όνομα</strong>: ${data.name} 
                <br> 
                <strong>Επώνυμο</strong>: ${data.lastName} 
                <br> 
                <strong>Email</strong>: ${data.email} 
                ${data.phoneNumber ? `<br> <strong>Τηλέφωνο</strong>: ${data.phoneNumber} ` : ''}
                <br><br>
                 ${data.message}`
            })
    
            console.log('Message sent %s', mail.messageId)
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(mail));
            return Promise.resolve()
        })
        .catch((errors) => {
            return Promise.reject(errors)
        })


        // console.log(mail)
        
        return `sent! ${body.message} ${config.CONTACTMAIL}`
    }
    catch (error) {
        sendError(event, createError({statusCode: 400, statusMessage: error.toString()}))
    }
})

async function isValid(body) {
    const errors = []

    if(validator.isEmpty(body.email) || '') errors.push({
        field: 'email',
        error: 'Field is required.'
    })
    if(validator.isEmpty(body.name) || '') errors.push({
        field: 'name',
        error: 'Field is required.'
    })
    if(validator.isEmpty(body.lastName) || '') errors.push({
        field: 'last name',
        error: 'Field is required.'
    })
    // if(validator.isEmpty(body.phoneNumber) || '') errors.push({
    //     field: 'last name',
    //     error: 'Field is required.'
    // })
    // if(validator.isEmpty(body.subject) || '') errors.push({
    //     field: 'subject',
    //     error: 'Field is required.'
    // })
    if(validator.isEmpty(body.message) || '') errors.push({
        field: 'message',
        error: 'Field is required.'
    })
    if(!validator.isEmail(body.email) || '') errors.push({
        field: 'email',
        error: 'Field should be a valid email'
    })

    if(errors.length > 0) {
        errors.forEach((error) => {
            return Promise.reject(error.field, error.error)
        })
        // return Promise.reject(errors);
    } 
    else {
        return Promise.resolve({
            email: validator.normalizeEmail(body.email),
            subject: validator.escape(body.subject),
            name: validator.escape(body.name),
            lastName: validator.escape(body.lastName),
            message: validator.escape(body.message),
            phoneNumber: validator.escape(body.phoneNumber)
        })
    }
}