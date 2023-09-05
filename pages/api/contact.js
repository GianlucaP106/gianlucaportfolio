export default async function handler(req, res) {
    const { name, email, subject, message } = req.query;
    const { ip, hostname, location, loc, org, postal, timezone} = req.query;

    if (name && email && subject && message) {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + process.env.MAILER_SEND_API_KEY);

        let raw = JSON.stringify({
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
                            "value": email
                        },
                        {
                            "var": "name",
                            "value": name
                        },
                        {
                            "var": "subject",
                            "value": subject
                        },
                        {
                            "var": "message",
                            "value": message
                        },
                        {
                            "var": "IP",
                            "value": ip
                        },
                        {
                            "var": "hostname",
                            "value": hostname
                        },
                        {
                            "var": "location",
                            "value": location
                        },
                        {
                            "var": "loc",
                            "value": loc
                        },
                        {
                            "var": "org",
                            "value": org
                        },
                        {
                            "var": "postal",
                            "value": postal
                        },
                        {
                            "var": "timezone",
                            "value": timezone
                        },
                    ]
                }
            ],
            "template_id": "jpzkmgqnyp2g059v"
        });

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://api.mailersend.com/v1/email", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
                res.status(200).end();
            })
            .catch(error => res.status(400).end());
        return;
    }
    res.status(400).end();
}