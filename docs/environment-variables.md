# Environment Variables

This site uses several environment variables. These are set in `.env` in dev.
In prod they are set in `circle.yml`, deploy scripts, and in Circle CI's secrets
vault.

The environment variables are stored secretly by being encrypted in a private
repository with the help of `blackbox`. For the moment this approach is being
used only for the dev environment. You can read more documentation on the
workflow [here](https://github.com/redbadger/blackbox-secrets).

In order to update the `.env` file to the latest version use the command
`make update-secrets`. If you make your own changes to the `.env` that need to be
added to the project blackbox then use the command `make edit-secrets`. This will
open the decrypted `.env` in your terminal `EDITOR` for you to mage changes to
before encrypting it and pushing the the project blackbox for distribution.

* `ENVIRONMENT_NAME`

  A name used to make the stack unique. Prod's is `prod`. Staging's is `staging`.
  Mine is `louis`.

* `LAMBDA_ERROR_REPORT_EMAIL`

  The email address that AWS Lambda error notifications will be sent to.

* `INSERT_TRACKING`

  If set Google Analytics/leadforensics tracking scripts will be inserted into
  the page.

* `GOOGLE_ANALYTICS_TRACKER`

  The Google analytics tracking code, e.g. UA-XXXXXXXX-X.

* `MAILCHIMP_API_KEY`

  An API key for the mailing list sign up, provided by mailchimp.

* `MAILCHIMP_TECH_GROUP_ID`

  Mailchimp allows to target users specifically by their interest in certain
  subjects. This works by users signing up to interest groups. When a user
  signs up on our technology page, we subscribe him/her to the technology
  interest group. This is the technology interest group id.

* `SECRET_ENCRYPTION_KEY`

  A key used to encrypt email addresses on the mailing list sign up.

* `MAILING_LIST_SERVICE_URL`

  The URL used by the mailing list sign up. Automatically generated by aws,
  after running `make services-deploy` you should see it in the serverless
  output ending in `/mailing-list`.

* `MAILING_LIST_ID`

  The Mailchimp mailing list ID.

* `WORKABLE_API_KEY`

  A key used to authenticate with the Workable API. It's called when we collect
  all the state for the website, e.g. with `make fetch`. Workable contains all
  the job listings for our site.

* `BADGER_BRAIN_HOST`

  The GraphQL endpoint of badger brain. Called when we collect all the state
  for the website, e.g. with `make fetch`.

* `TWITTER_KEY`

  Part of the authentication for the Twitter API, which we call to get recent
  tweets. Tweets are shown on the "About us" page currently. The Twitter API
  is called when we collect all the state for the website, e.g. with `make fetch`.

* `TWITTER_SECRET`

  Seconds part of the authentication for the Twitter API.

* `INSTAGRAM_ACCESS_TOKEN`

  Authentication for the Instagram API. We show the latest Instagram posts on
  our "About us" page currently. The Instagram API is called when we collect
  all the state for the website, e.g. with `make fetch`.
  The Instagram access token may expire at any time according to
  [their API documentation](https://www.instagram.com/developer/authentication/).
  If this happens the static build will fail to any environment. In order to fix
  this a new access token will need to be generated, and both the project `.env`
  and the environment variables in Circle CI will need to be updated. New access
  token generation will require access to the `redbadgerteam` Instagram account
  and can be manually generated from the client-side authentication
  documentation [here](https://www.instagram.com/developer/authentication/).

* `AWS_ACCESS_KEY_ID`

  Used by Serverless to deploy our Lambda functions to AWS. See
  [Serverless documentation](https://serverless.com/framework/docs/providers/aws/guide/credentials#using-aws-access-keys)
  for details.

* `AWS_SECRET_ACCESS_KEY`

  Seconds part of the AWS authentication used by Serverless.

* `SLS_DEBUG`

  Enables Serverless debug logs.

* `GOTOWEBINAR_CLIENT_ID`

  Our `/webinar-registration` service registers a given user in a given
  webinar in GoToWebinar. To authenticate with the API, you need to complete an
  OAuth 2 flow. We opted for the simple resource owner password credential flow
  explained [here](https://goto-developer.logmeininc.com/how-use-direct-login).
  This variable contains the application ID we generated once in the
  GoToWebinar account.

* `GOTOWEBINAR_USER_ID`

  User name used to authenticate to the GoToWebinar API.

* `GOTOWEBINAR_PASSWORD`

  Password used to authenticate to the GoToWebinar API.

* `AMPLITUDE_API_KEY`

  Used to define which project to send Amplitude events to. This is different for
  dev, staging, and production.
