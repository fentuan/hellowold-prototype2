import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Star, Lock } from 'lucide-react'

interface Stage {
  id: string
  themeId: string
  themeName: string
  themeNameEn: string
  color: string
  unitsCompleted: number
  totalUnits: number
  bossCompleted: boolean
  starEarned: boolean
  locked?: boolean
}

const PracticePath: React.FC = () => {
  const { theme } = useParams<{ theme: string }>()
  const navigate = useNavigate()

  const themeNames: Record<string, { name: string; nameEn: string; color: string }> = {
    animals: { name: '动物世界', nameEn: 'Animals', color: 'from-green-400 to-emerald-500' },
    colors: { name: '缤纷色彩', nameEn: 'Colors', color: 'from-purple-400 to-pink-500' },
    fruits: { name: '美味水果', nameEn: 'Fruits', color: 'from-orange-400 to-red-500' },
    numbers: { name: '神奇数字', nameEn: 'Numbers', color: 'from-blue-400 to-cyan-500' },
  }

  const stages: Stage[] = [
    {
      id: '1',
      themeId: theme || 'animals',
      themeName: themeNames[theme || 'animals'].name,
      themeNameEn: themeNames[theme || 'animals'].nameEn,
      color: themeNames[theme || 'animals'].color,
      unitsCompleted: 4,
      totalUnits: 4,
      bossCompleted: true,
      starEarned: true,
    },
    {
      id: '2',
      themeId: theme || 'animals',
      themeName: themeNames[theme || 'animals'].name,
      themeNameEn: themeNames[theme || 'animals'].nameEn,
      color: themeNames[theme || 'animals'].color,
      unitsCompleted: 1,
      totalUnits: 4,
      bossCompleted: false,
      starEarned: false,
    },
    {
      id: '3',
      themeId: theme || 'animals',
      themeName: themeNames[theme || 'animals'].name,
      themeNameEn: themeNames[theme || 'animals'].nameEn,
      color: themeNames[theme || 'animals'].color,
      unitsCompleted: 0,
      totalUnits: 4,
      bossCompleted: false,
      starEarned: false,
      locked: true,
    },
  ]

  const handleBackClick = () => {
    navigate('/practice/level/beginner')
  }

  const handleStageClick = (stageId: string) => {
    navigate(`/practice/${theme}/stage/${stageId}`)
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="w-[320px] h-[320px] mx-auto my-auto bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col">
        {/* Top Bar */}
        <div className={`bg-gradient-to-r ${themeNames[theme || 'animals'].color} p-3 flex items-center justify-between text-white`}>
          <button
            className="p-2 rounded-full hover:bg-white/20 active:scale-95"
            onClick={handleBackClick}
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-base font-bold">闯关路线</h1>
          <div className="w-8"></div> {/* Spacer */}
        </div>

        {/* Stage Path */}
        <div className="flex-1 p-4 overflow-y-auto">
          {stages.map((stage, index) => (
            <div key={stage.id} className="relative mb-12">
              {/* Connector Line */}
              {index < stages.length - 1 && (
                <div className={`absolute top-24 left-12 w-0.5 h-12 ${stage.locked ? 'bg-gray-300' : ''}`}
                  style={{ 
                    backgroundColor: stage.locked ? '#9ca3af' : 
                                     stage.color === 'from-green-400 to-emerald-500' ? '#34d399' : 
                                     stage.color === 'from-purple-400 to-pink-500' ? '#c084fc' : 
                                     stage.color === 'from-orange-400 to-red-500' ? '#f97316' : '#38bdf8' 
                  }}
                ></div>
              )}

              {/* Stage Circle */}
              <div className="relative flex items-center">
                <div className={`w-24 h-24 flex items-center justify-center ${stage.locked ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer active:scale-95'}`}
                  onClick={() => !stage.locked && handleStageClick(stage.id)}>
                  <svg width="96" height="96" viewBox="0 0 96 96">
                    {/* Outer gray ring */}
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      fill="none"
                      stroke="#d1d5db"
                      strokeWidth="8"
                    />
                    
                    {/* Progress arc */}
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      fill="none"
                      stroke={stage.locked ? '#9ca3af' : stage.color === 'from-green-400 to-emerald-500' ? '#34d399' : stage.color === 'from-purple-400 to-pink-500' ? '#c084fc' : stage.color === 'from-orange-400 to-red-500' ? '#f97316' : '#38bdf8'}
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${(stage.unitsCompleted / stage.totalUnits) * 251.33} 251.33`}
                      transform="rotate(-90 48 48)"
                      className="transition-all duration-500"
                    />
                    
                    {/* Inner circle */}
                    <circle
                      cx="48"
                      cy="48"
                      r="30"
                      fill={stage.locked ? '#f3f4f6' : stage.color === 'from-green-400 to-emerald-500' ? 'url(#greenGradient)' : stage.color === 'from-purple-400 to-pink-500' ? 'url(#purpleGradient)' : stage.color === 'from-orange-400 to-red-500' ? 'url(#orangeGradient)' : 'url(#blueGradient)'}
                    />
                    
                    {/* Star */}
                    <path
                      d="M48 32 L52 42 L63 42 L54 49 L58 60 L48 53 L38 60 L42 49 L33 42 L44 42 Z"
                      fill={stage.starEarned ? '#fbbf24' : stage.locked ? '#d1d5db' : 'rgba(255,255,255,0.4)'}
                    />
                    
                    {/* Lock icon for locked stage */}
                    {stage.locked && (
                      <path
                        d="M48 25 L48 35 M38 45 L58 45 L58 55 C58 58.31 55.31 61 52 61 L44 61 C40.69 61 38 58.31 38 55 L38 45 Z"
                        fill="#9ca3af"
                        stroke="#9ca3af"
                        strokeWidth="2"
                      />
                    )}
                    
                    <defs>
                      <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#86efac" />
                        <stop offset="100%" stopColor="#34d399" />
                      </linearGradient>
                      <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#e9d5ff" />
                        <stop offset="100%" stopColor="#c084fc" />
                      </linearGradient>
                      <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fed7aa" />
                        <stop offset="100%" stopColor="#f97316" />
                      </linearGradient>
                      <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#bfdbfe" />
                        <stop offset="100%" stopColor="#38bdf8" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Stage Info */}
                <div className="ml-4">
                  <h3 className="font-bold">{stage.themeName} {['I', 'II', 'III'][index]}</h3>
                  <p className="text-sm text-gray-600">{stage.themeNameEn} {['I', 'II', 'III'][index]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PracticePath