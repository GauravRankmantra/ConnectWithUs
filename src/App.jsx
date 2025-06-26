// App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FormsSection from "./pages/NfoccFormsMain"; // Assuming you place the component here
import MinisterCredentialForm from "./pages/MinisterCredentialForm";
import AssociateMember from "./pages/AssociateMember";
import MediaMemberForm from "./pages/MediaMemberForm";
import MinisterRenewalForm from "./pages/MinisterRenewalForm";
import TaponBroadcastStandards from "./pages/TaponBroadcastStandards";
import PushpayDonation from "./pages/PushpayDonation";
import ScriptureChurchMain from "./pages/ScriptureChurchMain";
import ChurchMembership from "./pages/ChurchMembership";
import MeetingRequestForm from "./pages/MeetingRequestForm";
import BenevolentRequestForm from "./pages/BenevolentRequestForm";
import EventAttendanceForm from "./pages/EventAttendanceForm";
import TaponFormMain from "./pages/TaponFormMain";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form-section" element={<FormsSection />} />
      <Route path="/minister-credential" element={<MinisterCredentialForm />} />
      <Route path="/associate-member" element={<AssociateMember />} />
      <Route path="/media-member" element={<MediaMemberForm />} />
      <Route path="/minister-renewal" element={<MinisterRenewalForm />} />
      <Route
        path="/tapon-radio-broadcast-standards"
        element={<TaponBroadcastStandards />}
      />
      <Route path="/pushpay-donation" element={<PushpayDonation />} />
      <Route
        path="/scripture-church-form-page"
        element={<ScriptureChurchMain />}
      />
      <Route
        path="/church-membership-application-form"
        element={<ChurchMembership />}
      />
      <Route path="/meeting-request-form" element={<MeetingRequestForm />} />
      <Route
        path="/benevolent-request-form"
        element={<BenevolentRequestForm />}
      />
      <Route
        path="/event-attendance-registration-verification-form"
        element={<EventAttendanceForm />}
      />
      <Route
        path="/tapon-form-page"
        element={<TaponFormMain />}
      />
    </Routes>
  );
}

export default App;
