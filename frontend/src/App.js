import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { FiShield, FiZap, FiCheckCircle, FiAlertCircle, FiLock, FiBarChart2, FiClock, FiMessageSquare } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

// Components
const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
  };
  
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-xl border-b border-primary-100">
      <div className="container-custom py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 z-20">
          <FiShield className="text-primary-500 text-3xl" />
          <span className="text-2xl font-bold text-primary-500">AI-Модератор</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-dark/80 hover:text-primary-500 transition-colors">Функции</a>
          <a href="#benefits" className="text-dark/80 hover:text-primary-500 transition-colors">Преимущества</a>
          <a href="#stats" className="text-dark/80 hover:text-primary-500 transition-colors">Статистика</a>
          <a href="#faq" className="text-dark/80 hover:text-primary-500 transition-colors">FAQ</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center gap-1.5 z-20" 
          onClick={toggleMenu}
          aria-label="Открыть меню"
        >
          <span className={`block w-6 h-0.5 bg-primary-500 transition-all duration-300 ${menuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-primary-500 transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-primary-500 transition-all duration-300 ${menuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        
        {/* CTA Button */}
        <a 
          href="https://t.me/articortex"
          target="_blank"
          rel="noopener noreferrer" 
          className="hidden md:flex btn btn-primary"
        >
          <FaTelegramPlane className="mr-2 text-xl" />
          Подключить
        </a>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-dark/80 backdrop-blur-xl z-10 transition-all duration-300 flex flex-col justify-center items-center gap-8 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <a href="#features" onClick={closeMenu} className="text-white text-xl hover:text-primary-300 transition-colors">Функции</a>
        <a href="#benefits" onClick={closeMenu} className="text-white text-xl hover:text-primary-300 transition-colors">Преимущества</a>
        <a href="#stats" onClick={closeMenu} className="text-white text-xl hover:text-primary-300 transition-colors">Статистика</a>
        <a href="#faq" onClick={closeMenu} className="text-white text-xl hover:text-primary-300 transition-colors">FAQ</a>
        
        <a 
          href="https://t.me/articortex"
          target="_blank"
          rel="noopener noreferrer" 
          onClick={closeMenu}
          className="btn btn-primary mt-4"
        >
          <FaTelegramPlane className="mr-2 text-xl" />
          Подключить
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-pattern opacity-10 z-0"></div>
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-600 font-medium text-sm mb-2">
              <FiShield className="mr-2" /> Интеллектуальная защита для Telegram
            </div>
            <h1 className="heading-xl">
              <span className="text-primary-500">AI-Модератор</span> для ваших Telegram-чатов
            </h1>
            <p className="subheading">
              Полностью автоматизированная система безопасности, которая защищает ваши чаты от спама, нежелательного контента и поддерживает профессиональную атмосферу – 24/7 без вашего участия.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a 
                href="https://t.me/articortex"
                target="_blank"
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                <FaTelegramPlane className="mr-2 text-xl" /> Подключить модератора
              </a>
              <a href="#features" className="btn bg-white border border-primary-200 text-primary-600 hover:bg-primary-50">
                Узнать больше
              </a>
            </div>
            
            <div className="flex gap-8 mt-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary-500">96%</span>
                <span className="text-sm text-gray-500">Автоматизации</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary-500">24/7</span>
                <span className="text-sm text-gray-500">Защита</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-secondary-500">&lt;5 сек</span>
                <span className="text-sm text-gray-500">Время реакции</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-primary rounded-3xl blur-lg opacity-30"></div>
              <div className="glass-card overflow-hidden p-3 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1590494165264-1ebe3602eb80?auto=format&fit=crop&w=800&q=80" 
                  alt="AI защита для Telegram чатов" 
                  className="w-full h-auto rounded-2xl"
                  loading="eager"
                />
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 glass-card p-4 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="bg-secondary-500 h-10 w-10 rounded-full flex items-center justify-center text-white">
                  <FiCheckCircle size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">97% Точность</h4>
                  <p className="text-sm text-gray-500">в определении спама</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 glass-card p-4 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="bg-accent-500 h-10 w-10 rounded-full flex items-center justify-center text-white">
                  <FiAlertCircle size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">1154 угроз</h4>
                  <p className="text-sm text-gray-500">заблокировано в месяц</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <FiMessageSquare className="text-4xl text-primary-500" />,
      title: "Анализ контента",
      description: "Интеллектуальный анализ всех сообщений в реальном времени для выявления спама и нежелательного контента.",
      image: "https://images.unsplash.com/photo-1585698204432-aee3d8d68911"
    },
    {
      icon: <FiZap className="text-4xl text-secondary-500" />,
      title: "Удаление спама",
      description: "Автоматическое удаление спам-сообщений и блокировка нарушителей без вашего участия.",
      image: "https://images.unsplash.com/photo-1555529902-5261145633bf"
    },
    {
      icon: <FiLock className="text-4xl text-accent-500" />,
      title: "Защита чата",
      description: "Круглосуточная защита от попыток взлома, флуда и массовых атак на ваше сообщество.",
      image: "https://images.unsplash.com/photo-1593407089396-93f0c7a575f0"
    }
  ];

  return (
    <section id="features" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-500/5 z-0"></div>
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Интеллектуальная модерация для <span className="text-primary-500">Telegram-чатов</span></h2>
          <p className="subheading mx-auto">
            AI-Модератор автоматически обнаруживает и удаляет нежелательный контент, освобождая ваше время для важных задач.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="feature-card"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <div className="mt-auto rounded-xl overflow-hidden h-48 mb-4">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    {
      title: "Экономия времени",
      description: "Освободите до 96% времени, которое ранее тратилось на модерацию чата.",
      icon: <FiClock className="text-3xl" />
    },
    {
      title: "Круглосуточная защита",
      description: "Модерация работает 24/7, даже когда вы не онлайн.",
      icon: <FiShield className="text-3xl" />
    },
    {
      title: "Профессиональная атмосфера",
      description: "Поддерживайте качественное общение в чате для удержания ценных участников.",
      icon: <FiMessageSquare className="text-3xl" />
    },
    {
      title: "Растущая эффективность",
      description: "ИИ постоянно учится и адаптируется к новым типам угроз и спама.",
      icon: <FiBarChart2 className="text-3xl" />
    }
  ];

  return (
    <section id="benefits" className="section py-24 bg-gradient-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-pattern opacity-20 mix-blend-overlay"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Почему выбирают <span className="text-secondary-400">AI-Модератор</span></h2>
          <p className="text-white/80 text-lg mx-auto max-w-2xl">
            Наш интеллектуальный модератор не только защищает ваши чаты, но и помогает создавать более качественное взаимодействие с аудиторией.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <div className="bg-white/20 h-16 w-16 rounded-xl flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-white/80">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <section id="stats" className="section relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Эффективность <span className="text-primary-500">AI-Модератора</span></h2>
          <p className="subheading mx-auto">
            Реальные данные показывают стабильный рост эффективности нашего модератора, подтверждающие его ценность для ваших Telegram-чатов.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8">
            <img 
              src="https://images.unsplash.com/photo-1717501217835-821cc3aefbc3" 
              alt="Статистика эффективности AI-модератора" 
              className="w-full h-auto rounded-xl"
            />
          </div>
          
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold mb-4">Рост модерационных действий</h3>
              <p className="text-gray-600 mb-4">
                График демонстрирует значительный рост количества автоматических модерационных действий с 33 до 1154 в месяц.
              </p>
              <div className="bg-primary-50 rounded-lg p-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Начало периода</span>
                  <span className="text-sm text-primary-500 font-semibold">Рост на 3400%</span>
                </div>
                <div className="h-6 bg-white rounded-full mt-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-primary rounded-full" 
                    style={{ width: '97%' }}
                  ></div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold mb-4">Структура модерации</h3>
              <p className="text-gray-600 mb-4">
                42% модерационных действий – блокировка нарушителей, 55% – удаление спам-сообщений, лишь 3% – исправление ошибок.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold text-primary-500">42%</div>
                  <div className="text-sm text-gray-500">Блокировка</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold text-secondary-500">55%</div>
                  <div className="text-sm text-gray-500">Удаление</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold text-accent-500">3%</div>
                  <div className="text-sm text-gray-500">Ошибки</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(null);
  
  const faqItems = [
    {
      question: "Как подключить AI-Модератор к моему Telegram-чату?",
      answer: "Просто перейдите в Telegram и начните чат с @articortex. Следуйте инструкциям, чтобы добавить бота в ваш чат и настроить его под ваши потребности."
    },
    {
      question: "Модератор может работать в нескольких чатах одновременно?",
      answer: "Да, наш AI-Модератор может одновременно работать в неограниченном количестве чатов, обеспечивая эффективную защиту каждого из них."
    },
    {
      question: "Какие типы контента может фильтровать модератор?",
      answer: "AI-Модератор эффективно фильтрует спам, оскорбления, флуд, нежелательную рекламу, фишинговые ссылки, и другие типы вредоносного контента."
    },
    {
      question: "Можно ли настроить правила модерации под мой чат?",
      answer: "Да, вы можете гибко настроить правила модерации под специфику вашего чата, включая или отключая различные типы фильтров и устанавливая уровень строгости."
    },
    {
      question: "Требуется ли постоянно контролировать работу модератора?",
      answer: "Нет, AI-Модератор полностью автономен и не требует вашего контроля. Вы всегда можете просмотреть логи модерации, чтобы быть в курсе всех действий."
    }
  ];

  return (
    <section id="faq" className="section bg-light relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-pattern opacity-5 z-0"></div>
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Часто задаваемые <span className="text-primary-500">вопросы</span></h2>
          <p className="subheading mx-auto">
            Получите ответы на популярные вопросы о работе и настройке AI-Модератора для ваших Telegram-чатов.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                className="w-full glass-card p-6 flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-left text-lg font-semibold">{item.question}</h3>
                <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="#1049BD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/70 backdrop-blur-sm px-6 py-4 rounded-b-2xl border-t border-gray-100"
                >
                  <p className="text-gray-600">{item.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-10 z-0"></div>
      <div className="container-custom relative z-10">
        <div className="glass-card bg-white/80 p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Готовы защитить ваши Telegram-чаты?</h2>
              <p className="text-lg text-gray-600 mb-8">
                AI-Модератор уже защищает сотни чатов от спама и нежелательного контента. Присоединяйтесь и освободите своё время от рутинной модерации.
              </p>
              <motion.a 
                href="https://t.me/articortex"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn btn-primary text-lg px-8 py-4"
              >
                <FaTelegramPlane className="mr-2 text-xl" /> Начать использовать модератор
              </motion.a>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-primary rounded-3xl blur-lg opacity-30"></div>
              <div className="glass-card p-8 relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary-500 h-12 w-12 rounded-full flex items-center justify-center">
                    <FiShield className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">AI-Модератор</h4>
                    <p className="text-gray-500">Интеллектуальная защита для Telegram</p>
                  </div>
                </div>
                
                <div className="bg-primary-50 rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <FiCheckCircle className="text-secondary-500" />
                    <p className="text-primary-700">Автоматическая модерация 24/7</p>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <FiCheckCircle className="text-secondary-500" />
                    <p className="text-primary-700">Блокировка спама и нежелательного контента</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiCheckCircle className="text-secondary-500" />
                    <p className="text-primary-700">Настраиваемые правила модерации</p>
                  </div>
                </div>
                
                <div className="text-center p-4 bg-primary-500 text-white rounded-xl">
                  <p className="font-medium">Напишите @articortex</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <FiShield className="text-primary-400 text-2xl" />
            <span className="text-xl font-bold text-white">AI-Модератор</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors">Функции</a>
            <a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Преимущества</a>
            <a href="#stats" className="text-gray-400 hover:text-white transition-colors">Статистика</a>
            <a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© 2024 AI-Модератор. Все права защищены.</p>
          <a 
            href="https://t.me/articortex"
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center text-primary-400 hover:text-primary-300"
          >
            <FaTelegramPlane className="mr-2" /> Telegram: @articortex
          </a>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen">
            <Navbar />
            <Hero />
            <Features />
            <Benefits />
            <Stats />
            <FAQ />
            <CTA />
            <Footer />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
