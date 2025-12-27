
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Shield, CheckCircle, ArrowRight, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { NAV_ITEMS, CAST_CLASSES, REVIEWS, FAQS } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Interaction utility for hover movement
  const interactiveClass = "transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] active:scale-95 cursor-pointer";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 selection:bg-yellow-500 selection:text-black">
      {/* Header & Navigation */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-serif tracking-widest text-yellow-500 font-bold">
            gold
          </div>
          
          <button 
            onClick={toggleMenu}
            className={`p-2 rounded-full hover:bg-white/10 transition-colors z-[110] relative ${interactiveClass}`}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* 
        全画面バックドロップ: 
        メニューが開いているとき、メニュー以外の場所をクリックすると閉じるための広範なオーバーレイ。
      */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[115] transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* 右側のナビゲーションドロワー */}
      <div className={`fixed right-0 top-0 h-full w-[85%] max-w-[360px] bg-[#222222] z-[120] shadow-[-20px_0_50px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-in-out flex flex-col p-8 pt-6 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* 閉じるボタン (参考画像に合わせた右上の✕) */}
        <div className="flex justify-end mb-12">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className={`text-white p-2 ${interactiveClass}`}
          >
            <X size={48} strokeWidth={1.5} />
          </button>
        </div>

        <nav className="flex flex-col space-y-4 px-2">
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-xl py-4 border-b border-gray-600 font-medium hover:text-yellow-500 transition-colors flex justify-between items-center group"
            >
              {item.label}
              <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </nav>
        
        <div className="mt-auto space-y-4 pb-12">
          <p className="text-xs text-gray-500 text-center mb-6 tracking-widest uppercase">Premium Matching Service</p>
          <a 
            href="https://line.me" 
            className={`w-full bg-[#06C755] text-white py-4 rounded-xl flex items-center justify-center gap-2 font-bold shadow-lg ${interactiveClass}`}
          >
            <MessageCircle size={20} /> LINEで今すぐ予約
          </a>
          <a 
            href="tel:0000000000" 
            className={`w-full bg-white text-black py-4 rounded-xl flex items-center justify-center gap-2 font-bold shadow-lg ${interactiveClass}`}
          >
            <Phone size={20} /> 電話で相談する
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-[#0a0a0a] -z-10"></div>
        
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
            最高峰の夜に、<br />
            <span className="text-yellow-500">極上の華</span>を。
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            goldは、厳選されたキャストがあなたの特別な夜を彩る、ハイクラスなギャラ飲みマッチングサービスです。最短30分で、理想のキャストをキャスティング。
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a 
              href="https://line.me" 
              className={`bg-[#06C755] text-white px-10 py-5 rounded-full flex items-center gap-3 font-bold text-lg shadow-xl shadow-green-900/20 ${interactiveClass}`}
            >
              <MessageCircle size={24} /> LINEで今すぐ予約
            </a>
            <a 
              href="tel:0000000000" 
              className={`bg-white text-black px-10 py-5 rounded-full flex items-center gap-3 font-bold text-lg shadow-xl ${interactiveClass}`}
            >
              <Phone size={24} /> 電話で相談する
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        
        {/* About Section */}
        <section id="about" className="scroll-mt-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif text-yellow-500 mb-6">ギャラ飲みとは</h2>
              <p className="text-gray-300 leading-loose mb-6">
                「ギャラ飲み」とは、飲み会に参加する女性に対して報酬（ギャランティ）を支払うマッチング形態です。接待、友人とのお祝い、あるいは一人での優雅な晩酌など、あらゆるシーンに最高のエンターテインメントを提供します。
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-bold">最短30分で合流</h3>
                    <p className="text-sm text-gray-400">現在地から近くにいるキャストをすぐにお呼びいただけます。</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-bold">明朗な料金体系</h3>
                    <p className="text-sm text-gray-400">延長料金や指名料など、すべて明確にアプリ上でご確認いただけます。</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=1000" alt="About Drink" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Cast Classes */}
        <section id="classes" className="scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-yellow-500 mb-4">キャストのクラス</h2>
            <p className="text-gray-400">あなたのニーズに合わせた3つのグレードをご用意</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {CAST_CLASSES.map((c, i) => (
              <div key={i} className={`p-8 rounded-3xl border-2 bg-zinc-900/50 backdrop-blur-sm ${c.color} ${interactiveClass}`}>
                <h3 className="text-2xl font-bold mb-4">{c.name}</h3>
                <div className="text-3xl font-serif mb-6">{c.price}</div>
                <p className="text-sm leading-relaxed text-gray-300">{c.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features / Why Choose Us */}
        <section id="features" className="scroll-mt-24 bg-zinc-900/30 p-12 rounded-3xl border border-white/5">
          <h2 className="text-3xl font-serif text-yellow-500 text-center mb-16">goldが選ばれている理由</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-yellow-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={36} className="text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">徹底した審査制</h3>
              <p className="text-gray-400 text-sm">容姿だけでなく、マナーや会話力も厳しくチェック。満足度100%を目指しています。</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={36} className="text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">24時間サポート</h3>
              <p className="text-gray-400 text-sm">トラブル対応や疑問点など、コンシェルジュがLINEで24時間体制でサポート。</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star size={36} className="text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">プライバシー保護</h3>
              <p className="text-gray-400 text-sm">完全会員制。やり取りは暗号化され、プライベートが外に漏れることはありません。</p>
            </div>
          </div>
        </section>

        {/* Usage Guide */}
        <section id="usage" className="scroll-mt-24">
          <h2 className="text-3xl font-serif text-yellow-500 text-center mb-16">goldのご利用方法</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: '友だち追加', desc: 'LINE公式アカウントを友だち追加してください。' },
              { step: '02', title: '条件を指定', desc: '場所、人数、キャストのクラスを選びます。' },
              { step: '03', title: 'キャスト合流', desc: '最短30分で、ご指定の場所にキャストが到着。' },
              { step: '04', title: '後払い決済', desc: 'お支払いはクレジットカードで。後日スマートに。' }
            ].map((s, i) => (
              <div key={i} className="relative p-6 bg-zinc-900 rounded-2xl border border-white/5">
                <span className="text-4xl font-serif text-yellow-500/30 font-bold block mb-4">{s.step}</span>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400">{s.desc}</p>
                {i < 3 && <ArrowRight className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 text-white/20" />}
              </div>
            ))}
          </div>
        </section>

        {/* Safety */}
        <section id="safety" className="scroll-mt-24 text-center max-w-3xl mx-auto">
          <Shield size={64} className="mx-auto text-yellow-500 mb-8" />
          <h2 className="text-3xl font-serif text-yellow-500 mb-6">安心安全への取り組み</h2>
          <p className="text-gray-300 mb-8">
            goldでは、ゲスト・キャスト双方が安心して利用できるよう、公的身分証による本人確認を100%実施。独自の監視システムにより、不適切な利用者をリアルタイムで排除しています。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-zinc-900 p-4 rounded-xl text-left border-l-4 border-yellow-500">24時間365日のパトロール</div>
            <div className="bg-zinc-900 p-4 rounded-xl text-left border-l-4 border-yellow-500">完全キャッシュレス決済</div>
            <div className="bg-zinc-900 p-4 rounded-xl text-left border-l-4 border-yellow-500">公的身分証の確認義務化</div>
            <div className="bg-zinc-900 p-4 rounded-xl text-left border-l-4 border-yellow-500">相互評価システムによる信頼性</div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="scroll-mt-24">
          <h2 className="text-3xl font-serif text-yellow-500 text-center mb-16">利用者の口コミ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {REVIEWS.map((r, i) => (
              <div key={i} className={`p-8 bg-zinc-900 rounded-3xl border border-white/5 ${interactiveClass}`}>
                <div className="flex gap-1 mb-4 text-yellow-500">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 italic mb-6">"{r.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center font-bold text-yellow-500">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold">{r.name}</div>
                    <div className="text-xs text-gray-500">{r.age}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-yellow-500 text-center mb-16">よくある質問</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-white/10 rounded-xl overflow-hidden">
                <button 
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full p-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold">{faq.question}</span>
                  {expandedFaq === i ? <ChevronUp /> : <ChevronDown />}
                </button>
                {expandedFaq === i && (
                  <div className="p-5 bg-zinc-900/50 text-gray-400 border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer - Sticky bar対策のため、下部にさらに広いパディング (pb-48) を確保 */}
      <footer className="bg-black pt-16 pb-48 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-3xl font-serif font-bold text-yellow-500">gold</div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">利用規約</a>
            <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-white transition-colors">特商法に基づく表記</a>
            <a href="#" className="hover:text-white transition-colors">会社概要</a>
          </div>
          <div className="text-gray-600 text-xs text-center md:text-right">
            © 2024 gold Premium Matching Service.<br className="md:hidden" /> All rights reserved.
          </div>
        </div>
      </footer>

      {/* 固定予約ボタンバー */}
      <div className="fixed bottom-0 left-0 right-0 z-[130] p-4 md:p-6 flex justify-center pointer-events-none">
        <div className="bg-black/90 backdrop-blur-2xl border border-white/10 p-3 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.8)] flex gap-3 pointer-events-auto">
          <a 
            href="https://line.me" 
            className={`bg-[#06C755] text-white px-6 md:px-10 py-4 rounded-full flex items-center gap-2 font-bold text-sm md:text-base ${interactiveClass}`}
          >
            <MessageCircle size={20} /> LINEで即予約
          </a>
          <a 
            href="tel:0000000000" 
            className={`bg-white text-black px-6 md:px-10 py-4 rounded-full flex items-center gap-2 font-bold text-sm md:text-base ${interactiveClass}`}
          >
            <Phone size={20} /> 電話で相談
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
