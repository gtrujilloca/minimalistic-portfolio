// Generated by https://quicktype.io

export interface Language {
  basics:       Basics;
  work:         Work[];
  volunteer:    Work[];
  education:    Education[];
  awards:       Award[];
  certificates: Certificate[];
  publications: Publication[];
  skills:       Skill[];
  languages:    LanguageElement[];
  interests:    Interest[];
  references:   Reference[];
  projects:     Project[];
  keyboard_manager: KeyboardManager;
  sections:     SectionTitles;
}

export interface Award {
  title:   string;
  date:    string;
  awarder: string;
  summary: string;
}

export interface Basics {
  name:     string;
  label:    string;
  image:    string;
  email:    string;
  phone:    string;
  url:      string;
  summary:  string;
  location: Location;
  profiles: Profile[];
}

export interface Location {
  address:     string;
  postalCode:  string;
  city:        string;
  countryCode: string;
  region:      string;
}

export interface Profile {
  network:  string;
  username: string;
  url:      string;
}

export interface Certificate {
  name:   string;
  date:   string;
  issuer: string;
  url:    string;
}

export interface Education {
  institution: string;
  url:         string;
  area:        string;
  studyType:   string;
  startDate:   string;
  endDate:     string;
  score:       string;
  courses:     string[];
}

export interface Interest {
  name:     string;
  keywords: string[];
}

export interface LanguageElement {
  language: string;
  fluency:  string;
}

export interface Project {
  name:        string;
  isActive?:   boolean;
  description: string;
  highlights:  string[];
  url:         string;
  github?:     string;
}

export interface Publication {
  name:        string;
  publisher:   string;
  releaseDate: string;
  url:         string;
  summary:     string;
}

export interface Reference {
  name:      string;
  reference: string;
}

export interface Skill {
  name:     string;
  level:    String;
  keywords: string[];
}

export interface Work {
  organization?: string;
  position:      string;
  url?:          string;
  startDate:     string;
  endDate:       null | string;
  summary:       string;
  highlights:    string[];
  name?:         string;
}

export interface SectionTitles {
  sections: string[]
}

export interface KeyboardManager {
  placeholder: string;
  press: string;
  command_palette: string;
}