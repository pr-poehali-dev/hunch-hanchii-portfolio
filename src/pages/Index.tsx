import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-blue-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Хунч-Ханчия
            </h1>
            <div className="flex gap-6">
              {[
                { id: 'residents', label: 'Жители', icon: 'Users' },
                { id: 'history', label: 'История', icon: 'BookOpen' },
                { id: 'attractions', label: 'Достопримечательности', icon: 'Landmark' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-purple-200 to-pink-200 text-purple-900'
                      : 'hover:bg-purple-100 text-purple-700'
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  <span className="hidden md:inline">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Хунч-Ханчия
            </h2>
            <p className="text-2xl md:text-3xl text-purple-700 mb-4">
              Волшебная страна на кольцах Сатурна
            </p>
            <div className="flex justify-center gap-2 text-4xl animate-float">
              🪐 ✨ 🌙
            </div>
          </div>
          <div className="mt-16 max-w-4xl mx-auto">
            <img
              src="https://cdn.poehali.dev/projects/d94ef5f9-b599-4691-a44b-3e173fc822d6/files/15fcea14-c801-4a88-9226-73faf268a6af.jpg"
              alt="Хунч-Ханчия"
              className="rounded-3xl shadow-2xl w-full animate-fade-in"
            />
          </div>
        </div>
      </section>

      <section id="residents" className="py-20 px-6 bg-gradient-to-r from-pink-100/50 to-purple-100/50">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Icon name="Users" size={48} className="mx-auto mb-4 text-pink-500" />
            <h2 className="text-5xl font-bold mb-4 text-purple-800">Жители Хунч-Ханчии</h2>
            <p className="text-xl text-purple-600">Удивительные существа из далёкого космоса</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden border-2 border-pink-200 hover:shadow-xl transition-shadow">
              <img
                src="https://cdn.poehali.dev/projects/d94ef5f9-b599-4691-a44b-3e173fc822d6/files/05a578ed-3210-4412-b090-60357e8b6a5c.jpg"
                alt="Жители"
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-purple-700">Мирные существа</h3>
                <p className="text-purple-600 leading-relaxed">
                  Жители Хунч-Ханчии — это светящиеся существа, которые питаются энергией звёзд. 
                  Они умеют летать между кольцами Сатурна и общаются с помощью мелодичных звуков, 
                  похожих на колокольчики.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-2 border-blue-200 hover:shadow-xl transition-shadow">
              <CardContent className="p-6 h-full flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🌟</div>
                    <div>
                      <h4 className="font-semibold text-lg text-purple-700 mb-1">Уникальные способности</h4>
                      <p className="text-purple-600">Могут светиться в темноте разными цветами</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🎵</div>
                    <div>
                      <h4 className="font-semibold text-lg text-purple-700 mb-1">Музыкальность</h4>
                      <p className="text-purple-600">Создают волшебные мелодии из космической энергии</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">💫</div>
                    <div>
                      <h4 className="font-semibold text-lg text-purple-700 mb-1">Левитация</h4>
                      <p className="text-purple-600">Парят в воздухе без усилий благодаря особой энергии</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="history" className="py-20 px-6 bg-gradient-to-r from-yellow-100/50 to-pink-100/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Icon name="BookOpen" size={48} className="mx-auto mb-4 text-yellow-600" />
            <h2 className="text-5xl font-bold mb-4 text-purple-800">История страны</h2>
            <p className="text-xl text-purple-600">Тысячелетняя сага космической цивилизации</p>
          </div>
          <div className="space-y-8">
            <Card className="border-2 border-yellow-200 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">✨</div>
                  <div>
                    <h3 className="text-2xl font-semibold text-purple-700 mb-2">Рождение Сатурна</h3>
                    <p className="text-sm text-purple-500 mb-3">В начале времён</p>
                    <p className="text-purple-600 leading-relaxed">
                      Давным-давно великая создательница <span className="font-semibold text-pink-600">Глебусик</span> своими 
                      руками создала планету Сатурн. Она вылепила её из космической пыли и звёздного света, 
                      украсила волшебными кольцами и наполнила особой энергией.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-pink-200 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">🏰</div>
                  <div>
                    <h3 className="text-2xl font-semibold text-purple-700 mb-2">Тайна Подземного Города</h3>
                    <p className="text-sm text-purple-500 mb-3">Великая загадка</p>
                    <p className="text-purple-600 leading-relaxed">
                      После создания Сатурна Глебусик построила под его поверхностью величественный 
                      подземный город. <span className="font-semibold text-purple-700">Никто не знает, где он находится</span> — 
                      это самая большая тайна Хунч-Ханчии. Говорят, что город светится изнутри и 
                      наполнен древней магией.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-200 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">🌟</div>
                  <div>
                    <h3 className="text-2xl font-semibold text-purple-700 mb-2">Появление Жителей</h3>
                    <p className="text-sm text-purple-500 mb-3">Новая эра</p>
                    <p className="text-purple-600 leading-relaxed">
                      Позже на Сатурн начали прибывать другие жители из разных уголков вселенной. 
                      Они были очарованы красотой планеты и мягким светом её колец. Все они до сих 
                      пор ищут легендарный подземный город Глебусик, надеясь разгадать его тайны.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="attractions" className="py-20 px-6 bg-gradient-to-r from-blue-100/50 to-purple-100/50">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Icon name="Landmark" size={48} className="mx-auto mb-4 text-blue-500" />
            <h2 className="text-5xl font-bold mb-4 text-purple-800">Достопримечательности</h2>
            <p className="text-xl text-purple-600">Чудеса космической архитектуры</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-2 border-blue-200 hover:shadow-xl transition-shadow mb-8">
              <img
                src="https://cdn.poehali.dev/projects/d94ef5f9-b599-4691-a44b-3e173fc822d6/files/ed4d132b-7977-40df-abf0-d1ed84886341.jpg"
                alt="Храм Света"
                className="w-full h-80 object-cover"
              />
              <CardContent className="p-8">
                <h3 className="text-3xl font-semibold mb-4 text-purple-700">Храм Вечного Света</h3>
                <p className="text-purple-600 leading-relaxed mb-6">
                  Древнейшее сооружение Хунч-Ханчии, парящее в центре главного кольца Сатурна. 
                  Храм излучает мягкое свечение, которое видно со всех уголков страны. Внутри 
                  храма находится Кристалл Гармонии — источник энергии всей цивилизации.
                </p>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '🎭', title: 'Театр Звёзд', desc: 'Космические представления под открытым небом' },
                { icon: '🌊', title: 'Озёра Сияния', desc: 'Парящие водоёмы из жидкого света' },
                { icon: '🎨', title: 'Галерея Снов', desc: 'Выставка голографических произведений искусства' }
              ].map((item, idx) => (
                <Card key={idx} className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-5xl mb-3">{item.icon}</div>
                    <h4 className="text-lg font-semibold text-purple-700 mb-2">{item.title}</h4>
                    <p className="text-sm text-purple-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-r from-purple-100/50 to-pink-100/50">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-2 border-purple-300 shadow-xl">
            <CardContent className="p-8 text-center">
              <Icon name="Phone" size={48} className="mx-auto mb-4 text-purple-600" />
              <h2 className="text-3xl font-bold mb-4 text-purple-800">Свяжитесь с нами</h2>
              <p className="text-purple-600 mb-6">
                Хотите узнать больше о тайнах Хунч-Ханчии или найти подземный город Глебусик?
              </p>
              <a 
                href="tel:+79965939332"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                <Icon name="Phone" size={24} />
                +7 996 593 93 32
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="text-4xl mb-4">✨ 🪐 ✨</div>
          <h3 className="text-2xl font-semibold mb-2">Добро пожаловать в Хунч-Ханчию</h3>
          <p className="text-purple-200 mb-3">Страна мечты на кольцах Сатурна</p>
          <a href="tel:+79965939332" className="text-purple-300 hover:text-white transition-colors">
            +7 996 593 93 32
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;