"use client";

import React from 'react';
import {Settings,Share2,Edit3,FileText,Users,Heart,Mail,Globe,Calendar,Image as ImageIcon,Bookmark,FolderOpen,ArrowUpRight} from 'lucide-react';


export default function ProfilePage(){
const user={
name:"Александр Власов",
role:"Junior Frontend Developer",
username:"@alex_dev",
bio:"Cтудент вэб-разработки",
skills:["Next.js","TypeScript","Tailwind CSS","React","Node.js"],
email:"alex@example.com",
website:"https://alexdev.ru",
joinedDate:"Сентябрь 2025",
stats:[
{id:1,label:"Публикации",value:"1",icon:FileText},
{id:2,label:"Подписчики",value:"4",icon:Users},
{id:3,label:"Подписки",value:"3",icon:Users},
{id:4,label:"Лайки",value:"10",icon:Heart}
]
};

const [activeTab, setActiveTab] = React.useState('all');

return(
<div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col justify-between antialiased">
<main className="max-w-4xl w-full mx-auto px-4 py-8 space-y-6">
<div className="bg-white border border-neutral-200 rounded-xl shadow-sm overflow-hidden">
<div className="h-32 bg-gradient-to-r from-neutral-200 to-neutral-300 w-full"/>
<div className="relative pt-0 sm:flex-row sm:items-end sm:justify-between gap-4 -mt-16 px-6 pb-6 flex flex-col items-center sm:text-left text-center">
<div className="flex flex-col sm:flex-row items-center sm:items-end gap-4">
<div className="w-32 h-32 border-4 border-white shadow-md rounded-full overflow-hidden bg-neutral-200 shrink-0">
<img src="https://unsplash.com" alt={user.name} className="w-full h-full object-cover"/>
</div>
<div className="mb-2">
<h1 className="text-2xl font-bold tracking-tight">{user.name}</h1>
<p className="text-sm font-medium text-neutral-500">{user.role}</p>
<p className="text-xs text-neutral-400 mt-0.5">{user.username}</p>
</div>
</div>
<div className="flex items-center gap-2 mb-2 justify-center">
<button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-neutral-900 text-white hover:bg-neutral-800 h-9 px-3 gap-2">
<Edit3 className="w-4 h-4"/><span>Редактировать</span>
</button>
<button className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-neutral-200 bg-white hover:bg-neutral-100 h-9 px-3 gap-2">
<Share2 className="w-4 h-4"/><span className="hidden sm:inline">Поделиться</span>
</button>
<button className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white hover:bg-neutral-100 w-9 h-9" aria-label="Настройки">
<Settings className="w-4 h-4"/>
</button>
</div>
</div>
<div className="px-6 pb-6 text-sm text-neutral-600 max-w-2xl leading-relaxed">{user.bio}</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
{user.stats.map((stat)=>{
const Icon=stat.icon;
return(
<div key={stat.id} className="bg-white border border-neutral-200 rounded-xl shadow-sm p-4 flex items-center justify-between">
<div>
<p className="text-xs font-medium text-neutral-500 uppercase tracking-wider">{stat.label}</p>
<p className="text-2xl font-bold tracking-tight mt-1">{stat.value}</p>
</div>
<div className="p-2.5 bg-neutral-100 rounded-xl text-neutral-600"><Icon className="w-5 h-5"/></div>
</div>
);
})}
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
<div className="bg-white border border-neutral-200 rounded-xl shadow-sm p-5 space-y-5 text-sm">
<h3 className="text-base font-semibold">Контакты и Навыки</h3>
<div className="space-y-2">
<h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Навыки</h4>
<div className="flex flex-wrap gap-1.5">
{user.skills.map((skill)=>(
<span key={skill} className="px-2 py-0.5 bg-neutral-100 text-neutral-700 rounded text-xs font-medium border border-neutral-200/50">{skill}</span>
))}
</div>
</div>
<div className="space-y-2.5 border-t border-neutral-100 pt-4">
<h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Информация</h4>
<div className="flex items-center gap-2.5 text-neutral-600">
<Mail className="w-4 h-4 text-neutral-400 shrink-0"/>
<a href={`mailto:${user.email}`} className="hover:underline truncate">{user.email}</a>
</div>
<div className="flex items-center gap-2.5 text-neutral-600">
<Globe className="w-4 h-4 text-neutral-400 shrink-0"/>
<a href={user.website} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1 truncate">{user.website.replace('https://','')}<ArrowUpRight className="w-3 h-3"/></a>
</div>
<div className="flex items-center gap-2.5 text-neutral-600">
<Calendar className="w-4 h-4 text-neutral-400 shrink-0"/><span>Регистрация: {user.joinedDate}</span>
</div>
</div>
</div>
<div className="md:col-span-2 space-y-4">
<div className="w-full flex bg-neutral-100 p-1 border rounded-lg grid grid-cols-4">
<button onClick={()=>setActiveTab('all')} className={`text-xs sm:text-sm py-1.5 font-medium rounded-md transition-all ${activeTab==='all'?'bg-white shadow-sm text-neutral-900':'text-neutral-500 hover:text-neutral-900'}`}>Все посты</button>
<button onClick={()=>setActiveTab('media')} className={`text-xs sm:text-sm py-1.5 font-medium rounded-md transition-all ${activeTab==='media'?'bg-white shadow-sm text-neutral-900':'text-neutral-500 hover:text-neutral-900'}`}>Медиа</button>
<button onClick={()=>setActiveTab('docs')} className={`text-xs sm:text-sm py-1.5 font-medium rounded-md transition-all ${activeTab==='docs'?'bg-white shadow-sm text-neutral-900':'text-neutral-500 hover:text-neutral-900'}`}>Документы</button>
<button onClick={()=>setActiveTab('fav')} className={`text-xs sm:text-sm py-1.5 font-medium rounded-md transition-all ${activeTab==='fav'?'bg-white shadow-sm text-neutral-900':'text-neutral-500 hover:text-neutral-900'}`}>Избранное</button>
</div>
{activeTab==='all' && (
<div className="bg-white border border-neutral-200 rounded-xl shadow-sm p-5 space-y-2">
<span className="text-xs text-neutral-400">2 дня назад</span>
<h2 className="text-lg font-bold">Вёрстка</h2>
<p className="text-sm text-neutral-600">Я устал эту фигню кодить, а впереди ещё 2 задания...</p>
</div>
)}
{activeTab==='media' && <div className="bg-white border border-neutral-200 rounded-xl shadow-sm p-8 text-center text-neutral-500"><ImageIcon className="w-8 h-8 mx-auto mb-2 opacity-50"/><p className="text-sm">Нет медиафайлов</p></div>}
{activeTab==='docs' && <div className="bg-white border border-neutral-200 rounded-xl shadow-sm p-8 text-center text-neutral-500"><FolderOpen className="w-8 h-8 mx-auto mb-2 opacity-50"/><p className="text-sm">Список пуст</p></div>}
{activeTab==='fav' && <div className="bg-white border border-neutral-200 rounded-xl shadow-sm p-8 text-center text-neutral-500"><Bookmark className="w-8 h-8 mx-auto mb-2 opacity-50"/><p className="text-sm">Пусто</p></div>}
</div>
</div>
</main>
<footer className="border-t border-neutral-200 bg-white text-xs text-neutral-500 mt-12">
<div className="max-w-4xl w-full mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-neutral-900 flex items-center justify-center text-white font-black text-[10px]">П</div>
<span>© 2026 Платформа. Все права защищены.</span>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
<nav className="flex items-center gap-4">
<a href="#" className="hover:text-neutral-900 transition-colors">О нас</a>
<a href="#" className="hover:text-neutral-900 transition-colors">Поддержка</a>
<a href="#" className="hover:text-neutral-900 transition-colors">Блог</a>
<a href="#" className="hover:text-neutral-900 transition-colors">Вакансии</a>
</nav>
<div className="hidden sm:block w-[1px] h-4 bg-neutral-200"/>
<nav className="flex items-center gap-4 text-neutral-400">
<a href="#" className="hover:text-neutral-700 transition-colors">Конфиденциальность</a>
<a href="#" className="hover:text-neutral-700 transition-colors">Условия</a>
</nav>
<div className="hidden sm:block w-[1px] h-4 bg-neutral-200"/>
<div className="flex items-center gap-3">
  <a href="#" className="hover:text-neutral-900 flex items-center gap-0.5">GH <ArrowUpRight className="w-3 h-3"/></a>
  <a href="#" className="hover:text-neutral-900 flex items-center gap-0.5">TW <ArrowUpRight className="w-3 h-3"/></a>
  <a href="#" className="hover:text-neutral-900 flex items-center gap-0.5">LN <ArrowUpRight className="w-3 h-3"/></a>
</div>
</div>
</div>
</footer>
</div>
);
}
