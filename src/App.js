import Router from "./routes";
import ReCAPTCHA from "react-google-recaptcha";

export default function App() {
  return (
    <div className="app-wrapp">
      <ReCAPTCHA
          sitekey="6LcSwPokAAAAADCvrKNKFD0Xt84XIqjAcV78SKlP"
          size="invisible"
          onChange={(value) => {
            console.log("captcha-changed", value);
          }}
          badge="bottomright"
        />
      <Router />
    </div>
  );
}
