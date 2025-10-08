import { useTranslation } from "react-i18next";
import { FaHome, FaCalendar, FaBook, FaGraduationCap, FaChartLine, FaBullhorn  } from "react-icons/fa";
 import {Link} from "react-router-dom"

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <ul>
      <h1 className="text-white font-bold text-center text-4xl my-10">
        {t('sidebar.title')}
      </h1>

      <Link to="/dashboard" className="flex gap-3 items-center bg-white text-[#5ec3d8] px-6 py-4 cursor-pointer">
        <FaHome className="text-2xl"/> {t('sidebar.dashboard')}
      </Link>

      <li className="flex gap-3 items-center hover:bg-white hover:text-[#5ec3d8] text-[#a4c5cf] px-6 py-4 cursor-pointer transition-all duration-200">
        <FaCalendar className="text-2xl"/> {t('sidebar.schedule')}
      </li>

      <li className="flex gap-3 items-center hover:bg-white hover:text-[#5ec3d8] text-[#a4c5cf] px-6 py-4 cursor-pointer transition-all duration-200">
        <FaBook className="text-2xl"/> {t('sidebar.courses')}
      </li>

      <li className="flex gap-3 items-center hover:bg-white hover:text-[#5ec3d8] text-[#a4c5cf] px-6 py-4 cursor-pointer transition-all duration-200">
        <FaGraduationCap className="text-2xl"/> {t('sidebar.gradebook')}
      </li>

      <li className="flex gap-3 items-center hover:bg-white hover:text-[#5ec3d8] text-[#a4c5cf] px-6 py-4 cursor-pointer transition-all duration-200">
        <FaChartLine className="text-2xl"/> {t('sidebar.performance')}
      </li>

      <li className="flex gap-3 items-center hover:bg-white hover:text-[#5ec3d8] text-[#a4c5cf] px-6 py-4 cursor-pointer transition-all duration-200">
        <FaBullhorn className="text-2xl"/> {t('sidebar.announcement')}
      </li>
    </ul>
  );
}

export default Sidebar