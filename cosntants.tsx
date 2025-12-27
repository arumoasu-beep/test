
import { NavItem, CastClass, Review, FAQItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'ギャラ飲みとは', href: '#about' },
  { label: 'キャストのクラス', href: '#classes' },
  { label: 'goldが選ばれている理由', href: '#features' },
  { label: 'goldのご利用方法', href: '#usage' },
  { label: 'ご利用シーン', href: '#scenes' },
  { label: '安心安全への取り組み', href: '#safety' },
  { label: '利用者の口コミ', href: '#reviews' },
  { label: 'よくある質問', href: '#faq' },
];

export const CAST_CLASSES: CastClass[] = [
  {
    name: 'スタンダード',
    price: '¥6,000 / 1h',
    description: '面接通過率10%をクリアした、愛嬌とルックスを兼ね備えた女性。',
    color: 'border-slate-400 text-slate-400'
  },
  {
    name: 'VIP',
    price: '¥12,000 / 1h',
    description: 'モデル、インフルエンサー、芸能関係など、圧倒的な華やかさを持つクラス。',
    color: 'border-yellow-500 text-yellow-500'
  },
  {
    name: 'ロイヤル',
    price: '¥25,000 / 1h',
    description: 'goldが誇る最高峰のキャスト。容姿・気配り・教養すべてが完璧な極上の体験。',
    color: 'border-purple-500 text-purple-500'
  }
];

export const REVIEWS: Review[] = [
  {
    name: 'T.K 様',
    age: '40代 経営者',
    content: '急な接待で華が必要になり利用しました。呼んでから30分で綺麗な方が2名来てくださり、非常に助かりました。キャストの質が非常に高いです。',
    rating: 5
  },
  {
    name: 'M.S 様',
    age: '30代 IT関連',
    content: '友達との飲み会に利用。アプリの操作も簡単で、LINEですぐに連絡が取れるのが安心です。キャストの方もノリが良く、最高の夜になりました。',
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    question: '予約はいつまでにすれば良いですか？',
    answer: '最短30分前からの当日予約が可能です。もちろん数日前からの事前予約も承っております。'
  },
  {
    question: 'キャストの指名はできますか？',
    answer: 'はい、可能です。お気に入りのキャストに個別にリクエストを送る機能がございます。'
  },
  {
    question: '領収書の発行は可能ですか？',
    answer: 'はい。アプリ内またはLINE経由でPDF形式の領収書を即時発行いただけます。'
  }
];
