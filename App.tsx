
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, MessageCircle, Shield, CheckCircle, ArrowRight, Star, ChevronDown, ChevronUp, ArrowLeft, Building2, Gavel } from 'lucide-react';
import { NAV_ITEMS, CAST_CLASSES, REVIEWS, FAQS } from './constants';

type ViewState = 'home' | 'terms' | 'privacy' | 'legal' | 'company';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [currentView, setCurrentView] = useState<ViewState>('home');
  
  const aboutRef = useRef<HTMLElement>(null);

  // Interaction utility for hover/active movement
  const interactiveClass = "transition-all duration-300 transform active:scale-95 cursor-pointer md:hover:-translate-y-1 md:hover:scale-[1.02]";

  // Handle scroll to show/hide sticky bar (starts from "About" section)
  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        // Show bar after passing the hero section
        setShowStickyBar(rect.top < window.innerHeight * 0.7);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation handler
  const navigateTo = (view: ViewState) => {
    setCurrentView(view);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // Sub-page content renderer
  const renderSubPage = () => {
    const content: Record<Exclude<ViewState, 'home'>, { title: string; icon: React.ReactNode; body: React.ReactNode }> = {
      terms: {
        title: '利用規約',
        icon: <Gavel className="text-yellow-500" />,
        body: (
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-bold text-white mb-2">第1条（適用）</h3>
              <p>本規約は、株式会社GOLD（以下、「当社」）が提供するマッチングサービス「gold」の利用に関わる一切の関係に適用されます。</p>
            </section>
            <section>
              <h3 className="text-lg font-bold text-white mb-2">第2条（登録）</h3>
              <p>本サービスの利用を希望する者は、当社の定める方法によって利用登録を申請するものとします。</p>
            </section>
            <section>
              <h3 className="text-lg font-bold text-white mb-2">第3条（禁止事項）</h3>
              <p>ユーザーは、法令または公序良俗に反する行為、本サービスの運営を妨害する行為を行ってはなりません。</p>
            </section>
          </div>
        )
      },
      privacy: {
        title: 'プライバシーポリシー',
        icon: <Shield className="text-yellow-500" />,
        body: (
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-bold text-white mb-2">個人情報の管理</h3>
              <p>当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、安全対策を実施し個人情報の厳重な管理を行ないます。</p>
            </section>
            <section>
              <h3 className="text-lg font-bold text-white mb-2">個人情報の利用目的</h3>
              <p>お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内、ご質問に対する回答として、電子メールや資料のご送付に利用いたします。</p>
            </section>
          </div>
        )
      },
      legal: {
        title: '特定商取引法に基づく表記',
        icon: <CheckCircle className="text-yellow-500" />,
        body: (
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-2 py-3 border-b border-white/5">
              <span className="text-gray-500 text-xs">販売業者</span>
              <span className="text-sm font-bold">株式会社GOLD</span>
            </div>
            <div className="grid grid-cols-1 gap-2 py-3 border-b border-white/5">
              <span className="text-gray-500 text-xs">運営責任者</span>
              <span className="text-sm font-bold">山田 太郎</span>
            </div>
            <div className="grid grid-cols-1 gap-2 py-3 border-b border-white/5">
              <span className="text-gray-500 text-xs">所在地</span>
              <span className="text-sm font-bold">東京都港区六本木 X-X-X</span>
            </div>
            <div className="grid grid-cols-1 gap-2 py-3 border-b border-white/5">
              <span className="text-gray-500 text-xs">支払方法</span>
              <span className="text-sm font-bold">クレジットカード決済、Apple Pay、Google Pay</span>
            </div>
            <div className="grid grid-cols-1 gap-2 py-3 border-b border-white/5">
              <span className="text-gray-500 text-xs">商品代金以外の必要料金</span>
              <span className="text-sm font-bold">なし（インターネット接続費用は利用者負担）</span>
            </div>
          </div>
        )
      },
      company: {
        title: '会社概要',
        icon: <Building2 className="text-yellow-500" />,
        body: (
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-2 py-3 border-b border-white/5">
              <span className="text-gray-500 text-xs">社名</span>
              <span className="text-sm font-bold">株式会社GOLD / GOLD Inc.</span>
            </div>
            <div className="grid grid-cols-1 gap-2 py-3 border-b border-white/5">
              <span className="text-gray-500 text-xs">設立</span>
              <span className="text-sm font-bold">2023年4月1日</span>
            </div>
            <div className="grid grid-cols-1 gap-2 py-3 border-b border-white/5">
              <span className="text-gray-500 text-xs">資本金</span>
              <span className="text-sm font-bold">10,000,000円</span>
            </div>
            <div className="grid grid-cols-1 gap-2 py-3 border-b border-white/5">
              <span className="text-gray-500 text-xs">事業内容</span>
              <span className="text-sm font-bold">WEBマッチングプラットフォームの運営・管理、イベント企画、コンサルティング事業</span>
            </div>
          </div>
        )
      }
    };

    const page = content[currentView as keyof typeof content];

    return (
      <div className="min-h-screen bg-[#0a0a0a] text-gray-100 p-6 md:p-12 pb-32">
        <button 
          onClick={() => setCurrentView('home')}
          className={`flex items-center gap-2 text-yellow-500 mb-10 font-bold ${interactiveClass}`}
        >
          <ArrowLeft size={20} /> ホームに戻る
        </button>
        <div className="max-w-3xl mx-auto bg-zinc-900/50 p-8 rounded-[2rem] border border-white/10 shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-yellow-500/10 p-3 rounded-2xl">{page.icon}</div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-yellow-500">
              {page.title}
            </h1>
          </div>
          <div className="text-gray-300 leading-relaxed text-sm md:text-base">
            {page.body}
          </div>
        </div>
        <footer className="mt-16 text-center text-gray-600 text-[10px] tracking-widest uppercase">
          © 2024 gold Premium Matching Service.
        </footer>
      </div>
    );
  };

  if (currentView !== 'home') return renderSubPage();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 selection:bg-yellow-500 selection:text-black overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-black/80 backdrop-blur-md border-b border-white/10 h-16 md:h-20">
        <div className="max-w-7xl mx-auto px-5 h-full flex items-center justify-between">
          <div className="text-xl md:text-2xl font-serif tracking-[0.2em] text-yellow-500 font-bold">
            gold
          </div>
          <button 
            onClick={() => setIsMenuOpen(true)}
            className={`p-2 rounded-full hover:bg-white/10 transition-colors ${interactiveClass}`}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Navigation Drawer (Scrollable Optimization) */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[115] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div className={`fixed right-0 top-0 h-full w-[85%] max-w-[340px] bg-[#111] z-[120] shadow-[-10px_0_30px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-6 border-b border-white/5 shrink-0">
          <span className="text-yellow-500 font-serif tracking-widest font-bold">MENU</span>
          <button onClick={() => setIsMenuOpen(false)} className="p-2 text-white hover:text-yellow-500"><X size={32} /></button>
        </div>

        <nav className="flex-1 overflow-y-auto overflow-x-hidden p-6 space-y-1">
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-lg py-4 border-b border-white/5 font-medium text-gray-200 hover:text-yellow-500 transition-colors flex justify-between items-center"
            >
              {item.label}
              <ArrowRight size={18} className="text-gray-600" />
            </a>
          ))}
          
          <div className="pt-8 space-y-4">
            <a 
              href="https://line.me" 
              className={`w-full bg-[#06C755] text-white py-4 rounded-xl flex items-center justify-center gap-2 font-bold shadow-lg ${interactiveClass}`}
            >
              <MessageCircle size={20} /> LINEで予約
            </a>
            <a 
              href="tel:0000000000" 
              className={`w-full bg-white text-black py-4 rounded-xl flex items-center justify-center gap-2 font-bold shadow-lg ${interactiveClass}`}
            >
              <Phone size={20} /> 電話で予約
            </a>
          </div>
          
          <div className="pt-8 pb-10 flex flex-col gap-4 text-sm text-gray-500 border-t border-white/5 mt-6">
            <button onClick={() => navigateTo('terms')} className="text-left hover:text-white transition-colors py-1">利用規約</button>
            <button onClick={() => navigateTo('privacy')} className="text-left hover:text-white transition-colors py-1">プライバシーポリシー</button>
            <button onClick={() => navigateTo('legal')} className="text-left hover:text-white transition-colors py-1">特定商取引法</button>
            <button onClick={() => navigateTo('company')} className="text-left hover:text-white transition-colors py-1">会社概要</button>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6 min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-40 scale-105"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-[#0a0a0a] -z-10"></div>
        
        <div className="max-w-4xl px-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 leading-tight tracking-tight">
            最高峰の夜に、<br />
            <span className="text-yellow-500">極上の華</span>を。
          </h1>
          <p className="text-base md:text-xl text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed opacity-90">
            厳選されたキャストがあなたの特別な時間を彩る、<br className="hidden md:block" />ハイクラスなマッチングサービス「gold」。
          </p>
          <div className="flex flex-col gap-4 items-center">
            <a 
              href="https://line.me" 
              className={`w-full max-w-[280px] bg-[#06C755] text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 font-bold text-lg shadow-2xl ${interactiveClass}`}
            >
              <MessageCircle size={22} /> LINEで予約
            </a>
            <a 
              href="tel:0000000000" 
              className={`w-full max-w-[280px] bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full flex items-center justify-center gap-3 font-bold text-lg shadow-xl ${interactiveClass}`}
            >
              <Phone size={22} /> 電話で予約
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-24 md:space-y-40">
        
        {/* About Section */}
        <section id="about" ref={aboutRef} className="scroll-mt-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded text-[10px] font-bold mb-4 tracking-widest uppercase border border-yellow-500/20">Experience Luxury</div>
              <h2 className="text-3xl md:text-5xl font-serif text-yellow-500 mb-6 font-bold leading-tight">ギャラ飲みとは</h2>
              <p className="text-gray-300 leading-relaxed mb-8 text-sm md:text-lg">
                「gold」は、一流のキャストとハイクラスなゲストを繋ぐマッチングサービスです。接待の盛り上げや、特別な日の彩り、あるいは日常を離れた優雅なひとときに。厳正な審査を通過したキャストが、あなたの夜を最高級のエンターテインメントへと昇華させます。
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: CheckCircle, text: '最短30分で合流可能' },
                  { icon: CheckCircle, text: '24時間体制サポート' },
                  { icon: CheckCircle, text: '完全後払いで安心' },
                  { icon: CheckCircle, text: '身元確認済みキャスト' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-zinc-900/50 p-4 rounded-2xl border border-white/5">
                    <div className="bg-yellow-500/20 p-1.5 rounded-lg"><item.icon className="text-yellow-500" size={18} /></div>
                    <span className="font-bold text-xs md:text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] order-1 md:order-2">
              <img src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=1000" alt="Atmosphere" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Cast Classes */}
        <section id="classes" className="scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-yellow-500 mb-4 font-bold">キャストのクラス</h2>
            <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">用途やご予算に合わせて、最適なキャストをお選びいただけます。全キャスト、面接・審査済みです。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {CAST_CLASSES.map((c, i) => (
              <div key={i} className={`p-8 rounded-[2.5rem] border bg-zinc-900/40 backdrop-blur-md ${c.color} flex flex-col justify-between ${interactiveClass}`}>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{c.name}</h3>
                  <div className="text-2xl md:text-4xl font-serif mb-6">{c.price}</div>
                  <p className="text-xs md:text-sm leading-relaxed text-gray-300 opacity-80">{c.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="scroll-mt-24 bg-zinc-900/30 p-8 md:p-20 rounded-[3rem] border border-white/5 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-500/5 blur-[100px] rounded-full"></div>
          <h2 className="text-2xl md:text-4xl font-serif text-yellow-500 text-center mb-20 font-bold tracking-[0.2em]">WHY gold?</h2>
          <div className="grid md:grid-cols-3 gap-16 relative z-10">
            {[
              { icon: Shield, title: '厳格な審査制度', desc: '面接通過率は10%以下。ルックス、マナー、会話力、すべてを兼ね備えたキャストのみが在籍。' },
              { icon: CheckCircle, title: '明朗な会計システム', desc: '延長料金や指名料は事前に確認可能。不透明な請求やぼったくりは一切ございません。' },
              { icon: Star, title: '完全会員制の安心感', desc: 'プライバシーを最優先。相互評価システムにより、質の高いコミュニティを維持しています。' }
            ].map((f, i) => (
              <div key={i} className="text-center group">
                <div className="bg-yellow-500/10 w-24 h-24 rounded-[2rem] flex items-center justify-center mx-auto mb-8 group-hover:bg-yellow-500/20 transition-all duration-500 group-hover:rotate-6">
                  <f.icon size={42} className="text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed px-4">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Usage Guide */}
        <section id="usage" className="scroll-mt-24 px-2">
          <h2 className="text-2xl md:text-4xl font-serif text-yellow-500 text-center mb-20 font-bold">ご利用の流れ</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/5 -z-10"></div>
            {[
              { step: '01', title: 'LINE登録', desc: '公式LINEを友だち追加し、会員登録を完了させてください。' },
              { step: '02', title: '条件を入力', desc: 'ご希望の場所、時間、キャストの人数とクラスを選択します。' },
              { step: '03', title: '合流・満喫', desc: 'キャストが合流します。特別な時間をお楽しみください。' },
              { step: '04', title: 'スマート決済', desc: '終了後はクレジットカード等で自動決済。領収書も即時発行。' }
            ].map((s, i) => (
              <div key={i} className={`flex md:flex-col gap-5 md:gap-0 p-8 bg-zinc-900/50 rounded-3xl border border-white/5 relative group transition-all duration-500 hover:bg-zinc-800/50 ${interactiveClass}`}>
                <span className="text-4xl md:text-6xl font-serif text-yellow-500/10 font-bold group-hover:text-yellow-500/20 transition-colors">{s.step}</span>
                <div className="md:mt-6">
                  <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="scroll-mt-24">
          <h2 className="text-2xl md:text-4xl font-serif text-yellow-500 text-center mb-16 font-bold">ゲストの声</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {REVIEWS.map((r, i) => (
              <div key={i} className={`p-8 md:p-10 bg-zinc-900/50 rounded-[2.5rem] border border-white/5 flex flex-col ${interactiveClass}`}>
                <div className="flex gap-1 mb-6 text-yellow-500">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 text-sm md:text-lg italic mb-10 leading-relaxed flex-1">"{r.content}"</p>
                <div className="flex items-center gap-5 border-t border-white/5 pt-8">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-2xl flex items-center justify-center font-bold text-yellow-500">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-base">{r.name}</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">{r.age}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24 max-w-3xl mx-auto px-2">
          <h2 className="text-2xl md:text-4xl font-serif text-yellow-500 text-center mb-16 font-bold tracking-widest uppercase">FAQ</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-white/5 rounded-3xl overflow-hidden bg-zinc-900/20 backdrop-blur-sm">
                <button 
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between text-left transition-colors hover:bg-white/5"
                >
                  <span className="font-bold text-sm md:text-base pr-4 leading-tight">{faq.question}</span>
                  <div className={`transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`}>
                    <ChevronDown size={24} className={expandedFaq === i ? 'text-yellow-500' : 'text-gray-600'} />
                  </div>
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6 text-gray-400 text-xs md:text-sm leading-relaxed border-t border-white/5 pt-5">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black pt-20 pb-40 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-14">
          <div className="text-3xl font-serif font-bold text-yellow-500 tracking-[0.4em]">gold</div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-5 text-[10px] md:text-xs text-gray-500 uppercase font-bold tracking-widest">
            <button onClick={() => navigateTo('terms')} className="hover:text-yellow-500 transition-colors">利用規約</button>
            <button onClick={() => navigateTo('privacy')} className="hover:text-yellow-500 transition-colors">プライバシーポリシー</button>
            <button onClick={() => navigateTo('legal')} className="hover:text-yellow-500 transition-colors">特定商取引法</button>
            <button onClick={() => navigateTo('company')} className="hover:text-yellow-500 transition-colors">会社概要</button>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-700 text-[10px] tracking-[0.2em] font-medium text-center leading-loose">
              20歳未満の飲酒は法律で禁止されています。<br className="md:hidden" />
              当サービスは健全なマッチングの場を提供します。
            </p>
            <div className="text-gray-800 text-[9px] tracking-widest">
              © 2024 GOLD PREMIUM. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Reservation Bar (Visible after Hero) */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-[130] p-4 flex justify-center transition-all duration-1000 ease-in-out transform ${showStickyBar ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}`}
      >
        <div className="bg-zinc-900/90 backdrop-blur-3xl border border-white/10 p-2 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex gap-2 w-full max-w-[360px]">
          <a 
            href="https://line.me" 
            className={`flex-1 bg-[#06C755] text-white py-3.5 rounded-full flex items-center justify-center gap-2 font-bold text-sm shadow-xl ${interactiveClass}`}
          >
            <MessageCircle size={20} /> LINE予約
          </a>
          <a 
            href="tel:0000000000" 
            className={`flex-1 bg-white text-black py-3.5 rounded-full flex items-center justify-center gap-2 font-bold text-sm shadow-xl ${interactiveClass}`}
          >
            <Phone size={20} /> 電話予約
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
