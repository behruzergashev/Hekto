import React, { createContext, useState, useContext } from "react"
import en from "../locales/en.json"
import uz from "../locales/uz.json"
import ru from "../locales/ru.json"

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("uz")
  const [texts, setTexts] = useState(uz)

  const changeLanguage = (lang) => {
    setLanguage(lang)
    if (lang === "en") setTexts(en)
    else if (lang === "ru") setTexts(ru)
    else setTexts(uz)
  }

  return <LanguageContext.Provider value={{ language, texts, changeLanguage }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)

