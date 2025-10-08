import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import requireAuth from "../../HOC/requireAuth";
import Sidebar from "../../components/Sidebar";
import SearchBar from "../../components/SearchBar";
import RightPanel from "../../components/RightPanel";
import ExamsCard from "../../components/ExamsCard";
import { useDispatch, useSelector } from "react-redux";
import { getAnnouncementObj } from "../../Redux/ApiSlice"
import {  useEffect } from "react"


const Dashboard: React.FC = () => {


  const { getData } : any = useSelector( (store : any)=> {
       return store.ApiSlice
    }  )

    const dispatch =  useDispatch()

    useEffect(() => {
        dispatch(getAnnouncementObj())
     
        
        
      }, [])



  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  function Logout() {
    localStorage.removeItem("isLoggedIn");
    navigate("/home");
  }

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  
    document.dir = lang === "ar" ? "rtl" : "ltr";
  };

  return (
    <>


      <div className="grid grid-cols-1 md:grid-cols-12 min-h-screen bg-gray-100">
       

        {/* Sidebar */}
        <div className="bg-gradient-to-b from-[#2d6a7e] to-[#1e4f62] lg:col-span-2 md:col-span-12 p-4">
          <Sidebar />
        </div>

        {/* Main content */}
        <main className="lg:col-span-7 md:col-span-12 p-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 my-6">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              {t("welcome")}
            </h1>

            <div className="flex gap-3 items-center">
              <SearchBar />

              {/* Language buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => changeLanguage("en")}
                  className={`px-3 py-2 rounded-xl transition duration-200 ${
                    i18n.language === "en"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => changeLanguage("ar")}
                  className={`px-3 py-2 rounded-xl transition duration-200 ${
                    i18n.language === "ar"
                      ? "bg-green-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  AR
                </button>
              </div>

              {/* Logout */}
              <button
                onClick={Logout}
                className="px-3 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition duration-200"
              >
                {t("logout")} 
              </button>
            </div>
          </div>

          {/* Exams section */}
          <ExamsCard />

          {/* Announcements */}
 
<div className="bg-white p-6 rounded-xl shadow-sm mt-6">
  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
    {t("announcements")}
  </h3>

  {getData && getData.length > 0 ? (
    <div className="space-y-4">
      {getData.map((announcement: any) => (
        <div 
          key={announcement._id} 
          className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200 bg-gradient-to-r from-blue-50 to-white"
        >
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-lg font-semibold text-gray-800">
              {announcement.title}
            </h4>
            <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {new Date(announcement.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
          </div>
          
          <p className="text-gray-600 text-sm mb-3 leading-relaxed">
            {announcement.content}
          </p>
          
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="font-medium text-blue-600">
              {announcement.author}
            </span>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="text-center py-8">
      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
      </svg>
      <p className="text-gray-500 mt-2">{t("no_announcements")}</p>
    </div>
  )}
</div>
        </main>

        {/* Right Panel */}
        <div className="lg:col-span-3 md:col-span-12 p-4">
          <RightPanel />
        </div>
      </div>
    </>
  );
};

export default requireAuth(Dashboard);
