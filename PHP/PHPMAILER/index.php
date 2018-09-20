<!DOCTYPE html>
<head>
    <title>Email sender</title>
    <meta name="robots" content="noindex,nofollow">

    <link rel="stylesheet" type="text/css" href="css/style.css">

    <script src="lib/jquery.min.js"></script>
    <!-- Create a simple CodeMirror instance -->
    <link rel="stylesheet" href="lib/codemirror/codemirror.css">
    <script src="lib/codemirror/codemirror.js"></script>
    <script type="text/javascript" src="lib/codemirror/mode/xml/xml.js"></script>
</head>
<body>
    <form class="b-mailer f-form js-form" action="/handler.php" method="post">
        <div class="f-row f-row--email">
            <div class="f-label">Email:</div>
            <input class="b-mailer__emails f-input js-email-field " type="text" name="fieldEmail" required />
            <button type="button" class="btn btn-secondary js-clear-email">Clear email field</button>

            <div class="f-form__messages">
                <div class="f-row f-row--success js-form__success"></div>
                <div class="f-row f-row--error js-form__error"></div>
            </div>

        </div>
        <div class="f-row">
            <div class="f-label">HTML:</div>
            <textarea class="f-textarea js-textarea js-html-field" rows="10" name="fieldHTML" cols="30" required></textarea><br>
            <button type="button" class="b-mailer__clear-html btn btn-secondary js-clear-html">Clear HTML field</button>
        </div>
        <button class="b-mailer__submit f-btn js-form__submit btn btn-primary btn-lg" type="submit">Send email</button>
    </form>
    <script src="js/app.js"></script>
</body>
</html>