// ---------------------------------------------------------------------------
// Shared domain types used across the application
// ---------------------------------------------------------------------------

/** A single step in the "How It Works" section. */
export interface HowItWorksItem {
  id: number;
  icon: string;
  heading: string;
  text: string;
}

/** A milestone entry in the project roadmap. */
export interface RoadmapEvent {
  date: string;
  description: string;
}

/** A single FAQ question/answer pair. */
export interface FaqItem {
  question: string;
  answer: string;
}

/** Controlled login form fields. */
export interface LoginFields {
  username: string;
  password: string;
}

/** Controlled contact form fields. */
export interface ContactFields {
  name: string;
  email: string;
  message: string;
}
