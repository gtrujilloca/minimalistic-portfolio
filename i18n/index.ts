import spanish from './es.json';
import english from './en.json';


const LANGUAGES = {
  'es': spanish,
  'en': english
};

export type Language = keyof typeof LANGUAGES;

export function getI18n(language: Language  = 'es') {
  return LANGUAGES[language];
}