import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

interface Theme {
  id: string
  name: string
  nameEn: string
  icon: string
  gradient: string
}

const themes: Theme[] = [
  { id: 'animals', name: '动物世界', nameEn: 'Animals', icon: '🐾', gradient: 'from-green-400 to-emerald-500' },
  { id: 'colors', name: '缤纷色彩', nameEn: 'Colors', icon: '🎨', gradient: 'from-purple-400 to-pink-500' },
  { id: 'fruits', name: '美味水果', nameEn: 'Fruits', icon: '🍎', gradient: 'from-orange-400 to-red-500' },
  { id: 'numbers', name: '神奇数字', nameEn: 'Numbers', icon: '🔢', gradient: 'from-blue-400 to-cyan-500' },
]

const PracticeLevel: React.FC = () => {
  const { level } = useParams<{ level: string }>()
  const navigate = useNavigate()

  const levelNames: Record<string, string> = {
    beginner: '入门',
    intermediate: '初级',
    advanced: '高级',
  }

  const levelColors: Record<string, string> = {
    beginner: 'from-green-400 to-emerald-500',
    intermediate: 'from-blue-400 to-cyan-500',
    advanced: 'from-purple-400 to-pink-500',
  }

  const handleBackClick = () => {
    navigate('/practice')
  }

  const handleThemeClick = (theme: string) => {
    navigate(`/practice/${theme}`)
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="w-[320px] h-[320px] mx-auto my-auto bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col">
        {/* Top Bar */}
        <div className={`bg-gradient-to-r ${levelColors[level || 'beginner']} p-3 flex items-center justify-between text-white`}>
          <button
            className="p-2 rounded-full hover:bg-white/20 active:scale-95"
            onClick={handleBackClick}
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-base font-bold">{levelNames[level || 'beginner']}阶段</h1>
          <div className="w-8"></div> {/* Spacer */}
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 p-4 space-y-3 overflow-y-auto">
          {/* Title */}
          <div className="text-center mb-4">
            <h2 className="text-lg font-bold">选择主题</h2>
            <p className="text-xs text-gray-500">每个主题有3个关卡，收集星星吧！</p>
          </div>
          {themes.map((theme) => {
            // 计算每个主题的星星数量
            const getStarCount = (themeId: string) => {
              if (themeId === 'animals') {
                return 1; // 动物世界有1颗星
              }
              return 0; // 其他主题暂时0颗星
            };
            
            const starCount = getStarCount(theme.id);
            
            return (
              <div
                key={theme.id}
                className={`p-4 rounded-xl bg-gradient-to-r ${theme.gradient} text-white shadow-lg cursor-pointer active:scale-95`}
                onClick={() => handleThemeClick(theme.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-xl mr-3">{theme.icon}</span>
                    <div>
                      <h3 className="font-bold">{theme.name}</h3>
                      <p className="text-xs opacity-90">{theme.nameEn}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex space-x-1">
                      {[1, 2, 3].map((star) => (
                        <span key={star} className={`text-xs ${star <= starCount ? 'text-yellow-300' : 'text-white/60'}`}>★</span>
                      ))}
                    </div>
                    <span className="text-xs ml-2">{starCount}/3 星</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default PracticeLevel