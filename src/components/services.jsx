export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Check out our latest trailer</h2>
        </div>
        <div className="row">
          <div className="youtube">
            <iframe
              src="https://www.youtube.com/embed/0n9IsC8jwjI"
              title="UnrealKingdom Cinematic Forest Castle"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="register-bottom">
              <a
                className="register"
                href="https://unrealkingdoms.com/PlayerLogin/registration.php"
                target="_blank"
                rel="noreferrer"
              >
                Register now
              </a>
            </div>
            <div className="register-bottom">
              <a
                className="login"
                href="https://unrealkingdoms.com/PlayerLogin/login.php"
                target="_blank"
                rel="noreferrer"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
