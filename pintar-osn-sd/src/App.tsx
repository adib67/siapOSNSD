import confetti from 'canvas-confetti';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  Beaker, 
  Globe, 
  ChevronLeft, 
  BookOpen, 
  CheckCircle, 
  XCircle,
  Trophy,
  ArrowRight
} from 'lucide-react';
import { subjects, allQuestions } from './data';
import { cn } from './lib/utils';

type Page = 'home' | 'materials' | 'quiz' | 'quiz-result';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quoteIdx] = useState(Math.floor(Math.random() * 5));

  const quotes = [
    "Pendidikan adalah senjata paling mematikan di dunia. — Nelson Mandela",
    "Hanya satu hal yang membuat mimpi mustahil diraih: ketakutan akan kegagalan.",
    "Jenius adalah 1% inspirasi dan 99% keringat. — Thomas Edison",
    "Masa depan adalah milik mereka yang percaya pada keindahan mimpi mereka.",
    "Belajar hari ini, memimpin esok hari. Tetap semangat!"
  ];

  useEffect(() => {
    if (currentPage === 'quiz-result' && score > 0) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#4f46e5', '#10b981', '#f59e0b']
      });
    }
  }, [currentPage, score]);

  const selectedSubject = subjects.find(s => s.id === selectedSubjectId);
  const subjectQuestions = allQuestions.find(q => q.subjectId === selectedSubjectId)?.questions || [];

  const handleStartMaterials = (id: string) => {
    setSelectedSubjectId(id);
    setCurrentPage('materials');
  };

  const handleStartQuiz = (id: string) => {
    setSelectedSubjectId(id);
    setCurrentPage('quiz');
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const handleAnswer = (option: string) => {
    if (isAnswered) return;
    
    const question = subjectQuestions[currentQuestionIndex];
    const optionIndex = question.options.indexOf(option);
    const answerKey = String.fromCharCode(65 + optionIndex);

    setSelectedAnswer(option);
    setIsAnswered(true);

    if (answerKey === question.answer) {
      setScore(s => s + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < subjectQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setCurrentPage('quiz-result');
    }
  };

  const IconMap: { [key: string]: any } = {
    Calculator: Calculator,
    Beaker: Beaker,
    Globe: Globe
  };

  const SubjectImages: { [key: string]: string } = {
    matematika: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
    ipa: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800&auto=format&fit=crop",
    ips: "/regenerated_image_1777342739312.png"
  };

  return (
    <div className="h-screen bg-slate-50 flex flex-col font-sans text-slate-800 overflow-hidden">
      {/* Background Decorative patterns */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-amber-100/30 rounded-full blur-[100px]" />
      </div>

      {/* Header Navigation */}
      <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 shrink-0 z-40 shadow-sm sticky top-0">
        <button 
          onClick={() => setCurrentPage('home')}
          className="flex items-center gap-3 group text-left"
        >
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xl transition-all group-hover:scale-105 group-hover:rotate-3 shadow-lg shadow-indigo-200">S</div>
          <div className="flex flex-col">
            <span className="font-black text-lg leading-tight text-slate-900 tracking-tight">Siap OSN</span>
            <span className="text-[9px] text-slate-400 uppercase tracking-[0.2em] font-black">Portal Belajar SD</span>
          </div>
        </button>
        
        <nav className="hidden md:flex gap-10 h-full items-center">
          <button 
            onClick={() => setCurrentPage('home')} 
            className={cn(
              "h-full px-1 border-b-2 font-black transition-all text-xs uppercase tracking-widest",
              currentPage === 'home' ? "text-indigo-600 border-indigo-600" : "text-slate-400 border-transparent hover:text-indigo-600"
            )}
          >
            Beranda
          </button>
          <button 
            className="text-slate-400 font-black hover:text-indigo-600 text-xs uppercase tracking-widest transition-colors"
            onClick={() => {
              if (selectedSubjectId) setCurrentPage('materials');
              else setCurrentPage('home');
            }}
          >
            Materi
          </button>
          <button 
            className="text-slate-400 font-black hover:text-indigo-600 text-xs uppercase tracking-widest transition-colors"
            onClick={() => {
              if (selectedSubjectId) setCurrentPage('quiz');
              else setCurrentPage('home');
            }}
          >
            Latihan
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <div className="text-xs font-black text-slate-900">SDN Cipelah 1</div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden p-4 md:p-6 gap-6 relative">
        <AnimatePresence mode="wait">
          {currentPage === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="flex-1 overflow-y-auto"
            >
              <div className="max-w-6xl mx-auto py-8">
                {/* Enhanced Hero Section */}
                <div className="relative rounded-[3rem] overflow-hidden bg-slate-900 mb-16 p-12 md:p-20 text-white min-h-[400px] flex items-center shadow-2xl">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1200&auto=format&fit=crop" 
                      className="w-full h-full object-cover opacity-20 scale-105" 
                      alt="Education Banner"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
                  </div>
                  
                  <div className="relative z-10 max-w-2xl space-y-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 rounded-full border border-indigo-500/30 backdrop-blur-md"
                    >
                      <Trophy size={16} className="text-amber-400" />
                      <span className="text-xs font-black uppercase tracking-[0.15em]">Siap Untuk Olimpiade 2026</span>
                    </motion.div>
                    <motion.h2 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight"
                    >
                      Bebaskan Potensimu <br />
                      Jadilah <span className="text-indigo-400 underline decoration-indigo-400/30 underline-offset-8 italic">Juara Sejati</span>
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-lg text-slate-400 max-w-lg font-medium leading-relaxed"
                    >
                      {quotes[quoteIdx]}
                    </motion.p>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex flex-wrap gap-4 pt-4"
                    >
                      <button 
                         onClick={() => {
                           const el = document.getElementById('subjects-grid');
                           el?.scrollIntoView({ behavior: 'smooth' });
                         }}
                         className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-100 transition-all active:scale-95 shadow-xl shadow-white/5"
                      >
                        Mulai Belajar Now
                      </button>
                      <button className="px-8 py-4 bg-slate-800 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-700 transition-all border border-slate-700">Pelajari Fitur</button>
                    </motion.div>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-10">
                   <div className="h-px bg-slate-200 flex-1" />
                   <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Pilih Mata Pelajaran</h3>
                   <div className="h-px bg-slate-200 flex-1" />
                </div>

                <div id="subjects-grid" className="grid md:grid-cols-3 gap-8">
                  {subjects.map((subject, index) => {
                    const Icon = IconMap[subject.icon];
                    return (
                      <motion.div
                        key={subject.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="group bg-white rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full"
                      >
                        <div className="h-52 overflow-hidden relative">
                           <img 
                              src={SubjectImages[subject.id]} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                              alt={subject.title}
                              referrerPolicy="no-referrer"
                            />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                           <div className={cn("absolute top-6 left-6 w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-2xl", subject.color)}>
                             <Icon size={24} />
                           </div>
                           <div className="absolute bottom-6 left-6">
                              <h3 className="text-2xl font-black text-white">{subject.title}</h3>
                           </div>
                        </div>

                        <div className="p-8 flex-1 flex flex-col">
                          <p className="text-slate-500 text-sm mb-10 leading-relaxed font-medium">Modul lengkap dengan ringkasan strategis dan bank soal pilihan untuk mengasah logika.</p>
                          
                          <div className="mt-auto grid grid-cols-1 gap-3">
                            <button 
                              onClick={() => handleStartMaterials(subject.id)}
                              className="w-full flex items-center justify-center gap-2 py-4 bg-slate-50 rounded-2xl font-black text-xs uppercase tracking-widest text-slate-700 hover:bg-slate-100 transition-all border border-slate-100 group/btn"
                            >
                              Baca Ringkasan <BookOpen size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                            <button 
                              onClick={() => handleStartQuiz(subject.id)}
                              className={cn("w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-black text-xs uppercase tracking-widest text-white shadow-xl shadow-indigo-100 transition-all active:scale-95 group/btn-main", subject.color)}
                            >
                              Mulai Latihan <ArrowRight size={14} className="group-hover/btn-main:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="flex-1 flex gap-6 overflow-y-auto lg:overflow-hidden w-full max-w-7xl mx-auto">
              {/* Sidebar with enhanced styling */}
              <aside className="hidden lg:flex w-80 bg-white/70 backdrop-blur-sm rounded-[2.5rem] border border-slate-200 flex-col shadow-xl shrink-0 overflow-hidden">
                <div className="p-8 border-b border-slate-100 bg-white/50">
                  <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] mb-2">
                    {currentPage === 'materials' ? 'Silabus Belajar' : 'Status Simulasi Soal'}
                  </h2>
                  <div className="text-xl font-black text-slate-900 flex items-center gap-3">
                    {selectedSubject && (
                      <>
                        <div className={cn("w-4 h-4 rounded-lg", selectedSubject.color)} />
                        {selectedSubject.title}
                      </>
                    )}
                  </div>
                </div>
                
                <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                  <div className="space-y-2">
                    {selectedSubject?.sections.map((section, idx) => (
                      <a 
                        key={idx}
                        href={currentPage === 'materials' ? `#section-${idx}` : '#'}
                        onClick={() => currentPage === 'quiz' && setCurrentQuestionIndex(0)}
                        className={cn(
                          "p-4 rounded-[1.25rem] flex items-center gap-4 transition-all group",
                          currentPage === 'materials' 
                            ? "hover:bg-white hover:shadow-md text-slate-600 border border-transparent hover:border-slate-100" 
                            : idx === currentQuestionIndex 
                              ? "bg-slate-900 text-white shadow-xl shadow-slate-900/10 font-bold" 
                              : "text-slate-400 opacity-60 border border-transparent hover:border-slate-100"
                        )}
                      >
                        <div className={cn(
                          "w-8 h-8 rounded-xl flex items-center justify-center text-[10px] font-black shadow-sm",
                          currentPage === 'materials' ? "bg-slate-100 text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600" : idx === currentQuestionIndex ? "bg-indigo-500 text-white" : "bg-slate-100 text-slate-400"
                        )}>
                          {idx + 1}
                        </div>
                        <span className="text-xs font-black tracking-tight truncate uppercase leading-none">{section.title}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="p-8 bg-white border-t border-slate-100">
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Progress Akademik</span>
                    <span className="text-sm font-black text-slate-900 font-mono">
                      {currentPage === 'quiz' ? Math.round(((currentQuestionIndex + 1) / subjectQuestions.length) * 100) : 100}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                    <div 
                      className="h-full bg-indigo-600 rounded-full transition-all duration-700 ease-out shadow-sm" 
                      style={{ width: currentPage === 'quiz' ? `${((currentQuestionIndex + 1) / subjectQuestions.length) * 100}%` : '100%' }}
                    />
                  </div>
                </div>
              </aside>

              {/* Main Content Area in Split View */}
              <div className="flex-1 flex flex-col gap-6 overflow-y-auto md:overflow-hidden pb-8 md:pb-0">
                <AnimatePresence mode="wait">
                  {currentPage === 'materials' && selectedSubject && (
                    <motion.div
                      key="materials-content"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex-shrink-0 md:flex-1 md:overflow-y-auto space-y-8 pr-2"
                    >
                      {selectedSubject.sections.map((section, idx) => (
                        <motion.section 
                          key={idx} 
                          id={`section-${idx}`} 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          className="bg-white rounded-[3rem] border border-slate-200 p-10 md:p-16 shadow-sm relative overflow-hidden group"
                        >
                           {/* Geometric Decoration */}
                          <div className="absolute top-10 right-10 flex gap-1 items-center">
                             {[...Array(3)].map((_, i) => (
                               <div key={i} className={cn("w-1.5 h-1.5 rounded-full transition-all duration-500", i <= 1 ? "bg-indigo-500" : "bg-slate-100")} />
                             ))}
                          </div>
                          
                          <div className="relative z-10 flex flex-col gap-8">
                            <div className="space-y-4">
                              <div className="flex items-center gap-3 text-indigo-600 text-[10px] font-black uppercase tracking-[0.25em]">
                                <span>Unit Pembelajaran {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                                <span className="h-px bg-indigo-200 flex-1 max-w-[100px]"></span>
                              </div>
                              <h3 className="text-4xl font-black text-slate-900 leading-[1.1]">{section.title}</h3>
                            </div>

                            <div className="prose prose-slate prose-xl max-w-none text-slate-600 leading-relaxed font-semibold">
                              <p>{section.content}</p>
                            </div>
                            
                            {section.subsections && section.subsections.length > 0 && (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                {section.subsections.map((sub, sidx) => (
                                  <motion.div 
                                    key={sidx} 
                                    whileHover={{ y: -5 }}
                                    className="p-8 bg-slate-50 border border-slate-100 rounded-[2rem] shadow-sm group/sub relative transition-all hover:bg-white hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5"
                                  >
                                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-indigo-600 font-black text-xs mb-6 group-hover/sub:bg-indigo-600 group-hover/sub:text-white transition-all shadow-sm">
                                      {sidx + 1}
                                    </div>
                                    <h4 className="font-black text-slate-900 text-lg mb-3 tracking-tight">{sub.title}</h4>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{sub.content}</p>
                                  </motion.div>
                                ))}
                              </div>
                            )}

                            {/* Pro Tip Callout */}
                            <div className="p-8 bg-amber-50 rounded-[2.5rem] border border-amber-100 flex items-start gap-6">
                               <div className="w-14 h-14 rounded-2xl bg-amber-400 flex items-center justify-center text-white shadow-lg shrink-0 scale-75 md:scale-100">
                                  <Trophy size={24} />
                               </div>
                               <div className="space-y-1">
                                  <h5 className="font-black text-amber-900 text-sm uppercase tracking-widest">Tips Materi Strategis</h5>
                                  <p className="text-sm text-amber-700 font-medium leading-relaxed">Pahami konsep dasarnya terlebih dahulu sebelum menghafal rumus. Kebanyakan soal olimpiade menguji pemahaman logika yang mendalam bukan sekadar hitungan.</p>
                               </div>
                            </div>
                            
                            {idx === selectedSubject.sections.length - 1 && (
                               <div className="mt-12 p-10 md:p-16 bg-slate-900 rounded-[3rem] text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative group/footer">
                                 <div className="absolute top-0 right-0 w-[50%] h-full bg-indigo-500 opacity-5 -skew-x-12 translate-x-20 group-hover/footer:translate-x-10 transition-transform duration-1000" />
                                 <div className="space-y-4 text-center md:text-left relative z-10 max-w-sm">
                                   <div className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-400 border border-indigo-400/30 rounded-lg text-[10px] font-black uppercase tracking-widest">Siap Ujian?</div>
                                   <h4 className="text-4xl font-black leading-tight">Uji Nyali Akademikmu Sekarang</h4>
                                   <p className="text-slate-400 font-medium text-sm">Selesaikan 40 simulasi soal terbaik untuk mengukur kesiapanmu menjadi juara.</p>
                                 </div>
                                 <button 
                                   onClick={() => handleStartQuiz(selectedSubject.id)}
                                   className="relative z-10 px-12 py-5 bg-indigo-600 text-white rounded-2xl font-black shadow-2xl shadow-indigo-500/40 hover:bg-indigo-500 active:scale-95 transition-all text-xs uppercase tracking-widest group/btn-last flex items-center gap-3"
                                 >
                                   Buka Simulasi Latihan <ArrowRight size={16} className="group-hover/btn-last:translate-x-2 transition-transform" />
                                 </button>
                               </div>
                            )}
                          </div>
                        </motion.section>
                      ))}
                    </motion.div>
                  )}


                  {currentPage === 'quiz' && selectedSubject && subjectQuestions[currentQuestionIndex] && (
                    <motion.div
                      key="quiz-content"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      className="flex-1 flex flex-col gap-6"
                    >
                      {/* Dark themed quiz area */}
                      <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl flex-shrink-0 md:flex-1 flex flex-col relative overflow-hidden group min-h-fit">
                        {/* Interactive Background Elements */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none stroke-current text-white overflow-hidden">
                          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <line x1="0" y1="20" x2="100" y2="20" />
                            <line x1="0" y1="40" x2="100" y2="40" />
                            <line x1="0" y1="60" x2="100" y2="60" />
                            <line x1="0" y1="80" x2="100" y2="80" />
                            <line x1="20" y1="0" x2="20" y2="100" />
                            <line x1="40" y1="0" x2="40" y2="100" />
                            <line x1="60" y1="0" x2="60" y2="100" />
                            <line x1="80" y1="0" x2="80" y2="100" />
                          </svg>
                        </div>

                        <div className="relative z-10 flex-1 flex flex-col">
                          <div className="flex items-center gap-3 mb-10">
                            <span className="px-3 py-1 bg-red-500 text-[10px] font-black rounded-lg uppercase tracking-widest whitespace-nowrap">Tantangan Soal</span>
                            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Level: Standar OSN</span>
                            <div className="flex-1 h-px bg-slate-800 mx-4" />
                            <span className="text-slate-400 font-mono text-xs">{currentQuestionIndex + 1}/{subjectQuestions.length}</span>
                          </div>

                          <div className="flex-1 flex flex-col md:flex-row gap-12">
                            <div className="flex-1">
                              <h3 className="text-2xl md:text-3xl font-bold leading-snug mb-12">
                                {subjectQuestions[currentQuestionIndex].text}
                              </h3>

                              <div className="grid gap-4 sm:grid-cols-2">
                                {subjectQuestions[currentQuestionIndex].options.map((option, idx) => {
                                  const optionChar = String.fromCharCode(65 + idx);
                                  const isCorrect = optionChar === subjectQuestions[currentQuestionIndex].answer;
                                  const isSelected = selectedAnswer === option;
                                  
                                  let stateClasses = "bg-slate-800 border-slate-700 hover:bg-slate-700/50 hover:border-slate-600";
                                  if (isAnswered) {
                                    if (isCorrect) stateClasses = "bg-emerald-600 border-emerald-500 shadow-lg shadow-emerald-500/20";
                                    else if (isSelected && !isCorrect) stateClasses = "bg-rose-600 border-rose-500 shadow-lg shadow-rose-500/20";
                                    else stateClasses = "bg-slate-800 border-slate-800 opacity-40";
                                  }

                                  return (
                                    <button
                                      key={idx}
                                      disabled={isAnswered}
                                      onClick={() => handleAnswer(option)}
                                      className={cn(
                                        "group flex items-center gap-4 px-6 py-5 rounded-[1.25rem] border font-bold transition-all text-left relative",
                                        stateClasses
                                      )}
                                    >
                                      <span className={cn(
                                        "w-8 h-8 flex-shrink-0 rounded-lg flex items-center justify-center font-black text-xs transition-colors",
                                        isAnswered && (isCorrect || isSelected) ? "bg-white/20" : "bg-slate-900 group-hover:bg-slate-800 text-slate-400"
                                      )}>
                                        {optionChar}
                                      </span>
                                      <span className="text-sm md:text-base">{option}</span>
                                    </button>
                                  );
                                })}
                              </div>

                              {isAnswered && subjectQuestions[currentQuestionIndex].explanation && (
                                <motion.div 
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="mt-8 p-6 bg-slate-800/60 border border-white/10 rounded-2xl"
                                >
                                  <div className="flex items-center gap-2 mb-2 text-indigo-400">
                                    <BookOpen size={16} />
                                    <span className="text-xs font-black uppercase tracking-widest">Pembahasan Ringkas</span>
                                  </div>
                                  <p className="text-sm text-slate-300 leading-relaxed font-medium">
                                    {subjectQuestions[currentQuestionIndex].explanation}
                                  </p>
                                </motion.div>
                              )}
                            </div>

                            {/* Question Sidebar/Stat */}
                            <div className="w-full md:w-64 shrink-0 flex flex-col gap-6">
                               <div className="bg-slate-800/40 backdrop-blur-sm rounded-3xl p-6 border border-white/5 flex flex-col items-center justify-center text-center">
                                  <div className="text-indigo-400 text-[10px] font-black mb-1 uppercase tracking-widest">Akurasi Anda</div>
                                  <div className="text-5xl font-black mb-1 font-mono tracking-tighter">
                                    {Math.round((score / Math.max(currentQuestionIndex, 1)) * 100)}%
                                  </div>
                                  <div className="text-[10px] text-slate-500 font-bold uppercase">Skor Saat Ini: {score}</div>
                               </div>

                               {isAnswered && (
                                  <button 
                                    onClick={handleNextQuestion}
                                    className="w-full py-5 bg-white text-slate-900 rounded-3xl font-black text-sm hover:bg-slate-100 active:scale-95 transition-all uppercase tracking-widest shadow-xl shadow-white/5"
                                  >
                                    {currentQuestionIndex === subjectQuestions.length - 1 ? 'Selesai & Kumpulkan' : 'Soal Berikutnya'}
                                  </button>
                               )}
                            </div>
                          </div>
                        </div>
                      </section>
                    </motion.div>
                  )}

                  {currentPage === 'quiz-result' && (
                    <motion.div
                      key="result-content"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex-1 flex flex-col items-center justify-center text-center py-12 max-w-2xl mx-auto flex-shrink-0 min-h-fit"
                    >
                      <div className="relative mb-12">
                        <div className="w-40 h-40 bg-amber-50 rounded-full flex items-center justify-center shadow-inner">
                          <Trophy size={80} className="text-amber-500 drop-shadow-xl" />
                        </div>
                        <motion.div 
                          initial={{ scale: 0, rotate: -20 }}
                          animate={{ scale: 1, rotate: 0 }}
                          className="absolute -top-2 -right-2 bg-emerald-500 text-white px-5 py-2 rounded-2xl font-black text-xs shadow-lg uppercase tracking-widest border-4 border-slate-50"
                        >
                          Sempurna!
                        </motion.div>
                      </div>

                      <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">Keren Banget!</h2>
                      <p className="text-lg text-slate-500 font-medium mb-12">
                        Satu langkah lebih dekat menjadi juara. Latihan <span className="text-slate-900 font-bold underline decoration-indigo-200 underline-offset-4">{selectedSubject?.title}</span> telah selesai.
                      </p>

                      <div className="grid grid-cols-2 gap-6 w-full mb-12">
                        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden group">
                           <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500" />
                           <span className="block text-slate-400 uppercase text-[10px] font-black tracking-widest mb-2">Nilai Akhir</span>
                           <span className="text-6xl font-black text-indigo-600 font-mono">
                             {Math.round((score / subjectQuestions.length) * 100)}
                           </span>
                        </div>
                        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden group">
                           <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
                           <span className="block text-slate-400 uppercase text-[10px] font-black tracking-widest mb-2">Jawaban Benar</span>
                           <span className="text-6xl font-black text-emerald-500 font-mono">
                             {score}<span className="text-2xl text-slate-300 font-sans ml-1">/{subjectQuestions.length}</span>
                           </span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 w-full">
                        <button 
                          onClick={() => selectedSubjectId && handleStartQuiz(selectedSubjectId)}
                          className="flex-1 px-8 py-5 bg-slate-900 text-white rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
                        >
                          Ulangi Latihan
                        </button>
                        <button 
                          onClick={() => setCurrentPage('home')}
                          className="flex-1 px-8 py-5 bg-white border-2 border-slate-200 text-slate-600 rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-slate-50 transition-all"
                        >
                          Ke Menu Utama
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Status Bar */}
      <footer className="h-12 bg-white border-t border-slate-200 px-8 flex items-center justify-between text-[10px] font-bold text-slate-400 shrink-0 z-40">
        <div className="flex gap-6 items-center">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Server OSN Aktif
          </span>
          <span className="hidden sm:inline opacity-50 uppercase tracking-widest">|</span>
          <span className="hidden sm:inline">Sesi Akademik: 2026/2027</span>
          <span className="hidden sm:inline opacity-50 uppercase tracking-widest">|</span>
          <span className="hidden sm:inline text-indigo-500/70">V 2.0.1</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="hidden md:inline">© 2026 Pintar OSN - Kemendikbudristek</span>
          <span className="h-3 w-px bg-slate-200 hidden md:inline"></span>
          <button className="text-indigo-600 hover:underline uppercase tracking-widest transition-all">Pusat Bantuan</button>
        </div>
      </footer>
    </div>
  );
}
