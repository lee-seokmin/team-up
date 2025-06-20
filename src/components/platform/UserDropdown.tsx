import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useAuthStore } from "@/auth/authStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import {
  faUser,
  faRightFromBracket,
  faMoon,
  faSun,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useTheme } from "@/contexts/ThemeContext";
import { logout } from "@/auth/authApi";

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const user = useAuthStore((state) => state.user);
  const { isDark, toggleDarkMode } = useTheme();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-[9000] flex" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="font-semibold text-sm cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 relative rounded-full flex items-center justify-center bg-component-tertiary-background border border-component-secondary-border text-text-primary">
            {user?.profileImage ? (
              <Image src={user.profileImage} alt="Profile" className="object-fit rounded-full" quality={100} width={32} height={32} />
            ) : (
              <p>{user?.name.charAt(0)}</p>
            )}
          </div>
          {user ? user.name : "로그인을 해주세요."}
          <FontAwesomeIcon
            icon={faChevronDown}
            size="sm"
            className="text-gray-500"
          />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-10 w-56 rounded-md bg-component-tertiary-background shadow-md z-[9999] border border-component-border overflow-visible"
          >
            <div>
              <MenuItem
                icon={faUser}
                text="내 프로필"
                onClick={() => { setIsOpen(false); window.location.href = "/platform/profile"; }}
                className="text-text-secondary"
              />
              <div className="border-t border-component-secondary-border"></div>

              <MenuItem
                icon={isDark ? faSun : faMoon}
                text={isDark ? "라이트 모드" : "다크 모드"}
                onClick={() => {
                  toggleDarkMode();
                  setIsOpen(false);
                }}
                className="text-text-secondary"
              />

              <div className="border-t border-component-secondary-border"></div>

              <MenuItem
                icon={faRightFromBracket}
                text="로그아웃"
                onClick={logout}
                className="text-red-400"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface MenuItemProps {
  icon: IconDefinition;
  text: string;
  onClick: () => void;
  className?: string;
}

function MenuItem({ icon, text, onClick, className = "" }: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-2 flex items-center gap-2 text-sm hover:bg-component-secondary-background ${className}`}
    >
      <FontAwesomeIcon icon={icon} className="w-4 h-4" />
      {text}
    </button>
  );
}