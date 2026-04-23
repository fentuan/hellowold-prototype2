import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Check, Lock } from 'lucide-react'

interface Unit {
  id: number
  name: string
  nameEn: string
  icon: string
  completed: boolean
  locked: boolean
}

const PracticeStage: React.FC = () => {
  const { theme, stageId } = useParams<{ theme: string; stageId: string }>()
  const navigate = useNavigate()

  const themeNames: Record<string, { name: string; nameEn: string; color: string }> = {
    animals: { name: '动物世界', nameEn: 'Animals', color: 'from-green-400 to-emerald-500' },
    colors: { name: '缤纷色彩', nameEn: 'Colors', color: 'from-purple-400 to-pink-500' },
    fruits: { name: '美味水果', nameEn: 'Fruits', color: 'from-orange-400 to-red-500' },
    numbers: { name: '神奇数字', nameEn: 'Numbers', color: 'from-blue-400 to-cyan-500' },
  }

  const currentTheme = themeNames[theme || 'animals']
  const stageNum = parseInt(stageId || '1')
  // 根据不同 stage 设置不同的完成单元数
  const completedUnits = stageNum === 1 ? 4 : 1 // 动物世界I完成4个单元，动物世界II只完成1个单元
  const totalUnits = 4

  const units: Unit[] = [
    {
      id: 1,
      name: '单元一',
      nameEn: 'Unit 1',
      icon: '📚',
      completed: true,
      locked: false,
    },
    {
      id: 2,
      name: '单元二',
      nameEn: 'Unit 2',
      icon: '✏️',
      completed: stageNum === 1,
      locked: stageNum !== 1 || completedUnits < 2,
    },
    {
      id: 3,
      name: '单元三',
      nameEn: 'Unit 3',
      icon: '🎯',
      completed: stageNum === 1,
      locked: stageNum !== 1 || completedUnits < 3,
    },
    {
      id: 4,
      name: '单元四',
      nameEn: 'Unit 4',
      icon: '📻', // 电台图标
      completed: stageNum === 1,
      locked: stageNum !== 1 || completedUnits < 4,
    },
  ]

  const handleBackClick = () => {
    // 导航到当前主题的闯关路线页面
    navigate(`/practice/${theme}`, { replace: true })
  }

  const handleUnitClick = (unit: Unit) => {
    if (!unit.locked) {
      navigate(`/practice/${theme}/stage/${stageId}/unit/${unit.id}`)
    }
  }

  const handleBossClick = () => {
    if (completedUnits >= 4) {
      // Navigate to boss battle unit
      navigate(`/practice/${theme}/stage/${stageId}/unit/5`)
    }
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="w-[320px] h-[320px] mx-auto my-auto bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col">
        {/* Top Bar */}
        <div className={`bg-gradient-to-r ${currentTheme.color} p-3 flex items-center justify-between text-white`}>
          <button
            className="p-2 rounded-full hover:bg-white/20 active:scale-95"
            onClick={handleBackClick}
          >
            <ArrowLeft size={20} />
          </button>
          <div className="text-center">
            <h1 className="text-base font-bold">{currentTheme.name}</h1>
            <p className="text-xs">{currentTheme.nameEn}</p>
          </div>
          <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
            {completedUnits}/{totalUnits}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="px-4 py-2 bg-white border-b border-gray-100">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${currentTheme.color} transition-all duration-500`}
              style={{ width: `${(completedUnits / totalUnits) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Units */}
        <div className="flex-1 p-4 overflow-y-auto">
          {/* First Row */}
          <div className="flex justify-between mb-4 space-x-2">
            {units.slice(0, 2).map((unit) => (
              <div 
                key={unit.id}
                className={`flex-1 h-32 rounded-lg flex flex-col items-center justify-center p-2 cursor-pointer active:scale-95 transition-all duration-300 ${
                  unit.locked ? 'bg-gray-100 opacity-70' : 
                  unit.completed ? 'bg-green-50' : 'bg-purple-50'
                }`}
                onClick={() => handleUnitClick(unit)}
              >
                <div className="text-2xl mb-2">{unit.icon}</div>
                <h3 className="text-sm font-bold">{unit.name}</h3>
                <p className="text-xs text-gray-500">{unit.nameEn}</p>
                {unit.completed && (
                  <div className="mt-1 text-green-500">
                    <Check size={16} />
                  </div>
                )}
                {unit.locked && (
                  <div className="mt-1 text-gray-400">
                    <Lock size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex justify-between mb-6 space-x-2">
            {units.slice(2, 4).map((unit) => (
              <div 
                key={unit.id}
                className={`flex-1 h-32 rounded-lg flex flex-col items-center justify-center p-2 cursor-pointer active:scale-95 transition-all duration-300 ${
                  unit.locked ? 'bg-gray-100 opacity-70' : 
                  unit.completed ? 'bg-green-50' : 'bg-purple-50'
                }`}
                onClick={() => handleUnitClick(unit)}
              >
                <div className="text-2xl mb-2">{unit.icon}</div>
                <h3 className="text-sm font-bold">{unit.name}</h3>
                <p className="text-xs text-gray-500">{unit.nameEn}</p>
                {unit.completed && (
                  <div className="mt-1 text-green-500">
                    <Check size={16} />
                  </div>
                )}
                {unit.locked && (
                  <div className="mt-1 text-gray-400">
                    <Lock size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Boss Section */}
          <div className="mt-4">
            <h3 className="text-center font-bold mb-3">守关大将</h3>
            <div 
              className={`w-full h-32 rounded-lg flex flex-col items-center justify-center p-2 cursor-pointer active:scale-95 transition-all duration-300 ${
                completedUnits >= 4 ? 'bg-yellow-50' : 'bg-gray-100 opacity-70'
              }`}
              onClick={handleBossClick}
            >
              {completedUnits >= 4 ? (
                <>
                  <div className="text-4xl mb-2">🐯</div>
                  <p className="text-sm font-medium">挑战守关大将</p>
                </>
              ) : (
                <>
                  <div className="text-4xl mb-2 opacity-50">🐯</div>
                  <div className="text-gray-400 text-xs text-center">
                    <Lock size={16} className="inline-block mb-1" />
                    <p>完成4个单元解锁</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PracticeStage