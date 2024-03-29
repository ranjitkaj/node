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
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>captcha1</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <div class="container">
    
    <form action="/signup" method="post">
        <input type="text" name="fname" placeholder="Enter First Name" required/><br />
        <input type="text" name="lname" placeholder="Enter Last Name" required/><br />
        <input type="date" name="dob" placeholder="Enter Date of Birth" required /><br />
        <input type="text" name="city" placeholder="Enter City" required /><br />
        <input type="text" name="phone" placeholder="Enter Phone Number" required /><br />
        <input type="text" name="mail" placeholder="Enter Email" required /><br />
        <input type="password" name="password" id="pass"  placeholder="Enter Password" required /><br />
        <input type="password" name="confirmPassword" id="cpass"  placeholder="Enter Confirm Password" required /><br />
        <div> <p class="help is-danger">

        ${getError(errors, "confirmPassword")}

      </p>
      </div>
        <img src="/a.gif" /><br />
        <input type="text" name="cap" placeholder="Enter Captcha" /><br />
        <input class="btn" type="submit" value="submit"  name="submit" />
    </form>
    </div>

    <script>
    
    </script>

</body>
</html>`;
}