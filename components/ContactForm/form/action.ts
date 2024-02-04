"use server"

import { FormSchema } from "./schema";

export async function submitForm(form: FormSchema): Promise<boolean> {
    try {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + process.env.MAILER_SEND_API_KEY);

        let body = JSON.stringify({
            "from": {
                "email": "messaging@devpromedia.com"
            },
            "to": [
                {
                    "email": "gpiccirillo@devpromedia.com"
                }
            ],
            "subject": "New message from Gianluca Portfolio",
            "variables": [
                {
                    "email": "gpiccirillo@devpromedia.com",
                    "substitutions": [
                        {
                            "var": "email",
                            "value": form.email
                        },
                        {
                            "var": "name",
                            "value": form.name
                        },
                        {
                            "var": "subject",
                            "value": form.subject
                        },
                        {
                            "var": "message",
                            "value": form.message
                        },
                        {
                            "var": "IP",
                            "value": ""
                        },
                        {
                            "var": "hostname",
                            "value": ""
                        },
                        {
                            "var": "location",
                            "value": ""
                        },
                        {
                            "var": "loc",
                            "value": ""
                        },
                        {
                            "var": "org",
                            "value": ""
                        },
                        {
                            "var": "postal",
                            "value": ""
                        },
                        {
                            "var": "timezone",
                            "value": ""
                        },
                    ]
                }
            ],
            "template_id": "jpzkmgqnyp2g059v"
        });

        await fetch("https://api.mailersend.com/v1/email", {
            method: 'POST',
            headers: myHeaders,
            body,
            redirect: 'follow'
        })
        return true
    } catch (e) {
        return false
    }
}
