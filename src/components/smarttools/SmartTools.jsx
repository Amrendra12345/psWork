import { FaNotesMedical } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { LuAlarmClockPlus } from "react-icons/lu";
import { MdMedicalServices } from "react-icons/md";

const SmartTools = () => {
  return (
    <section className="bg-(--main-theme-background) py-6 w-full">
      <div className="max-w-7xl mx-auto">
        <p className="w-full text-center font-epilogue font-semibold text-3xl md:text-4xl mb-2 text-gray-200">
          Smart Tools That Simplify Care
        </p>
        <p className="font-poppins text-lg text-center font-normal text-gray-300">
          Track, manage & simplify care with our digital tools
        </p>
        <div className="mt-8 flex justify-start items-center gap-5 w-full">
          <div className="w-1/4 min-h-48 py-4 bg-white rounded">
            <div className="w-full flex justify-center items-center mb-5">
              <div className="w-16 h-16 flex justify-center items-center rounded-full p-1 bg-(--main-theme-background)">
                <FaNotesMedical className="text-4xl text-white" />
              </div>
            </div>
            <p className="text-(--main-primary-text-color) font-bold text-lg text-center mb-2">
              Report Summary
            </p>

            <p className="text-(--main-primary-text-color) font-semibold text-sm text-center">
              Consolidate medical reports in one place
            </p>
          </div>
           <div className="w-1/4 min-h-48 py-4 bg-white rounded">
            <div className="w-full flex justify-center items-center mb-5">
              <div className="w-16 h-16 flex justify-center items-center rounded-full p-1 bg-(--main-theme-background)">
                <GiMedicines className="text-4xl text-white" />
              </div>
            </div>
            <p className="text-(--main-primary-text-color) font-bold text-lg text-center mb-2">
              Medicine Intake Tracker
            </p>

            <p className="text-(--main-primary-text-color) font-semibold text-sm text-center">
              Diagnostics, therapies, second opinion
            </p>
          </div>
          <div className="w-1/4 min-h-48 py-4 bg-white rounded">
            <div className="w-full flex justify-center items-center mb-5">
              <div className="w-16 h-16 flex justify-center items-center rounded-full p-1 bg-(--main-theme-background)">
                <MdMedicalServices className="text-4xl text-white" />
              </div>
            </div>
            <p className="text-(--main-primary-text-color) font-bold text-lg text-center mb-2">
              Treatment Briefcase
            </p>

            <p className="text-(--main-primary-text-color) font-semibold text-sm text-center">
              Store and organize all treatment documents
            </p>
          </div>
          <div className="w-1/4 min-h-48 py-4 bg-white rounded">
            <div className="w-full flex justify-center items-center mb-5">
              <div className="w-16 h-16 flex justify-center items-center rounded-full p-1 bg-(--main-theme-background)">
                <LuAlarmClockPlus className="text-4xl text-white" />
              </div>
            </div>
            <p className="text-(--main-primary-text-color) font-bold text-lg text-center mb-2">
              Smart Reminders
            </p>
            <p className="text-(--main-primary-text-color) font-semibold text-sm text-center">
              Timely alerts for appointments and medications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartTools;
