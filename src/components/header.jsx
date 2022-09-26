export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>Unreal Kingdoms Land Presale</h1>
                {/* <p>{props.data ? props.data.paragraph : 'Loading'}</p> */}
                <a href="#plots" className="btn btn-custom btn-lg page-scroll">
                  Buy Land
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
