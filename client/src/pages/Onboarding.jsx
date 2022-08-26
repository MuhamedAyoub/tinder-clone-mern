import Form from "../components/onboarding/Form";
import NavBar from "../components/NavBar";

const OnBoarding = () => {
  return (
    <div className="onBoarding-container">
      <NavBar
        minimal={false}
        showModel={true}
        authToken={true}
        setShowModel={() => {}}
      />
      <Form />
    </div>
  );
};

export default OnBoarding;
