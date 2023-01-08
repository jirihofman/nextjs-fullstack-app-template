import pjson from '../../package.json';

const Hero = () => {

    return (
        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">{pjson.displayName}</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-5">{pjson.description}</p>
            </div>
        </div>
    );
};

export default Hero;
