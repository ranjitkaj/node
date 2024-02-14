 
const getError = (errors, prop) => {

    try {

        return errors.mapped()[prop].msg;

    } catch (error) {

        return "";

    }
};
 
module.exports = ({ errors }) => {

    return `

      <!DOCTYPE html>

      <html>

        <head>

          <link rel='stylesheet'

href='https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.0/css/bulma.min.css'>

          <style>

            div.columns {

              margin-top: 100px;

            }

            .button {

              margin-top: 10px;

            }

          </style>

        </head>

        <body>

          <div class='container'>

            <div class='columns is-centered'>

              <div class='column is-5'>

                <h1 class='title'>Sign Up</h1>

                <form method='POST'>             

                  <div>

                    <div>

                      <label class='label' id='email'>

                        Username</label>

                    </div>

                    <input class='input' type='text'

                           name='email'

                           placeholder='Email' for='email'>

                  </div>

                  <div>

                    <div>

                      <label class='label' id='password'>

                        Password</label>

                    </div>

                    <input class='input' type='password'

                           name='password'

                           placeholder='Password' for='password'>

                  </div>

                  <div>

                    <div>

                      <label class='label' id='confirmPassword'>

                        Confirm Password</label>

                    </div>

                    <input class='input' type='password'

                           name='confirmPassword'

                           placeholder='Confirm Password'

                           for='confirmPassword'>

                    <p class="help is-danger">

                      ${getError(errors, "confirmPassword")}

                    </p>

                  </div>

                  <div>

                    <button class='button is-primary'>

                      Sign Up

                    </button>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </body>

      </html>   

    `;
};