# Cloudflare Worker
This worker aims to achieve the following:

* Server worker that returns identity information for the authenticated user
* Return HTTP response body containing `${EMAIL} authenticated at ${TIMESTAMP} from ${COUNTRY}`
* `${COUNTRY}` should be an HTML link that when clicked navigates to `tunnel.yourwebsite.com/secure/${COUNTRY}` and displays the appropriate country flag.