import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard/Dashboard";
import Team from "./scenes/team/Team";
import Contacts from "./scenes/contacts/Contacts";
import Invoices from "./scenes/invoices/Invoices";
import Form from "./scenes/form/Form";
import Pie from "./scenes/pie/Pie";
import Line from "./scenes/line/Line";
import Faq from "./scenes/faq/Faq";
import Calendar from "./scenes/calendar/Calendar";
import Geography from "./scenes/geography/Geography";
import TopBar from "./scenes/global/TopBar";
import SideBar from "./scenes/global/SideBar";
import Bars from "./scenes/bars/Bars";
function App() {
  return (
    <>
      <div>
        <SideBar />
        <main>
          <TopBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/form" element={<Form />} />
            <Route path="/bar" element={<Bars />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/line" element={<Line />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/geography" element={<Geography />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
