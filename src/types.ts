export interface MaterialSection {
  title: string;
  content: string;
  subsections?: { title: string; content: string }[];
}

export interface SubjectMaterials {
  id: string;
  title: string;
  icon: string;
  color: string;
  sections: MaterialSection[];
}

export interface Question {
  id: number;
  text: string;
  options: string[];
  answer: string; // usually 'A', 'B', 'C', 'D'
  explanation?: string;
}

export interface SubjectQuestions {
  subjectId: string;
  questions: Question[];
}
